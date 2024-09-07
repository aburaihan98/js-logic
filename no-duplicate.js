const items = [
  "apple",
  "banana",
  "apple",
  "orange",
  "banana",
  "grape",
  "apple",
  "orange",
  "apple",
  "banana",
];

// 1 way
const text = [];

for (let i of items) {
  if (!text.includes(i)) {
    text.push(i);
  }
}

// 2 way
function noDuplicate(items) {
  let unique = [];
  for (let i of items) {
    if (unique.includes(i) === false) {
      unique.push(i);
    }
  }
  return unique;
}

const fruits = noDuplicate(items);

console.log(fruits);
