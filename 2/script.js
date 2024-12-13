import { readFileSync } from 'fs'
// The levels are either all increasing or all decreasing.
// Any two adjacent levels differ by at least one and at most three.

let temp_list = [[7, 6, 4, 2, 1], [1, 2, 7, 8, 9], [9, 7, 6, 2, 1], [1, 3, 2, 4, 5], [8, 6, 4, 4, 1], [1, 3, 6, 7, 9], [3, 1, 2, 3, 4, 5]]
let list = []
parseFile(list)

// go through list, incrementing the unsafe counter 
// if it violates rules
// export const run = (input) => {
//     let safe = 0;
  
//     input.forEach((line) => {
//       let curr = line[0];
//       let isIncreasing = null;
//       for (let i = 1; i < line.length; i++) {
//         let next = line[i];
        
//         // sets isIncreasing to true if the next number is greater than the current number
//         if (i === 1) isIncreasing = next > curr;
  
//         let diff = Math.abs(curr - next);
//         // Checks that numbers aren't same, and that the difference isn't larger than 3
//         if (diff < 1 || diff > 3) return;
        

//         // Checks that the numbers are consistently increasing or decreasing
//         if (isIncreasing && curr > next) return;
        
//         if (!isIncreasing && curr < next) return;
  
//         curr = next;
//       }
//       safe++;
//     });
//     return safe;
//   };


// Print out how many are safe
console.log(run(list))


function parseFile(list) {
    const data = readFileSync('2/input.txt', 'utf8')
    // Check data exists
    if (!data) {
      console.error('Error: No data found in input.txt')
      process.exit(1)
    }
    const lines = data.split('\r\n')
    const numLines = lines.length
  
    for (let i = 0; i < numLines; i++) {
      const [a, b, c, d, e, f] = lines[i].split(' ').map(x => parseInt(x))
      list.push([a, b, c, d, e, f])
    }
  }