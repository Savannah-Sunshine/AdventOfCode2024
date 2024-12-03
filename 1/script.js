import { readFileSync } from 'fs';

// smallest number in left list
// smallest number in right list
let left = [];
let right = [];
parseFile(left, right);

// sort the lists
left.sort((a, b) => a - b);
right.sort((a, b) => a - b);

// go through list, subtract (absolute), and add value to sum
let sum = 0;
for (let i = 0; i < left.length; i++) {
  sum += Math.abs(left[i] - right[i]);
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