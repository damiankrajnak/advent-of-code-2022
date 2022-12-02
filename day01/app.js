const fs = require("fs");

const food = fs
  .readFileSync("input.txt")
  .toString()
  .split("\n\n")
  .map((elf) =>
    elf
      .split("\n")
      .map((food) => Number(food))
      .reduce((partialSum, a) => partialSum + a, 0)
  )
  .sort((a, b) => b - a);

console.log(`PART1: ${food[0]}\nPART2: ${food[0] + food[1] + food[2]}`);
