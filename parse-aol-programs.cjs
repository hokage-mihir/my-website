const fs = require('fs');
const path = require('path');

/**
 * Parse Art of Living Programs Excel/HTML file
 * This script reads the HTML table format from the Excel file and converts it to JSON
 */

function parseAOLPrograms(filePath) {
  try {
    // Read the HTML content from the Excel file
    const htmlContent = fs.readFileSync(filePath, 'utf-8');
    
    // Simple HTML table parsing (since it's HTML disguised as Excel)
    const tableRegex = /<table[^>]*>([\s\S]*?)<\/table>/i;
    const rowRegex = /<tr[^>]*>([\s\S]*?)<\/tr>/gi;
    const cellRegex = /<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/gi;
    
    const tableMatch = htmlContent.match(tableRegex);
    if (!tableMatch) {
      throw new Error('No table found in the file');
    }
    
    const tableContent = tableMatch[1];
    const rows = [];
    let rowMatch;
    
    while ((rowMatch = rowRegex.exec(tableContent)) !== null) {
      const rowContent = rowMatch[1];
      const cells = [];
      let cellMatch;
      
      while ((cellMatch = cellRegex.exec(rowContent)) !== null) {
        // Clean up the cell content - remove HTML tags and decode entities
        let cellValue = cellMatch[1]
          .replace(/<[^>]*>/g, '') // Remove HTML tags
          .replace(/&nbsp;/g, ' ') // Replace &nbsp; with space
          .replace(/&amp;/g, '&') // Replace &amp; with &
          .replace(/&lt;/g, '<') // Replace &lt; with <
          .replace(/&gt;/g, '>') // Replace &gt; with >
          .trim();
        
        cells.push(cellValue);
      }
      
      if (cells.length > 0) {
        rows.push(cells);
      }
    }
    
    if (rows.length === 0) {
      throw new Error('No rows found in the table');
    }
    
    // First row should be headers
    const headers = rows[0];
    const programs = [];
    
    // Process data rows (skip header row)
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      const program = {};
      
      // Map each cell to its corresponding header
      headers.forEach((header, index) => {
        if (index < row.length) {
          program[header] = row[index] || '';
        }
      });
      
      // Only include active programs with valid data
      if (program['Status'] === 'Active' && program['Program Type']) {
        // Parse and structure the program data
        const structuredProgram = {
          id: program['Program ID'] || '',
          status: program['Status'] || '',
          gkCode: program['GK Code'] || '',
          programType: program['Program Type'] || '',
          subPrograms: program['Sub Programs'] || '',
          registeredCount: parseInt(program['Registered Pax Count']) || 0,
          registrationUrl: program['Registration Url'] || '',
          teachers: parseTeachers(program['Teachers'] || ''),
          address: program['Address'] || '',
          city: program['City'] || '',
          startDate: program['Start Date'] || '',
          startTime: program['Start Time'] || '',
          crfCount: parseInt(program['CRF Pax Count']) || 0
        };
        
        programs.push(structuredProgram);
      }
    }
    
    return programs;
    
  } catch (error) {
    console.error('Error parsing AOL programs:', error);
    return [];
  }
}

function parseTeachers(teachersString) {
  if (!teachersString || teachersString.trim() === '') {
    return [];
  }
  
  // Teachers are in format "Name(Code), Name2(Code2)"
  const teachers = [];
  const teacherRegex = /([^,()]+)\(([^)]+)\)/g;
  let match;
  
  while ((match = teacherRegex.exec(teachersString)) !== null) {
    teachers.push({
      name: match[1].trim(),
      code: match[2].trim()
    });
  }
  
  return teachers;
}

function formatDateForDisplay(dateString) {
  if (!dateString) return '';
  
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  } catch (error) {
    return dateString; // Return original if parsing fails
  }
}

function generateProgramsJson(programs) {
  // Group programs by type for easier use in React
  const groupedPrograms = {
    upcoming: [],
    byType: {},
    byCity: {}
  };
  
  const currentDate = new Date();
  
  programs.forEach(program => {
    // Add to upcoming if date is in the future
    const programDate = new Date(program.startDate);
    if (programDate >= currentDate) {
      groupedPrograms.upcoming.push({
        ...program,
        formattedDate: formatDateForDisplay(program.startDate)
      });
    }
    
    // Group by type
    if (!groupedPrograms.byType[program.programType]) {
      groupedPrograms.byType[program.programType] = [];
    }
    groupedPrograms.byType[program.programType].push(program);
    
    // Group by city
    if (!groupedPrograms.byCity[program.city]) {
      groupedPrograms.byCity[program.city] = [];
    }
    groupedPrograms.byCity[program.city].push(program);
  });
  
  // Sort upcoming programs by date
  groupedPrograms.upcoming.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
  
  return {
    lastUpdated: new Date().toISOString(),
    totalPrograms: programs.length,
    programs: groupedPrograms
  };
}

// Main execution
if (require.main === module) {
  const excelFilePath = '/Users/mihirchavan/Downloads/Programs_List03-08-2025.xls';
  const outputPath = path.join(__dirname, 'src', 'data', 'aol-programs.json');
  
  console.log('Parsing AOL programs from:', excelFilePath);
  
  const programs = parseAOLPrograms(excelFilePath);
  const programsData = generateProgramsJson(programs);
  
  console.log(`Found ${programs.length} active programs`);
  console.log(`Upcoming programs: ${programsData.programs.upcoming.length}`);
  
  // Create data directory if it doesn't exist
  const dataDir = path.dirname(outputPath);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  
  // Write to JSON file
  fs.writeFileSync(outputPath, JSON.stringify(programsData, null, 2));
  console.log('Programs data written to:', outputPath);
  
  // Log sample data for verification
  if (programsData.programs.upcoming.length > 0) {
    console.log('\nSample upcoming program:');
    console.log(JSON.stringify(programsData.programs.upcoming[0], null, 2));
  }
}

module.exports = {
  parseAOLPrograms,
  generateProgramsJson,
  formatDateForDisplay
};