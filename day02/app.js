const fs = require("fs");

const scoreMapper = {
  A: {
    X: 4,
    Y: 8,
    Z: 3,
  },
  B: {
    X: 1,
    Y: 5,
    Z: 9,
  },
  C: {
    X: 7,
    Y: 2,
    Z: 6,
  },
};

const myTurnMapper = {
  A: {
    X: "Z",
    Y: "X",
    Z: "Y",
  },
  B: {
    X: "X",
    Y: "Y",
    Z: "Z",
  },
  C: {
    X: "Y",
    Y: "Z",
    Z: "X",
  },
};

const part1 = fs
  .readFileSync("input.txt")
  .toString()
  .split("\n")
  .map((match) => scoreMapper[match.split(" ")[0]][match.split(" ")[1]])
  .reduce((a, b) => a + b);

const part2 = fs
  .readFileSync("input.txt")
  .toString()
  .split("\n")
  .map(
    (match) =>
      scoreMapper[match.split(" ")[0]][
        myTurnMapper[match.split(" ")[0]][match.split(" ")[1]]
      ]
  )
  .reduce((a, b) => a + b);

console.log(`PART1: ${part1}\nPART2: ${part2}`);
