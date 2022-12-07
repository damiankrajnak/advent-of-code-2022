const fs = require("fs");

const food = fs
  .readFileSync("input.txt")
  .toString()
  .split("\n\n")
  .map((elf) =>
    elf
      .split("\n")
      .map((food) => Number(food))
      .reduce((a, b) => a + b)
  )
  .sort((a, b) => b - a);

console.log(
  `PART1: ${food[0]}\nPART2: ${food.slice(0, 3).reduce((a, b) => a + b)}`
);
