# Art of Living Programs - Dynamic Update System

This system allows you to automatically update the Art of Living programs on your website by parsing Excel files from the AOL portal.

## How It Works

1. **Excel File Parser**: The `parse-aol-programs.cjs` script reads the HTML table format from AOL Excel exports
2. **JSON Data Generation**: Converts program data into structured JSON format in `src/data/aol-programs.json`
3. **Dynamic Website Display**: The AOL page automatically displays current programs from this data

## Current Features

✅ **Automatic Program Parsing**
- Reads program details (dates, times, locations, teachers)
- Extracts registration URLs and participant counts
- Groups programs by type, city, and upcoming dates

✅ **Enhanced Program Display**
- Shows full address and teacher information
- Displays registration counts and available spots
- Direct registration links to AOL portal

✅ **Smart Data Processing**
- Filters only active programs
- Sorts upcoming programs by date
- Handles teacher name parsing with certification codes

## How to Update Programs

### Step 1: Download Excel File
1. Go to the AOL portal and export the programs list
2. Save the Excel file to `/Users/mihirchavan/Downloads/Programs_List[DATE].xls`

### Step 2: Update the Parser (if needed)
If the filename changes, update line 182 in `parse-aol-programs.cjs`:
```javascript
const excelFilePath = '/Users/mihirchavan/Downloads/Programs_List03-08-2025.xls';
```

### Step 3: Run the Update Script
```bash
npm run update-aol-programs
```

### Step 4: Build and Deploy
```bash
npm run build
```

## Current Data Structure

The system extracts these fields from each program:

- **Program ID**: Unique identifier (e.g., TM83318)
- **Program Type**: "Happiness Program", "Youth Programs", etc.
- **Dates & Times**: Start date and time with formatting
- **Location**: City and full address
- **Teachers**: Names and certification codes
- **Registration**: Direct AOL portal links
- **Capacity**: Current registrations and spots remaining

## Sample Program Output

```json
{
  "id": "TM83318",
  "programType": "Happiness Program (3 Days)",
  "formattedDate": "15 August 2025",
  "startTime": "3:00 PM",
  "city": "Mumbai",
  "address": "D2, Parmeswari centre, Mulund West, Mumbai",
  "registrationUrl": "aolt.in/900847",
  "teachers": [
    {"name": "Jyoti Vyas", "code": "MH0818"},
    {"name": "Mihir Chavan", "code": "MH5688"}
  ],
  "registeredCount": 0
}
```

## Benefits

🎯 **Always Current**: Programs automatically reflect the latest data
📱 **Better UX**: Users see real-time availability and detailed information  
⚡ **Easy Updates**: Single command updates all program information
🔄 **Automated**: Minimal manual work required for updates

## Troubleshooting

**Problem**: "No table found in file"
- **Solution**: Ensure the Excel file is the HTML table export format from AOL portal

**Problem**: "No upcoming programs displayed"
- **Solution**: Check that program dates are in the future and status is "Active"

**Problem**: Build fails after update
- **Solution**: Verify the JSON file was created correctly in `src/data/aol-programs.json`

## Future Enhancements

Possible improvements for this system:

- 🔄 **Automated Downloads**: Direct API integration with AOL portal
- 📧 **Email Notifications**: Alert when new programs are available
- 🌍 **Multi-City Support**: Automatic filtering by user location
- 📊 **Analytics**: Track which programs are most popular
- ⏰ **Scheduled Updates**: Daily automatic program refreshes

---

**Last Updated**: August 2025  
**Current Programs**: 3 active programs from Excel file  
**Next Update**: Run `npm run update-aol-programs` when new Excel file is available