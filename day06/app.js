const fs = require("fs");

const input = fs.readFileSync("input.txt").toString();

// PART 1
for (let i = 0; i < input.length; i++) {
  if ([...new Set(input.slice(i, i + 4))].length === 4) {
    console.log(`PART1: ${i + 4}`);
    break;
  }
}

// PART 2
for (let i = 0; i < input.length; i++) {
  if ([...new Set(input.slice(i, i + 14))].length === 14) {
    console.log(`PART2: ${i + 14}`);
    break;
  }
}
