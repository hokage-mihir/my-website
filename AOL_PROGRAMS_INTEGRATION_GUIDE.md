# Art of Living Programs - Excel Integration System

A comprehensive guide for implementing dynamic AOL program management using Excel/CSV exports from the AOL portal. This system automatically parses program data and updates website displays without manual intervention.

## 📋 Table of Contents

1. [System Overview](#system-overview)
2. [Prerequisites](#prerequisites)
3. [Installation & Setup](#installation--setup)
4. [Core Parser Implementation](#core-parser-implementation)
5. [Data Structure & Validation](#data-structure--validation)
6. [Frontend Integration](#frontend-integration)
7. [Configuration & Customization](#configuration--customization)
8. [Framework-Specific Integration](#framework-specific-integration)
9. [Error Handling & Validation](#error-handling--validation)
10. [Deployment & Maintenance](#deployment--maintenance)
11. [Troubleshooting](#troubleshooting)

---

## System Overview

### What This System Does
- **Parses Excel/CSV exports** from AOL portal containing program schedules
- **Extracts & validates** program data (dates, locations, teachers, registration links)
- **Generates structured JSON** for easy frontend consumption
- **Provides smart address parsing** for location display optimization
- **Handles program type mapping** for consistent UI display
- **Supports multiple regions** with configurable settings

### Key Benefits
- ✅ **Automated Updates**: No manual data entry required
- ✅ **Consistent Format**: Standardized JSON output for all projects
- ✅ **Error Prevention**: Validates data integrity and format
- ✅ **Performance Optimized**: Generates static JSON for fast loading
- ✅ **Reusable**: Works across React, Next.js, Vite, and other frameworks

---

## Prerequisites

### Required Software
```bash
# Node.js (v16 or higher)
node --version

# npm or yarn package manager
npm --version
```

### Expected Excel Format
The system expects CSV exports from AOL portal with these **exact column headers**:
```
Program ID, Status, GK Code, Program Type, Sub Programs, Registered Pax Count, Registration Url, Teachers, Address, City, Start Date, Start Time, CRF Pax Count
```

### Sample Data Row
```csv
TM83318,Active,MH006,Happiness Program (3 Days),,0,aolt.in/900847,"Jyoti Vyas(MH0818), Mihir Chavan(MH5688)","D2, Parmeswari centre, Mulund West, Mumbai, Maharashtra 400080",Mumbai,15 Aug 2025,3:00 PM,0
```

---

## Installation & Setup

### 1. Create Parser Script

Create `parse-aol-programs.cjs` in your project root:

```javascript
const fs = require('fs');
const path = require('path');

/**
 * AOL Programs Parser - Converts CSV/Excel exports to structured JSON
 * Compatible with AOL portal export format
 */

function parseAOLPrograms(filePath, config = {}) {
  const defaultConfig = {
    requiredColumns: [
      'Program ID', 'Status', 'Program Type', 'Start Date', 
      'Start Time', 'City', 'Address', 'Teachers', 'Registration Url'
    ],
    dateFormat: 'DD MMM YYYY',
    statusFilter: 'Active',
    outputPath: 'src/data/aol-programs.json'
  };
  
  const settings = { ...defaultConfig, ...config };
  
  try {
    console.log(`🔄 Parsing AOL programs from: ${filePath}`);
    
    // Read CSV file
    const csvContent = fs.readFileSync(filePath, 'utf-8');
    const lines = csvContent.trim().split('\n');
    
    if (lines.length < 2) {
      throw new Error('❌ Invalid file: Must contain header and at least one data row');
    }
    
    // Parse headers
    const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, ''));
    
    // Validate required columns
    const missingColumns = settings.requiredColumns.filter(col => !headers.includes(col));
    if (missingColumns.length > 0) {
      throw new Error(`❌ Missing required columns: ${missingColumns.join(', ')}`);
    }
    
    console.log(`✅ Found ${headers.length} columns, ${lines.length - 1} data rows`);
    
    const programs = [];
    
    // Process data rows
    for (let i = 1; i < lines.length; i++) {
      const values = parseCSVLine(lines[i]);
      
      if (values.length !== headers.length) {
        console.warn(`⚠️  Row ${i}: Column count mismatch, skipping`);
        continue;
      }
      
      const program = {};
      headers.forEach((header, index) => {
        program[header] = values[index] || '';
      });
      
      // Filter only active programs
      if (program['Status'] === settings.statusFilter && program['Program Type']) {
        const structuredProgram = structureProgram(program);
        if (validateProgram(structuredProgram)) {
          programs.push(structuredProgram);
        }
      }
    }
    
    console.log(`✅ Successfully parsed ${programs.length} active programs`);
    return programs;
    
  } catch (error) {
    console.error('❌ Error parsing AOL programs:', error.message);
    throw error;
  }
}

function parseCSVLine(line) {
  const result = [];
  let current = '';
  let inQuotes = false;
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  
  result.push(current.trim());
  return result.map(val => val.replace(/^"|"$/g, '')); // Remove surrounding quotes
}

function structureProgram(rawProgram) {
  return {
    id: rawProgram['Program ID'] || '',
    status: rawProgram['Status'] || '',
    gkCode: rawProgram['GK Code'] || '',
    programType: rawProgram['Program Type'] || '',
    subPrograms: rawProgram['Sub Programs'] || '',
    registeredCount: parseInt(rawProgram['Registered Pax Count']) || 0,
    registrationUrl: rawProgram['Registration Url'] || '',
    teachers: parseTeachers(rawProgram['Teachers'] || ''),
    address: rawProgram['Address'] || '',
    city: rawProgram['City'] || '',
    startDate: rawProgram['Start Date'] || '',
    startTime: rawProgram['Start Time'] || '',
    crfCount: parseInt(rawProgram['CRF Pax Count']) || 0,
    formattedDate: formatDateForDisplay(rawProgram['Start Date'])
  };
}

function parseTeachers(teachersString) {
  if (!teachersString || teachersString.trim() === '') {
    return [];
  }
  
  const teachers = [];
  const teacherRegex = /([^,()]+)\\(([^)]+)\\)/g;
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
    if (isNaN(date.getTime())) {
      return dateString; // Return original if invalid
    }
    
    return date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  } catch (error) {
    return dateString;
  }
}

function validateProgram(program) {
  const required = ['id', 'programType', 'startDate', 'city'];
  const missing = required.filter(field => !program[field]);
  
  if (missing.length > 0) {
    console.warn(`⚠️  Program ${program.id}: Missing required fields: ${missing.join(', ')}`);
    return false;
  }
  
  // Validate date
  if (program.startDate && isNaN(new Date(program.startDate).getTime())) {
    console.warn(`⚠️  Program ${program.id}: Invalid date format: ${program.startDate}`);
    return false;
  }
  
  return true;
}

function generateProgramsJson(programs, config = {}) {
  const settings = {
    groupBy: ['upcoming', 'byType', 'byCity'],
    sortBy: 'startDate',
    ...config
  };
  
  const result = {
    lastUpdated: new Date().toISOString(),
    totalPrograms: programs.length,
    programs: {}
  };
  
  // Group upcoming programs (future dates only)
  if (settings.groupBy.includes('upcoming')) {
    const currentDate = new Date();
    result.programs.upcoming = programs
      .filter(program => new Date(program.startDate) >= currentDate)
      .sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
  }
  
  // Group by program type
  if (settings.groupBy.includes('byType')) {
    result.programs.byType = {};
    programs.forEach(program => {
      if (!result.programs.byType[program.programType]) {
        result.programs.byType[program.programType] = [];
      }
      result.programs.byType[program.programType].push(program);
    });
  }
  
  // Group by city
  if (settings.groupBy.includes('byCity')) {
    result.programs.byCity = {};
    programs.forEach(program => {
      if (!result.programs.byCity[program.city]) {
        result.programs.byCity[program.city] = [];
      }
      result.programs.byCity[program.city].push(program);
    });
  }
  
  return result;
}

// Main execution
if (require.main === module) {
  const csvFilePath = process.argv[2] || './programs-export.csv';
  const outputPath = './src/data/aol-programs.json';
  
  try {
    const programs = parseAOLPrograms(csvFilePath);
    const programsData = generateProgramsJson(programs);
    
    // Ensure output directory exists
    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    // Write JSON file
    fs.writeFileSync(outputPath, JSON.stringify(programsData, null, 2));
    
    console.log(`🎉 Success! Generated ${outputPath}`);
    console.log(`📊 Statistics:`);
    console.log(`   - Total programs: ${programsData.totalPrograms}`);
    console.log(`   - Upcoming programs: ${programsData.programs.upcoming?.length || 0}`);
    console.log(`   - Program types: ${Object.keys(programsData.programs.byType || {}).length}`);
    console.log(`   - Cities: ${Object.keys(programsData.programs.byCity || {}).length}`);
    
  } catch (error) {
    console.error('💥 Failed to process programs:', error.message);
    process.exit(1);
  }
}

module.exports = {
  parseAOLPrograms,
  generateProgramsJson,
  formatDateForDisplay,
  parseTeachers
};
```

### 2. Add NPM Scripts

Add to your `package.json`:

```json
{
  "scripts": {
    "update-aol-programs": "node parse-aol-programs.cjs",
    "update-programs-with-file": "node parse-aol-programs.cjs"
  }
}
```

---

## Data Structure & Validation

### Input CSV Format
```csv
Program ID,Status,GK Code,Program Type,Sub Programs,Registered Pax Count,Registration Url,Teachers,Address,City,Start Date,Start Time,CRF Pax Count
TM83318,Active,MH006,Happiness Program (3 Days),,0,aolt.in/900847,"Jyoti Vyas(MH0818), Mihir Chavan(MH5688)","D2, Parmeswari centre, Mulund West, Mumbai, Maharashtra 400080",Mumbai,15 Aug 2025,3:00 PM,0
```

### Output JSON Structure
```json
{
  "lastUpdated": "2025-08-02T18:41:37.598Z",
  "totalPrograms": 3,
  "programs": {
    "upcoming": [
      {
        "id": "TM83318",
        "status": "Active",
        "gkCode": "MH006",
        "programType": "Happiness Program (3 Days)",
        "subPrograms": "",
        "registeredCount": 0,
        "registrationUrl": "aolt.in/900847",
        "teachers": [
          {
            "name": "Jyoti Vyas",
            "code": "MH0818"
          }
        ],
        "address": "D2, Parmeswari centre, Mulund West, Mumbai, Maharashtra 400080",
        "city": "Mumbai",
        "startDate": "15 Aug 2025",
        "startTime": "3:00 PM",
        "crfCount": 0,
        "formattedDate": "15 August 2025"
      }
    ],
    "byType": {
      "Happiness Program (3 Days)": [...]
    },
    "byCity": {
      "Mumbai": [...]
    }
  }
}
```

---

## Frontend Integration

### 1. React Component Example

```jsx
// components/ProgramsList.jsx
import React from 'react';
import programsData from '../data/aol-programs.json';

const ProgramsList = ({ programType = null, city = null }) => {
  // Helper function to extract area from address
  const getAreaCity = (address, city) => {
    if (!address) return city || '';
    
    const addressParts = address.split(',').map(part => part.trim());
    const pincodeIndex = addressParts.findIndex(part => /\\b\\d{6}\\b/.test(part));
    
    let area = '';
    
    // Look for directional areas
    for (let i = 0; i < addressParts.length; i++) {
      const part = addressParts[i];
      
      if (part.toLowerCase().includes('centre') || 
          part.toLowerCase().includes('complex') ||
          part.toLowerCase() === city?.toLowerCase() ||
          part.toLowerCase().includes('maharashtra') ||
          part.toLowerCase().includes('india') ||
          /\\b\\d{6}\\b/.test(part)) {
        continue;
      }
      
      if (part.includes('West') || part.includes('East') || 
          part.includes('North') || part.includes('South')) {
        area = part;
        break;
      }
    }
    
    return area ? `${area}, ${city}` : city || '';
  };

  // Filter programs based on props
  let programs = programsData.programs.upcoming || [];
  
  if (programType) {
    programs = programsData.programs.byType[programType] || [];
  }
  
  if (city) {
    programs = programs.filter(program => program.city === city);
  }

  return (
    <div className="programs-list">
      <h2>Upcoming Programs ({programs.length})</h2>
      
      {programs.map((program, index) => (
        <div key={program.id || index} className="program-card">
          <div className="program-header">
            <h3>{program.programType}</h3>
            <span className="program-date">{program.formattedDate}</span>
          </div>
          
          <div className="program-details">
            <p><strong>Location:</strong> {getAreaCity(program.address, program.city)}</p>
            <p><strong>Time:</strong> {program.startTime}</p>
            
            {program.teachers && program.teachers.length > 0 && (
              <p><strong>Teachers:</strong> {program.teachers.map(t => t.name).join(', ')}</p>
            )}
            
            <div className="program-actions">
              <a 
                href={`https://${program.registrationUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="register-button"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      ))}
      
      {programs.length === 0 && (
        <p>No programs available at the moment.</p>
      )}
    </div>
  );
};

export default ProgramsList;
```

### 2. Program Type Mapping Configuration

```javascript
// config/programTypes.js
export const PROGRAM_TYPE_MAPPING = {
  // UI Key -> Excel Program Types
  'happiness': ['Happiness Program', 'Happiness Program (3 Days)'],
  'youth': ['Happiness Program for Youth-3 Days', 'Youth Programs'],
  'ombw': ['OMBW', 'Online Meditation & Breath Workshop'],
  'part1': ['Part 1 Course', 'Part 1'],
  'advance': ['Advance Course', 'Advanced Course'],
  'blessing': ['Blessing Course'],
  'silence': ['Silence Course'],
  // Add more mappings as needed
};

export const getMatchingPrograms = (programKey, programsData) => {
  const matchingTypes = PROGRAM_TYPE_MAPPING[programKey] || [];
  const matchingPrograms = [];
  
  matchingTypes.forEach(type => {
    if (programsData.programs.byType[type]) {
      matchingPrograms.push(...programsData.programs.byType[type]);
    }
  });
  
  return matchingPrograms.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
};
```

### 3. Regional Configuration

```javascript
// config/regions.js
export const REGIONAL_CONFIG = {
  'mumbai': {
    cityNames: ['Mumbai', 'Thane', 'Navi Mumbai'],
    statePatterns: ['Maharashtra'],
    addressFilters: ['maharashtra', 'mumbai'],
    timezone: 'Asia/Kolkata'
  },
  'delhi': {
    cityNames: ['Delhi', 'New Delhi', 'Gurgaon', 'Noida'],
    statePatterns: ['Delhi', 'NCR'],
    addressFilters: ['delhi', 'ncr'],
    timezone: 'Asia/Kolkata'
  },
  'bangalore': {
    cityNames: ['Bangalore', 'Bengaluru'],
    statePatterns: ['Karnataka'],
    addressFilters: ['karnataka', 'bangalore', 'bengaluru'],
    timezone: 'Asia/Kolkata'
  }
};

export const getRegionalPrograms = (region, programsData) => {
  const config = REGIONAL_CONFIG[region];
  if (!config) return [];
  
  return programsData.programs.upcoming.filter(program => 
    config.cityNames.includes(program.city)
  );
};
```

---

## Framework-Specific Integration

### Vite (Current Implementation)

```javascript
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Ensure JSON files are included in build
      external: [],
    }
  }
});

// Usage in component
import programsData from './data/aol-programs.json';
```

### Next.js Implementation

```javascript
// next.config.js
module.exports = {
  webpack: (config) => {
    // Allow importing JSON files
    config.module.rules.push({
      test: /\\.json$/,
      type: 'json'
    });
    return config;
  }
};

// pages/programs.js
import { GetStaticProps } from 'next';
import fs from 'fs';
import path from 'path';

export default function ProgramsPage({ programs }) {
  return <ProgramsList programs={programs} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const filePath = path.join(process.cwd(), 'src/data/aol-programs.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const programs = JSON.parse(fileContents);
  
  return {
    props: { programs },
    revalidate: 3600, // Revalidate every hour
  };
};
```

### Create React App

```javascript
// src/hooks/usePrograms.js
import { useState, useEffect } from 'react';

export const usePrograms = () => {
  const [programs, setPrograms] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const loadPrograms = async () => {
      try {
        const response = await fetch('/data/aol-programs.json');
        if (!response.ok) throw new Error('Failed to load programs');
        const data = await response.json();
        setPrograms(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    loadPrograms();
  }, []);
  
  return { programs, loading, error };
};

// Copy JSON to public folder in build process
// package.json script: "postbuild": "cp src/data/aol-programs.json build/data/"
```

---

## Error Handling & Validation

### 1. File Format Validation

```javascript
function validateFileFormat(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const supportedFormats = ['.csv'];
  
  if (!supportedFormats.includes(ext)) {
    throw new Error(`❌ Unsupported file format: ${ext}. Please provide CSV file from AOL portal.`);
  }
  
  if (!fs.existsSync(filePath)) {
    throw new Error(`❌ File not found: ${filePath}`);
  }
}
```

### 2. Data Integrity Checks

```javascript
function validateDataIntegrity(programs) {
  const errors = [];
  
  programs.forEach((program, index) => {
    // Check required fields
    if (!program.id) errors.push(`Row ${index + 1}: Missing Program ID`);
    if (!program.programType) errors.push(`Row ${index + 1}: Missing Program Type`);
    if (!program.startDate) errors.push(`Row ${index + 1}: Missing Start Date`);
    
    // Validate date format
    if (program.startDate && isNaN(new Date(program.startDate))) {
      errors.push(`Row ${index + 1}: Invalid date format: ${program.startDate}`);
    }
    
    // Validate registration URL
    if (program.registrationUrl && !program.registrationUrl.includes('aolt.in')) {
      errors.push(`Row ${index + 1}: Invalid registration URL format`);
    }
  });
  
  if (errors.length > 0) {
    throw new Error(`❌ Data validation failed:\\n${errors.join('\\n')}`);
  }
  
  return true;
}
```

### 3. Frontend Error Boundaries

```jsx
// components/ErrorBoundary.jsx
import React from 'react';

class ProgramsErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Programs loading error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-fallback">
          <h2>Unable to load programs</h2>
          <p>Please check if the programs data is available and try refreshing the page.</p>
          <button onClick={() => window.location.reload()}>
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ProgramsErrorBoundary;
```

---

## Deployment & Maintenance

### 1. Update Process

```bash
# Weekly/Fortnightly update process
# 1. Download CSV from AOL portal
# 2. Place in project root as 'programs-export.csv'
# 3. Run parser
npm run update-aol-programs programs-export.csv

# 4. Verify output
cat src/data/aol-programs.json | jq '.programs.upcoming | length'

# 5. Build and deploy
npm run build
```

### 2. Automated Update Script

```bash
#!/bin/bash
# update-programs.sh

echo "🔄 Starting AOL Programs update..."

# Check if CSV file exists
if [ ! -f "$1" ]; then
    echo "❌ Error: CSV file not provided or doesn't exist"
    echo "Usage: ./update-programs.sh path/to/programs.csv"
    exit 1
fi

# Backup existing data
if [ -f "src/data/aol-programs.json" ]; then
    cp src/data/aol-programs.json src/data/aol-programs.json.backup
    echo "✅ Created backup of existing data"
fi

# Run parser
echo "🔄 Parsing CSV file..."
npm run update-aol-programs "$1"

if [ $? -eq 0 ]; then
    echo "✅ Programs updated successfully!"
    
    # Build project
    echo "🔄 Building project..."
    npm run build
    
    if [ $? -eq 0 ]; then
        echo "🎉 Build completed successfully!"
        echo "📊 Summary:"
        node -e "const data = require('./src/data/aol-programs.json'); console.log(\`- Total programs: \${data.totalPrograms}\`); console.log(\`- Upcoming: \${data.programs.upcoming.length}\`); console.log(\`- Last updated: \${data.lastUpdated}\`);"
    else
        echo "❌ Build failed! Restoring backup..."
        mv src/data/aol-programs.json.backup src/data/aol-programs.json
    fi
else
    echo "❌ Parser failed! Check CSV format and try again."
    exit 1
fi
```

### 3. CI/CD Integration

```yaml
# .github/workflows/update-programs.yml
name: Update AOL Programs

on:
  workflow_dispatch:
    inputs:
      csv_url:
        description: 'URL to CSV file or manual trigger'
        required: false

jobs:
  update-programs:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Download CSV (if URL provided)
      if: github.event.inputs.csv_url
      run: |
        curl -o programs-export.csv "${{ github.event.inputs.csv_url }}"
    
    - name: Update programs data
      run: |
        npm run update-aol-programs programs-export.csv
    
    - name: Build project
      run: npm run build
    
    - name: Commit changes
      run: |
        git config --local user.email "action@github.com"
        git config --local user.name "GitHub Action"
        git add src/data/aol-programs.json
        git commit -m "Update AOL programs data" || exit 0
        git push
```

---

## Troubleshooting

### Common Issues & Solutions

#### 1. "Column count mismatch" Error
```
❌ Problem: CSV rows have different number of columns
✅ Solution: Check for unescaped commas in data fields
   - Ensure text fields with commas are properly quoted
   - Example: "D2, Parmeswari centre, Mumbai" not D2, Parmeswari centre, Mumbai
```

#### 2. "Invalid date format" Error
```
❌ Problem: Date parsing fails
✅ Solution: Verify date format matches expected pattern
   - Expected: "15 Aug 2025" or "15/08/2025"
   - Check for extra spaces or invalid characters
```

#### 3. "Teachers parsing failed" Error
```
❌ Problem: Teacher names/codes not extracting correctly
✅ Solution: Verify teacher format
   - Expected: "Jyoti Vyas(MH0818), Mihir Chavan(MH5688)"
   - Each teacher: "Name(Code)"
   - Multiple teachers separated by commas
```

#### 4. "Build fails after update" Error
```
❌ Problem: JSON file invalid or import fails
✅ Solution: Validate JSON syntax
   - Run: node -e "console.log(JSON.parse(require('fs').readFileSync('src/data/aol-programs.json', 'utf8')))"
   - Check for proper JSON structure
```

#### 5. "No upcoming programs showing" Error
```
❌ Problem: All programs filtered out
✅ Solution: Check date filtering logic
   - Verify system date is correct
   - Check if all program dates are in the past
   - Ensure status is "Active"
```

### Debug Mode

Enable debug logging by setting environment variable:

```bash
DEBUG=aol-programs npm run update-aol-programs programs.csv
```

### Validation Commands

```bash
# Check JSON structure
jq '.programs.upcoming | length' src/data/aol-programs.json

# Validate specific program type
jq '.programs.byType | keys' src/data/aol-programs.json

# Check date range
jq '.programs.upcoming[] | .formattedDate' src/data/aol-programs.json

# Find programs by city
jq '.programs.byCity.Mumbai | length' src/data/aol-programs.json
```

---

## Advanced Features

### 1. Multi-Region Support

```javascript
// config/multiRegion.js
const REGION_CONFIGS = {
  'india-west': {
    cities: ['Mumbai', 'Pune', 'Ahmedabad'],
    timezone: 'Asia/Kolkata',
    currency: 'INR'
  },
  'india-south': {
    cities: ['Bangalore', 'Chennai', 'Hyderabad'],
    timezone: 'Asia/Kolkata',
    currency: 'INR'
  },
  'usa-west': {
    cities: ['San Francisco', 'Los Angeles', 'Seattle'],
    timezone: 'America/Los_Angeles',
    currency: 'USD'
  }
};

function parseByRegion(csvPath, region) {
  const config = REGION_CONFIGS[region];
  const programs = parseAOLPrograms(csvPath);
  
  return programs.filter(program => 
    config.cities.includes(program.city)
  );
}
```

### 2. Real-time Updates (Optional)

```javascript
// For dynamic applications that need real-time updates
class AOLProgramsManager {
  constructor(updateInterval = 3600000) { // 1 hour
    this.updateInterval = updateInterval;
    this.programs = null;
    this.lastUpdate = null;
  }
  
  async loadPrograms() {
    try {
      const response = await fetch('/api/programs');
      this.programs = await response.json();
      this.lastUpdate = new Date();
    } catch (error) {
      console.error('Failed to load programs:', error);
    }
  }
  
  getUpcomingPrograms(limit = 5) {
    if (!this.programs) return [];
    return this.programs.programs.upcoming.slice(0, limit);
  }
  
  startAutoUpdate() {
    setInterval(() => {
      this.loadPrograms();
    }, this.updateInterval);
  }
}
```

---

## Conclusion

This system provides a robust, reusable solution for integrating AOL program data across different projects and frameworks. The modular design allows for easy customization while maintaining consistency in data structure and validation.

### Key Benefits Achieved:
- ✅ **Automated data processing** from AOL portal exports
- ✅ **Consistent JSON structure** across all implementations
- ✅ **Comprehensive error handling** and validation
- ✅ **Framework agnostic** - works with React, Next.js, Vite, etc.
- ✅ **Regional customization** support
- ✅ **Performance optimized** with static JSON generation

### Next Steps:
1. Test with your CSV export format
2. Customize program type mappings for your region
3. Implement UI components based on your design requirements
4. Set up automated update workflow

For additional support or feature requests, refer to the troubleshooting section or create configuration variations based on your specific requirements.