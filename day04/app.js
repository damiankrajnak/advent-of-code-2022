const fs = require("fs");

const contain = (a1, a2, b1, b2) => {
  if (a1 >= b1 && a1 <= b2 && a2 <= b2 && a2 >= b1) {
    return 1;
  }
  if (b1 >= a1 && b1 <= a2 && b2 <= a2 && b2 >= a1) {
    return 1;
  }
  return 0;
};

const overlap = (a1, a2, b1, b2) => {
  if ((a1 >= b1 && a1 <= b2) || (a2 <= b2 && a2 >= b1)) {
    return 1;
  }
  if ((b1 >= a1 && b1 <= a2) || (b2 <= a2 && b2 >= a1)) {
    return 1;
  }
  return 0;
};

const tuples = fs.readFileSync("input.txt").toString().split("\n");

// PART 1
const part1 = tuples
  .map((tuple) => {
    let [first, second] = tuple.split(",");
    let [firstA, firstB] = first.split("-");
    let [secondA, secondB] = second.split("-");
    firstA = Number(firstA);
    firstB = Number(firstB);
    secondA = Number(secondA);
    secondB = Number(secondB);
    return contain(firstA, firstB, secondA, secondB);
  })
  .reduce((a, b) => a + b);

// PART 2
const part2 = tuples
  .map((tuple) => {
    let [first, second] = tuple.split(",");
    let [firstA, firstB] = first.split("-");
    let [secondA, secondB] = second.split("-");
    firstA = Number(firstA);
    firstB = Number(firstB);
    secondA = Number(secondA);
    secondB = Number(secondB);
    return overlap(firstA, firstB, secondA, secondB);
  })
  .reduce((a, b) => a + b);

console.log(`PART1: ${part1}\nPART2: ${part2}`);
