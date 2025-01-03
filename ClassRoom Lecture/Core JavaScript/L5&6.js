const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
  { id: 2, name: "Smartphone", category: "Electronics", price: 800, inStock: true },
  { id: 3, name: "Tablet", category: "Electronics", price: 400, inStock: false },
  { id: 4, name: "Headphones", category: "Accessories", price: 150, inStock: true },
  { id: 5, name: "Keyboard", category: "Accessories", price: 50, inStock: true },
  { id: 6, name: "Monitor", category: "Electronics", price: 300, inStock: false },
  { id: 7, name: "Chair", category: "Furniture", price: 100, inStock: true },
  { id: 8, name: "Desk", category: "Furniture", price: 200, inStock: true },
  { id: 9, name: "Mouse", category: "Accessories", price: 25, inStock: true },
  { id: 10, name: "Printer", category: "Electronics", price: 150, inStock: true },
];

const newProducts = products.map((p) => [p.name, p.category]);
// console.log(newProducts);

const filteredProducts = products.filter((p) => p.price < 200);
// console.log(filteredProducts);

const totalPrice = products.reduce((acc, pr) => {
  return acc + pr.price;
}, 0);
// console.log(totalPrice);

const keyboard = products.find((p) => {
  return p.name.toLowerCase() === "keyboard";
});
// console.log(keyboard);

const Sortedproducd = products.sort((p1, p2) => {
  return p1.price - p2.price;
});
// console.log(Sortedproducd);

products.forEach((pr, ind, arr) => {
  // console.log(pr.name, pr.price);
});

// --------------Asynchoronous Programming------------------
console.log(1);
// delay(3);
setTimeout(() => {
  // console.log(2);
}, 3000);
console.log(3);

function delay(n) {
  let currTime = new Date().getTime();
  while (new Date().getTime() < currTime + n * 1000) {}
}

const interValid = setInterval(() => {
  // console.log("Hii");
}, 2000);

setTimeout(() => {
  clearInterval(interValid);
}, 11000);

//-------------destructing------------

const product = {
  id: 1,
  name: "Laptop",
  category: "Electronics",
  price: 1200,
  inStock: true,
  getAge: function () {
    console.log(this);
  },
};
// const { name, price } = product;
const { name: productName, price: productPrice } = product;
console.log(productPrice, productName);

const obj = {
  a: 1,
  b: 2,
  c: {
    c1: "a",
    c2: "b",
  },
};

const {
  a,
  b,
  c: { c1, c2 },
} = obj;
// console.log(a, b, c1, c2);

// --------------spread / rest -------------

const newProduct = {
  ...product,
  desc: "RGB",
  price: 199,
};

// console.log(product);
// console.log(newProduct);

// ----------------- this keyword / this-binding ----------------
console.log(this);
function temp() {
  // console.log(this);         //default this binding
}
this.aa = 23;
temp();

const product1 = {
  id: 1,
  name: "Laptop",
  category: "Electronics",
  price: 1200,
  inStock: true,
  getAge: function () {
    // console.log(this);     //implicit this binding
  },
};
product1.getAge();
function updateProduct1(nm, p) {
  this.name = nm;
  this.price = p;
}

//---------explicit this binding--------

updateProduct1.apply(product1, ["touchpad", 1300]);
updateProduct1.call(product1, "Mohan", 10);

data = ["speaker", 500];
updateProduct1.apply(product1, data);
updateProduct1.call(product1, ...data);

let newUpdateproduct1 = updateProduct1.bind(product1);
newUpdateproduct1("hello", 99);

console.log(product1);

// ---------------------- new keyword / prototype -----------------
function createPerson(nm, age) {
  this.name = nm;
  this.age = age;
}
createPerson.prototype.getAge = function () {
  return this.age;
};
let p1 = new createPerson("chandu", 44);
let p2 = new createPerson("chintu", 22);

console.log(p1);
console.log(p2);
console.log(p1.getAge());
console.log(p2.getAge());
console.log(p1.__proto__); // dunder proto
console.log(p1.__proto__ === createPerson.age);

console.log(Array.prototype);
Object.prototype.sayHi = () => {
  console.log("Hii");
};

let arr = [1, 3, 5];

Array.prototype.sayHello = () => {
  console.log("Hello");
};

Array.prototype.pop = () => {
  console.log("Hum pop ni karenge !!");
};

console.log(arr);
arr.sayHello();
arr.sayHi();
arr.pop();

arr.map((num, ind, array) => {
  console.log(num, ind);
});

// const arr = [1, 2, 3, 4, 5];

// Array.prototype.mymap = Array.prototype.map
// Array.prototype.mymap = function(callback){
//     for(let i=0; i<arr.length; i++){
//         callback(arr[i], i, arr);
//     }
// }

// arr.mymap((num, ind, a)=>{
//     console.log(num, ind, a);
// })

function MyArray(data) {
  this.data = data;
}

MyArray.prototype.mymap = function (callback) {
  for (let i = 0; i < this.data.length; i++) {
    callback(this.data[i], i, this.data);
  }
};

let arr2 = new MyArray([1, 2, 3, 4]);
arr2.mymap((num, ind, a) => {
  console.log(num, ind, a);
});
