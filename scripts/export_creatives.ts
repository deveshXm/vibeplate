import fs from 'fs';
import { put } from '@vercel/blob';

function parseCSVLine(line: string): string[] {
  const result = [];
  let current = '';
  let inQuotes = false;
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    
    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      result.push(current);
      current = '';
    } else {
      current += char;
    }
  }
  
  result.push(current);
  return result;
}

async function processCreatives() {
  const csvContent = fs.readFileSync('scripts/creatives.csv', 'utf-8');
  const lines = csvContent.split('\n').filter(line => line.trim());
  const headers = parseCSVLine(lines[0]);
  
  const creatives: any[] = [];
  
  for (let i = 1; i < lines.length; i++) {
    const values = parseCSVLine(lines[i]);
    const creative: any = {};
    
    headers.forEach((header, index) => {
      creative[header] = values[index] || '';
    });
    
    // Find the actual keys
    const idKey = Object.keys(creative).find(key => key.includes('Creative') && key.includes('Id'));
    const creativeKey = Object.keys(creative).find(key => key === 'Creative');
    const selectKey = Object.keys(creative).find(key => key === 'Select');
    const companyUrlKey = Object.keys(creative).find(key => key.includes('Company') && key.includes('URL'));
    const productDescKey = Object.keys(creative).find(key => key.includes('Product') && key.includes('Description'));
    const creativeDescKey = Object.keys(creative).find(key => key.includes('Creative') && key.includes('Description'));
    
    const creativeId = idKey ? creative[idKey] : '';
    const creativeText = creativeKey ? creative[creativeKey] : '';
    
    // Skip rows without Creative Id or Creative text
    if (!creativeId || !creativeText) {
      console.log(`Skipping row ${i}: Missing Creative Id or Creative text`);
      continue;
    }
    
    // Extract image URL from Creative column
    const urlMatch = creativeText.match(/\((https?:\/\/[^)]+)\)/);
    if (!urlMatch) {
      console.log(`Skipping creative ${creativeId}: No image URL found`);
      continue;
    }
    
    const imageUrl = urlMatch[1];
    console.log(`Processing creative ${creativeId}...`);
    
    let uploadedImageUrl = imageUrl; // Default to original URL if upload fails
    
    try {
      const response = await fetch(imageUrl);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      
      const imageBuffer = await response.arrayBuffer();
      
      const blob = await put(`creatives/${creativeId}.png`, imageBuffer, {
        access: 'public',
        contentType: 'image/png',
        // allowOverwrite: true
      });
      
      uploadedImageUrl = blob.url;
      console.log(`✓ Uploaded creative ${creativeId} to ${blob.url}`);
    } catch (error: any) {
      console.log(`✗ Failed to upload creative ${creativeId}: ${error.message} - Using original URL`);
    }
    
    const processedCreative = {
      id: creativeId,
      type: selectKey ? creative[selectKey] : '',
      companyUrl: companyUrlKey ? creative[companyUrlKey] : '',
      productDescription: productDescKey ? creative[productDescKey] : '',
      imageUrl: uploadedImageUrl,
      creativeDescription: creativeDescKey ? creative[creativeDescKey] : ''
    };
    
    creatives.push(processedCreative);
  }
  
  fs.writeFileSync('scripts/creatives.json', JSON.stringify(creatives, null, 2));
  console.log(`\nExported ${creatives.length} creatives to creatives.json`);
}

processCreatives();
