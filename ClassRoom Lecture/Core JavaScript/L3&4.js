//-------------functions can be treated as data types in JS

var print = (s) => {
  console.log(s);
};
str = "some another string";
print(str);

function getNewString(s) {
  var newstring = s.slice(0, 4);
  return newstring;
}
console.log(getNewString(str));

//function can be stored/hold in any variable

var sum = (a, b) => a + b; //or var sum = function(a,b){return a+b}
console.log(sum(2, 4));
console.log(sum);

function temp(fun, num1, num2) {
  // temp -> high order function(HOF) = recieving function as a parameter
  var output = fun(num1, num2);
  console.log(output);
}
temp(sum, 4, 5); // sum -> callBack function = sending function as an argument

//-----------creating array of areas & parameter---------------

var data = [
  { l: 5, b: 4 },
  { l: 3, b: 6 },
  { l: 5, b: 7 },
  { l: 4, b: 4 },
  { l: 6, b: 2 },
];

var area = (l, b) => l * b;
var perimeter = (l, b) => 2 * (l + b);

var calculatedAreas = [];
var calculatedPerimeters = [];

for (let rect of data) {
  // console.log(rect.l, rect.b);
  calculatedAreas.push(area(rect.l, rect.b));
  calculatedPerimeters.push(perimeter(rect.l, rect.b));
}

function calculate(logic) {
  var output = [];
  for (let rect of data) {
    output.push(logic(rect.l, rect.b));
  }
  return output;
}

var calculatedAreas = calculate((a, b) => a + b);
var calculatedPerimeters = calculate((a, b) => 2 * (a + b));

console.log(calculatedAreas);
console.log(calculatedPerimeters);

//-----------------------javascript Execution context-----------------

var a = 10;
function fun() {
  console.log(x);
  var x = 20;
}
fun();
console.log(a); //output -> undefined, 10

function outerFun() {
  innerFun();
  var x = 20;
  function innerFun() {
    var y = 30;
    console.log(y);
    console.log(x);
  }
  console.log(x);
}
outerFun(); // output -> 30, undefined, 20

// Hoisting ----> Is the built in behaviour of JS in whuch var & functions are hoisted in current scope which means we can access var & function before the flow reaches to the declaration/initialization of the code.

//---------------------- CLOSURE -------------------------
//lexical environment scope = lexical scope + parent's lexical environment

//-----example 1-----

function outerFun() {
  var v = 1;
  function innerFun() {
    v++;
    console.log(v);
  }
  return innerFun; //will return the defination of innerFun
}

var fun = outerFun(); //fun = defination of innerFun
console.log(fun);
fun();

var fun1 = outerFun();
var fun2 = outerFun();
fun1();
fun1();
fun2();
fun2();
fun1();

//-----example 2-----

function outerFun() {
  var v = 1;
  function innerFun() {
    v++;
    var b = 1;
    function innerMostFun() {
      v++;
      b++;
      console.log(v, b);
    }
    return innerMostFun;
  }
  return innerFun;
}

var fun = outerFun();
var fun1 = fun();
var fun2 = fun();
fun1();
fun1();
fun2();
fun2();
fun1();

//------------------------------Array Amethods-2 ----------------------------------------
map(), filter(), reduce(), find(), sort(), flat(), forEach();

const data = [
  {
    id: 1,
    name: "Abhimanyu",
    age: 24,
    courseEnrolled: ["DSA", "WEB-DEV", "DATA SCIENCE"],
    gender: "M",
  },
  {
    id: 2,
    name: "Tanveer",
    age: 25,
    courseEnrolled: ["DSA", "DATA SCIENCE"],
    gender: "M",
  },
  {
    id: 3,
    name: "Rahul",
    age: 26,
    courseEnrolled: ["DSA", "WEB-DEV"],
    gender: "M",
  },
  {
    id: 4,
    name: "Sadmaan",
    age: 22,
    courseEnrolled: ["WEB-DEV", "DATA SCIENCE"],
    gender: "M",
  },
  {
    id: 5,
    name: "Shivani",
    age: 21,
    courseEnrolled: ["DATA SCIENCE"],
    gender: "F",
  },
];

data.map((element, index) => {
  console.log(element.age, element.name, element.courseEnrolled, index);
});

const newArr = data.map((element) => {
  let newStudent = { ...element };
  if (newStudent.gender == "M") {
    newStudent.gender = "Male";
  } else newStudent.gender = "Female";
  return newStudent;
});
console.log(newArr);

//--------------------- deep copy / shallow copy -------------------------
const square = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
// const square2=[...square];
const square2 = square;
square2[0] = [1, 1, 1];
console.log(square2);
console.log(square);
