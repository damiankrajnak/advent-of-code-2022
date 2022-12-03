const fs = require("fs");

const splitInHalf = (string) => {
  const middleIndex = string.length / 2;
  return [string.slice(0, middleIndex), string.slice(middleIndex)];
};

const group = (arr, size) => {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % size === 0) {
      res.push([arr[i]]);
    } else {
      res.at(-1).push(arr[i]);
    }
  }
  return res;
};

const getPriority = (string) => {
  if (string === string.toUpperCase()) {
    return string.charCodeAt(0) - 38;
  } else {
    return string.charCodeAt(0) - 96;
  }
};

// PART1
const rucksacks = fs
  .readFileSync("input.txt")
  .toString()
  .split("\n")
  .map((rucksack) => {
    const [half1, half2] = splitInHalf(rucksack);
    for (let i in half1) {
      if (half2.includes(half1[i])) {
        return getPriority(half1[i]);
      }
    }
  })
  .reduce((a, b) => a + b, 0);

// PART2
const rucksacks2 = fs.readFileSync("input.txt").toString().split("\n");

const groupsBy3 = group(rucksacks2, 3);

prioritySum = groupsBy3
  .map((group) => {
    for (let i in group[0]) {
      if (group[1].includes(group[0][i]) && group[2].includes(group[0][i])) {
        return getPriority(group[0][i]);
      }
    }
  })
  .reduce((a, b) => a + b, 0);

console.log(`PART1: ${rucksacks}\nPART2: ${prioritySum}`);
