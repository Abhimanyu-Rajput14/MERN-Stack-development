const person = {
  name: "Rohit Sharma",
  age: 36,
  isMarried: true,
  team: "India",
  getName: function () {
    console.log(this.name);
  },
};

const jsonData = JSON.stringify(person);

console.log(person);
console.log(jsonData);

// const parsedData = JSON.parse(jsonData);
// console.log(parsedData);
