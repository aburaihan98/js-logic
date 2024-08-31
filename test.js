const obj = {
  name: "abu",
  year: 1998,
  // edu: {
  //   degree: "one",
  //   school: {
  //     name: "rahmania",
  //   },
  // },
};

const { edu: { school: { name } } = {} } = obj;

console.log(name);

const arr = [
  {
    name: "raihan",
  },
  {
    year: 1998,
  },
];

const result = [...arr];

console.log(result);
