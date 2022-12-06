const fs = require("fs");

const [drawing, moves] = fs.readFileSync("input.txt").toString().split("\n\n");

const numberOfCrates = Number(
  drawing.split("\n").at(-1).trim().split("   ").at(-1)
);

const cratesIndexes = {};
for (let i = 0; i < numberOfCrates; i++) {
  cratesIndexes[i + 1] = i * 4 + 1;
}

const columnsOfCrates = drawing.split("\n");
columnsOfCrates.pop();
columnsOfCrates.reverse();

const crates = {};

for (let i = 1; i < 10; i++) {
  crates[i] = [];
}

columnsOfCrates.forEach((row) => {
  for (let i in cratesIndexes) {
    if (row[cratesIndexes[i]] !== " ") {
      crates[i].push(row[cratesIndexes[i]]);
    }
  }
});

// PART 1
moves.split("\n").forEach((move) => {
  const quantity = move.split(" ")[1];
  const from = move.split(" ")[3];
  const to = move.split(" ")[5];
  for (let i = 0; i < quantity; i++) {
    crates[to].push(crates[from].pop());
  }
});

let message = "";

for (let crate in crates) {
  if (crates[crate].length) {
    message += crates[crate].at(-1);
  }
}

console.log(message);
