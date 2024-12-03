import { readFileSync } from 'fs';

let left = [];
let right = [];
parseFile(left, right);

// Find number of times a number appears in the right list
let rightMap = new Map();
for (let i = 0; i < right.length; i++) {
  if (rightMap.has(right[i])) 
    rightMap.set(right[i], rightMap.get(right[i]) + 1);
  else
    rightMap.set(right[i], 1);
}

// Sort the left list for speed (?)
left.sort((a, b) => a - b);

// Calculate the similarity score
let sum = 0;
for (let i = 0; i < left.length; i++) {
  // Adds num of times appeared, or 0 if not found
  sum += left[i] * (rightMap.get(left[i]) ?? 0);
}

console.log(sum);





// This isn't cool, so hide it
function parseFile(list1, list2) {
  const data = readFileSync('1/input.txt', 'utf8');
  // Check data exists
  if (!data) {
    console.error('Error: No data found in input.txt');
    process.exit(1);
  }
  const lines = data.split('\r\n');
  const numLines = lines.length;

  for (let i = 0; i < numLines; i++) {
    const [a, b] = lines[i].split('   ').map(x => parseInt(x));
    list1.push(a);
    list2.push(b);
  }
}