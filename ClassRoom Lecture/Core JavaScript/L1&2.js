var dict = {
  a: "abbreviation",
  b: "bullshit",
  c: undefined,
  d: 56,
  e: function sum() {
    console.log(`my self",${this.b}`);
  },
};
console.log(dict);
dict.e();

var name = "Chintu";
var arr = [
  29,
  "monu",
  () => {
    console.log("My name is :", name);
  },
];
// console.log(arr[2]);
arr[2]();
arr.push(23);
arr.push("rahul");
arr.unshift(12);
arr.unshift("shubham");
var arr1 = arr;

var arr2 = [...arr, ...arr1];
console.log(arr2);

arr.splice(1, 2, "maggie");
arr.splice(3, 1);
console.log(arr);

var fullName = `
    My
    name
    is
    Abhimanyu
    Singh`;
console.log(fullName);
var firstName = "Abhimanyu";
var middleName = "Raj";
var lastName = "Singh";
console.log(firstName + " " + lastName);
var fullName = `Full Name : ${firstName} ${middleName} ${lastName}`;
console.log(fullName);
console.log(fullName.toLowerCase());
console.log(fullName.toUpperCase());
console.log(fullName.includes("Raj"));

var str = "hii frnds,this is coding block campus";
console.log("str ->", str);
console.log(str.substring(4, 5));
console.log(str.slice(-8, -21));
var str1 = "  this is coding block campus   ";
console.log(str1.trim());
console.log(str.replace("coding", "Coding"));
console.log(str.split(","));
var str2 = str.split(",");
console.log(str2.join(" "));

var a = 45;
var b = 89;
var b = a;
var a = 22;
console.log(b);
console.log(a);

var arr1 = [4, 6, 9];
var arr2 = [...arr1];
var arr3 = arr1;
arr2[1] = 5;
console.log(arr1);
arr3[0] = 3;
console.log(arr1);
console.log(arr2);
console.log(arr3);

var person = {
  firstName: "Abhimanyu",
  lastName: "Singh",
  age: "24",
  marks: [20, 44, 67],
  isMarried: "false",
};

console.log(person["marks"]);
console.log(person.isMarried);
person.isMarried = "true";
console.log(person.isMarried);
person.isAdult = true;
delete person.isMarried;
console.log(person);

var array = [2, 4, 6, 8];
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  console.log(element);
}

for (const iterator of array) {
  console.log(iterator);
}

for (const key in person) {
  console.log(person[key]);
}

for (const key in person) {
  if (key == "age") {
    person[key] = "26";
  }
  console.log(key, "->", person[key]);
}

var files = [
  "shreyansh.jpg",
  "photo.jpeg",
  "photo1.png",
  "png.png",
  "photo4.pdf",
  "png.pdf",
];
var allowedFiles = ["jpg", "jpeg", "png"];

for (var key of files) {
  var splittedFiles = key.split(".");
  if (allowedFiles.includes(splittedFiles[1])) {
    console.log(key);
  } else {
    console.log("Error!!");
  }
}
