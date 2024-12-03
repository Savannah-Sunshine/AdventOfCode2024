import path from 'path';
import { execSync } from 'child_process';

// Get the folder number from the command line arguments
const folderNumber = process.argv[2];
const __dirname = path.resolve();

// Construct the path to the script inside the folder
const scriptPath = path.join(__dirname, folderNumber.toString(), 'script.js');
console.log('scriptPath:', scriptPath);
try {
  // Check if the script exists
  require.resolve(scriptPath);
  // Run the script
  execSync(`node ${scriptPath}`, { stdio: 'inherit' });
} catch (err) {
  console.error(`Error: Script for folder ${folderNumber} not found.`);
  process.exit(1);
}