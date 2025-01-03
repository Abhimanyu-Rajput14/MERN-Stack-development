# JavaScript and its features:

### 1. **What is JavaScript?**

JavaScript is a high-level, interpreted programming language that is primarily used to create dynamic and interactive content on websites. It is a core technology of the web alongside HTML and CSS, and it is supported by all modern browsers.

### 2. **What are the main features of JavaScript?**

Some key features of JavaScript include:

- **Dynamic Typing**: Variables in JavaScript are not bound to a specific type, and their type can change at runtime.
- **Prototype-based Inheritance**: JavaScript uses prototypes rather than classes for inheritance, allowing objects to inherit directly from other objects.
- **Event-driven Programming**: JavaScript supports event-driven programming, allowing it to respond to user interactions and other events.
- **Asynchronous Programming**: JavaScript supports asynchronous programming through callbacks, promises, and async/await syntax.
- **First-class Functions**: Functions in JavaScript are first-class objects, meaning they can be assigned to variables, passed as arguments, and returned from other functions.
- **Closures**: JavaScript supports closures, which allow functions to capture and remember the context in which they were created.
- **Garbage Collection**: JavaScript has automatic memory management and garbage collection, which helps manage memory allocation and deallocation.

### 3. **What are JavaScript data types?**

JavaScript has several data types:

- **Primitive Types**: 
  - `undefined`
  - `null`
  - `boolean` (true/false)
  - `number` (integers and floating-point numbers)
  - `string` (text)
  - `symbol` (unique and immutable values)
  - `bigint` (arbitrary-precision integers)

- **Object Types**: 
  - `Object` (key-value pairs)
  - `Array` (ordered collections)
  - `Function` (blocks of code)
  - `Date`, `RegExp`, `Map`, `Set`, etc.

### 4. **What are JavaScript functions?**

Functions are blocks of code designed to perform a particular task. Functions can be declared in various ways:

- **Function Declaration:**

  ```javascript
  function greet(name) {
    return `Hello, ${name}!`;
  }
  ```

- **Function Expression:**

  ```javascript
  const greet = function(name) {
    return `Hello, ${name}!`;
  };
  ```

- **Arrow Function:**

  ```javascript
  const greet = (name) => `Hello, ${name}!`;
  ```

### 5. **What are JavaScript closures?**

Closures are a feature where a function retains access to variables from its lexical scope even after the function has finished executing.

**Example:**

```javascript
function createCounter() {
  let count = 0;
  return function() {
    count += 1;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```

### 6. **What is event delegation?**

Event delegation is a technique of handling events by using a single event listener on a parent element instead of adding event listeners to individual child elements. It leverages event bubbling.

**Example:**

```javascript
document.getElementById('parent').addEventListener('click', function(event) {
  if (event.target && event.target.matches('button')) {
    console.log('Button clicked!');
  }
});
```

### 7. **What are JavaScript Promises?**

Promises are objects representing the eventual completion (or failure) of an asynchronous operation. They provide a way to handle asynchronous operations and avoid callback hell.

**Example:**

```javascript
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Success!'), 1000);
});

myPromise.then(result => console.log(result)); // Success!
```

### 8. **What is `async`/`await`?**

`async` and `await` are syntactic sugar built on top of promises. They make working with asynchronous code more straightforward and readable.

**Example:**

```javascript
async function fetchData() {
  try {
    let response = await fetch('https://api.example.com/data');
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();
```

### 9. **What is the DOM (Document Object Model)?**

The DOM is an interface that browsers implement to represent the structure of a web page as a tree of objects. JavaScript can interact with the DOM to manipulate the content, structure, and style of web pages.

**Example:**

```javascript
const heading = document.getElementById('myHeading');
heading.textContent = 'New Heading Text';
```

### 10. **What is a JavaScript module?**

JavaScript modules allow you to split code into separate files and export/import functionality between them. Modules help in organizing code and improving maintainability.

**Example:**

- **Exporting:**

  ```javascript
  // math.js
  export function add(a, b) {
    return a + b;
  }
  ```

- **Importing:**

  ```javascript
  // app.js
  import { add } from './math.js';
  console.log(add(2, 3)); // 5
  ```

### 11. **What are ES6 features?**

ECMAScript 6 (ES6), also known as ECMAScript 2015, introduced several new features:

- **Let and Const**: New ways to declare variables.
- **Arrow Functions**: Shorter function syntax.
- **Classes**: Syntactic sugar for prototype-based inheritance.
- **Template Literals**: Multiline strings and interpolation.
- **Destructuring**: Extract values from arrays and objects.
- **Modules**: `import` and `export` statements.
- **Promises**: For handling asynchronous operations.

**Example of ES6 Features:**

```javascript
// Arrow Function
const add = (a, b) => a + b;

// Template Literals
const name = 'John';
console.log(`Hello, ${name}!`);

// Destructuring
const person = { name: 'John', age: 30 };
const { name, age } = person;
console.log(name, age); // John 30
```

### 12. **What is hoisting in JavaScript?**

Hoisting is a behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase. However, only the declarations are hoisted, not the initializations.

**Example:**

```javascript
console.log(x); // undefined
var x = 5;

console.log(y); // ReferenceError: y is not defined
let y = 10;
```

# JavaScript Arrays:

### 1. **What is an array in JavaScript?**

An array in JavaScript is a special type of object used to store ordered collections of values. The values can be of any data type, including other arrays or objects.

**Example:**

```javascript
const fruits = ['apple', 'banana', 'orange'];
```

### 2. **How do you create an array?**

Arrays can be created using array literals or the `Array` constructor.

**Array Literal:**

```javascript
const fruits = ['apple', 'banana', 'orange'];
```

**`Array` Constructor:**

```javascript
const fruits = new Array('apple', 'banana', 'orange');
```

### 3. **How do you access and modify array elements?**

You can access array elements using their index (starting from 0) and modify them by assigning new values.

**Example:**

```javascript
const fruits = ['apple', 'banana', 'orange'];

console.log(fruits[1]); // banana
fruits[1] = 'blueberry';
console.log(fruits[1]); // blueberry
```

### 4. **What are some common array methods?**

Here are some commonly used array methods:

- **`.push()`**: Adds one or more elements to the end of an array.

  ```javascript
  const fruits = ['apple', 'banana'];
  fruits.push('orange');
  console.log(fruits); // ['apple', 'banana', 'orange']
  ```

- **`.pop()`**: Removes the last element from an array and returns it.

  ```javascript
  const fruits = ['apple', 'banana', 'orange'];
  const last = fruits.pop();
  console.log(last); // orange
  console.log(fruits); // ['apple', 'banana']
  ```

- **`.shift()`**: Removes the first element from an array and returns it.

  ```javascript
  const fruits = ['apple', 'banana', 'orange'];
  const first = fruits.shift();
  console.log(first); // apple
  console.log(fruits); // ['banana', 'orange']
  ```

- **`.unshift()`**: Adds one or more elements to the beginning of an array.

  ```javascript
  const fruits = ['banana', 'orange'];
  fruits.unshift('apple');
  console.log(fruits); // ['apple', 'banana', 'orange']
  ```

- **`.splice()`**: Adds or removes elements from a specific index.

  ```javascript
  const fruits = ['apple', 'banana', 'orange'];
  fruits.splice(1, 1, 'blueberry', 'grapes');
  console.log(fruits); // ['apple', 'blueberry', 'grapes', 'orange']
  ```

- **`.slice()`**: Returns a shallow copy of a portion of an array into a new array.

  ```javascript
  const fruits = ['apple', 'banana', 'orange', 'grapes'];
  const citrus = fruits.slice(1, 3);
  console.log(citrus); // ['banana', 'orange']
  ```

- **`.forEach()`**: Executes a provided function once for each array element.

  ```javascript
  const fruits = ['apple', 'banana', 'orange'];
  fruits.forEach(fruit => console.log(fruit));
  // Output:
  // apple
  // banana
  // orange
  ```

- **`.map()`**: Creates a new array with the results of calling a provided function on every element.

  ```javascript
  const numbers = [1, 2, 3];
  const doubled = numbers.map(n => n * 2);
  console.log(doubled); // [2, 4, 6]
  ```

- **`.filter()`**: Creates a new array with all elements that pass the test implemented by the provided function.

  ```javascript
  const numbers = [1, 2, 3, 4, 5];
  const evenNumbers = numbers.filter(n => n % 2 === 0);
  console.log(evenNumbers); // [2, 4]
  ```

- **`.reduce()`**: Applies a function against an accumulator and each array element (from left to right) to reduce it to a single value.

  ```javascript
  const numbers = [1, 2, 3, 4];
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  console.log(sum); // 10
  ```

### 5. **What is the difference between `Array.isArray()` and `instanceof` operator?**

- **`Array.isArray()`**: Checks if the provided value is an array.

  ```javascript
  console.log(Array.isArray([1, 2, 3])); // true
  console.log(Array.isArray('hello'));   // false
  ```

- **`instanceof` Operator**: Checks if an object is an instance of a specific class or constructor function.

  ```javascript
  console.log([1, 2, 3] instanceof Array); // true
  console.log('hello' instanceof Array);   // false
  ```

### 6. **What are array-like objects?**

Array-like objects are objects that resemble arrays but lack array-specific methods. They have a `length` property and indexed elements.

**Example:**

```javascript
function example() {
  console.log(arguments);
}

example(1, 2, 3);
// Output: { '0': 1, '1': 2, '2': 3, length: 3 }
```

### 7. **What is the spread operator (`...`) for arrays?**

The spread operator is used to unpack elements from an array and spread them into another array or function arguments.

**Example:**

```javascript
const fruits = ['apple', 'banana'];
const moreFruits = ['orange', ...fruits, 'grapes'];
console.log(moreFruits); // ['orange', 'apple', 'banana', 'grapes']
```

### 8. **How do you convert an array to a string?**

Use the `.toString()` or `.join()` methods to convert an array to a string.

**Using `.toString()`:**

```javascript
const fruits = ['apple', 'banana', 'orange'];
console.log(fruits.toString()); // 'apple,banana,orange'
```

**Using `.join()`:**

```javascript
const fruits = ['apple', 'banana', 'orange'];
console.log(fruits.join(', ')); // 'apple, banana, orange'
```

### 9. **What are `Array.prototype.sort()` and `Array.prototype.reverse()`?**

- **`.sort()`**: Sorts the elements of an array in place and returns the sorted array.

  ```javascript
  const numbers = [3, 1, 4, 1, 5];
  numbers.sort();
  console.log(numbers); // [1, 1, 3, 4, 5]
  ```

- **`.reverse()`**: Reverses the elements of an array in place and returns the reversed array.

  ```javascript
  const numbers = [1, 2, 3];
  numbers.reverse();
  console.log(numbers); // [3, 2, 1]
  ```

### 10. **What is the difference between `splice()` and `slice()`?**

- **`.splice()`**: Modifies the contents of an array by removing or replacing existing elements and/or adding new elements in place.

  ```javascript
  const fruits = ['apple', 'banana', 'orange'];
  fruits.splice(1, 1, 'blueberry');
  console.log(fruits); // ['apple', 'blueberry', 'orange']
  ```

- **`.slice()`**: Returns a shallow copy of a portion of an array into a new array without modifying the original array.

  ```javascript
  const fruits = ['apple', 'banana', 'orange'];
  const citrus = fruits.slice(1, 3);
  console.log(citrus); // ['banana', 'orange']
  ```


# JavaScript Objects:

### 1. **What is an object in JavaScript?**

An object in JavaScript is a collection of key-value pairs. The keys are strings (or Symbols), and the values can be of any data type, including other objects.

**Example:**

```javascript
const person = {
  name: 'John',
  age: 30,
  isEmployed: true
};
```

### 2. **How do you create an object?**

Objects can be created using object literals, the `new Object()` syntax, or the `Object.create()` method.

**Object Literal:**

```javascript
const person = {
  name: 'John',
  age: 30
};
```

**`new Object()` Syntax:**

```javascript
const person = new Object();
person.name = 'John';
person.age = 30;
```

**`Object.create()` Method:**

```javascript
const person = Object.create(null);
person.name = 'John';
person.age = 30;
```

### 3. **How do you access and modify object properties?**

You can access and modify object properties using dot notation or bracket notation.

**Dot Notation:**

```javascript
const person = {
  name: 'John'
};

console.log(person.name); // John
person.name = 'Doe';
```

**Bracket Notation:**

```javascript
const person = {
  name: 'John'
};

console.log(person['name']); // John
person['name'] = 'Doe';
```

### 4. **What are object methods?**

Object methods are functions defined within an object that operate on the object's properties.

**Example:**

```javascript
const person = {
  name: 'John',
  greet: function() {
    return `Hello, my name is ${this.name}`;
  }
};

console.log(person.greet()); // Hello, my name is John
```

### 5. **What is the `this` keyword in objects?**

The `this` keyword refers to the object from which the method was called. It allows access to the object's properties and methods.

**Example:**

```javascript
const person = {
  name: 'John',
  greet: function() {
    return `Hello, my name is ${this.name}`;
  }
};

console.log(person.greet()); // Hello, my name is John
```

### 6. **How do you check if an object has a certain property?**

You can use the `in` operator or the `hasOwnProperty()` method to check for the existence of a property.

**Using `in` Operator:**

```javascript
const person = {
  name: 'John'
};

console.log('name' in person); // true
console.log('age' in person); // false
```

**Using `hasOwnProperty()`:**

```javascript
const person = {
  name: 'John'
};

console.log(person.hasOwnProperty('name')); // true
console.log(person.hasOwnProperty('age')); // false
```

### 7. **What is property enumeration?**

Property enumeration refers to iterating over the properties of an object. You can use `for...in` loops or `Object.keys()` to enumerate properties.

**Using `for...in` Loop:**

```javascript
const person = {
  name: 'John',
  age: 30
};

for (const key in person) {
  console.log(key, person[key]);
}
// Output:
// name John
// age 30
```

**Using `Object.keys()`:**

```javascript
const person = {
  name: 'John',
  age: 30
};

Object.keys(person).forEach(key => {
  console.log(key, person[key]);
});
// Output:
// name John
// age 30
```

### 8. **What is the difference between `Object.assign()` and object spread operator (`{...obj}`)?**

Both are used to copy properties from one object to another, but there are differences:

- `Object.assign()` merges the properties of source objects into the target object. It modifies the target object and does not create a new object.

**Example:**

```javascript
const obj1 = { a: 1 };
const obj2 = { b: 2 };

Object.assign(obj1, obj2);
console.log(obj1); // { a: 1, b: 2 }
```

- The object spread operator (`{...obj}`) creates a shallow copy of an object and does not modify the original object.

**Example:**

```javascript
const obj1 = { a: 1 };
const obj2 = { b: 2 };

const newObj = { ...obj1, ...obj2 };
console.log(newObj); // { a: 1, b: 2 }
```

### 9. **What are getters and setters in objects?**

Getters and setters are methods that allow you to define custom behavior for reading and writing properties.

**Example:**

```javascript
const person = {
  _name: 'John',
  get name() {
    return this._name;
  },
  set name(value) {
    this._name = value;
  }
};

console.log(person.name); // John
person.name = 'Doe';
console.log(person.name); // Doe
```

### 10. **What is `Object.freeze()` and `Object.seal()`?**

- `Object.freeze()` prevents new properties from being added to an object and makes existing properties immutable.

**Example:**

```javascript
const person = {
  name: 'John'
};

Object.freeze(person);
person.name = 'Doe'; // This will not change the property
console.log(person.name); // John
```

- `Object.seal()` prevents new properties from being added to an object and marks all existing properties as non-configurable, but allows existing properties to be modified.

**Example:**

```javascript
const person = {
  name: 'John'
};

Object.seal(person);
person.name = 'Doe'; // This will change the property
console.log(person.name); // Doe
```

# JavaScript functions and execution context:

### 1. **What is a function in JavaScript?**

A function in JavaScript is a block of code designed to perform a particular task. It can be invoked (called) to execute its code. Functions can accept parameters and return a value.

**Example:**

```javascript
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5
```

### 2. **What are function expressions and how do they differ from function declarations?**

- **Function Declarations**: Functions defined with the `function` keyword. They are hoisted, meaning they can be called before their definition in the code.

**Example:**

```javascript
console.log(greet()); // Hello
function greet() {
  return 'Hello';
}
```

- **Function Expressions**: Functions defined as part of an expression. They are not hoisted, so they can only be called after they are defined.

**Example:**

```javascript
const greet = function() {
  return 'Hello';
};

console.log(greet()); // Hello
```

### 3. **What is the difference between `return` and `console.log()` in a function?**

- **`return`**: Exits the function and optionally returns a value to the caller. The function stops executing when `return` is called.

**Example:**

```javascript
function add(a, b) {
  return a + b;
}
const result = add(2, 3); // result is 5
```

- **`console.log()`**: Outputs a value to the console but does not exit the function or affect its return value.

**Example:**

```javascript
function add(a, b) {
  console.log(a + b);
}
add(2, 3); // Outputs 5 to the console, but the function does not return anything
```

### 4. **What is the `this` keyword in JavaScript functions?**

The `this` keyword refers to the object that is currently executing the code. Its value depends on how the function is called:

- **In a Method**: `this` refers to the object the method is called on.

**Example:**

```javascript
const person = {
  name: 'John',
  greet: function() {
    return `Hello, ${this.name}`;
  }
};

console.log(person.greet()); // Hello, John
```

- **In a Regular Function**: `this` refers to the global object (`window` in browsers) or `undefined` in strict mode.

**Example:**

```javascript
function greet() {
  return `Hello, ${this.name}`;
}

console.log(greet()); // Hello, undefined
```

- **In Arrow Functions**: `this` is lexically inherited from the surrounding context.

**Example:**

```javascript
const person = {
  name: 'John',
  greet: () => {
    return `Hello, ${this.name}`;
  }
};

console.log(person.greet()); // Hello, undefined
```

### 5. **What is the execution context in JavaScript?**

The execution context is an abstract concept that describes the environment in which JavaScript code is executed. There are three main types of execution contexts:

1. **Global Execution Context**: The default or base context where code starts executing. It creates the global object (`window` in browsers) and the `this` keyword.

2. **Function Execution Context**: Created whenever a function is invoked. It contains information about the function's arguments, local variables, and the value of `this`.

3. **Eval Execution Context**: Created by the `eval()` function (not commonly used).

Each execution context has its own variable environment, scope chain, and `this` value.

### 6. **What is the execution stack or call stack?**

The execution stack (or call stack) is a stack data structure that keeps track of function calls. When a function is called, its execution context is pushed onto the stack. When the function returns, its execution context is popped off the stack.

**Example:**

```javascript
function first() {
  second();
}

function second() {
  console.log('Second');
}

first(); // 'Second'
```

- When `first()` is called, its context is pushed onto the stack.
- `second()` is called within `first()`, so `second()`'s context is pushed on top.
- When `second()` completes, its context is popped off the stack, and control returns to `first()`.

### 7. **What is the "hoisting" behavior in JavaScript?**

Hoisting is JavaScript's default behavior of moving declarations (not initializations) to the top of their containing scope during the compilation phase.

**Function Declarations** are fully hoisted:

```javascript
console.log(greet()); // Hello
function greet() {
  return 'Hello';
}
```

**Variable Declarations** with `var` are hoisted, but their initializations are not:

```javascript
console.log(x); // undefined
var x = 10;
```

**Variables declared with `let` and `const`** are not hoisted in the same way. They are in a "temporal dead zone" from the start of the block until their declaration is encountered.

### 8. **What are default parameters in JavaScript functions?**

Default parameters allow you to initialize function parameters with default values if no value or `undefined` is passed.

**Example:**

```javascript
function greet(name = 'Guest') {
  return `Hello, ${name}`;
}

console.log(greet()); // Hello, Guest
console.log(greet('Alice')); // Hello, Alice
```

### 9. **What is the rest parameter in JavaScript?**

The rest parameter syntax (`...`) allows a function to accept an indefinite number of arguments as an array.

**Example:**

```javascript
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4, 5)); // 15
```
# Scopes, HOF, Closure

### **1. What is Scope in JavaScript?**

Scope in JavaScript refers to the accessibility of variables and functions in different parts of the code. JavaScript has the following types of scopes:

- **Global Scope**: Variables declared outside any function or block have global scope and can be accessed from anywhere in the code.

  ```javascript
  let globalVar = 'I am global';
  
  function checkScope() {
    console.log(globalVar); // I am global
  }
  
  checkScope();
  ```

- **Function Scope**: Variables declared within a function are only accessible within that function. They are not accessible outside the function.

  ```javascript
  function myFunction() {
    let functionVar = 'I am local to function';
    console.log(functionVar); // I am local to function
  }
  
  myFunction();
  console.log(functionVar); // ReferenceError: functionVar is not defined
  ```

- **Block Scope**: Variables declared with `let` or `const` inside a block (e.g., within `{}`) are only accessible within that block.

  ```javascript
  {
    let blockVar = 'I am block-scoped';
    console.log(blockVar); // I am block-scoped
  }
  
  console.log(blockVar); // ReferenceError: blockVar is not defined
  ```

### **2. What is a Higher-Order Function (HOF)?**

A higher-order function is a function that either takes one or more functions as arguments, returns a function, or both. Higher-order functions are commonly used for operations like mapping, filtering, and reducing arrays.

**Example of a Higher-Order Function Taking a Function as an Argument:**

```javascript
function applyOperation(a, b, operation) {
  return operation(a, b);
}

const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

console.log(applyOperation(2, 3, add)); // 5
console.log(applyOperation(2, 3, multiply)); // 6
```

**Example of a Higher-Order Function Returning a Function:**

```javascript
function createMultiplier(factor) {
  return function(x) {
    return x * factor;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
```

### **3. What is a Closure in JavaScript?**

A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope. Closures allow functions to have private variables and can be used to create functions with persistent state.

**Example of a Closure:**

```javascript
function makeCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
```

In this example, the inner function retains access to the `count` variable from its outer function, even after `makeCounter` has finished executing.

### **4. How do Closures relate to Scopes?**

Closures are closely related to scopes because they allow functions to access variables from their lexical scope even after the function that defined those variables has finished executing. This means closures can "remember" the environment in which they were created.

**Example with Nested Functions:**

```javascript
function outerFunction() {
  let outerVar = 'I am outer';

  function innerFunction() {
    console.log(outerVar);
  }

  return innerFunction;
}

const closureFunction = outerFunction();
closureFunction(); // I am outer
```

In this example, `innerFunction` is a closure that has access to `outerVar`, even after `outerFunction` has returned.

### **5. How do Closures help in Data Encapsulation?**

Closures can be used to create private variables that are not accessible from outside the function. This helps in data encapsulation and protecting internal state.

**Example:**

```javascript
function createPerson(name) {
  let age = 0; // private variable

  return {
    getName: function() {
      return name;
    },
    getAge: function() {
      return age;
    },
    setAge: function(newAge) {
      if (newAge >= 0) {
        age = newAge;
      }
    }
  };
}

const person = createPerson('Alice');
console.log(person.getName()); // Alice
console.log(person.getAge()); // 0
person.setAge(30);
console.log(person.getAge()); // 30
```

In this example, `age` is a private variable that cannot be accessed directly from outside the `createPerson` function. Instead, the functions returned by `createPerson` provide controlled access to `age`.

### **6. What are some common uses of Higher-Order Functions?**

- **Array Methods**: Many array methods are higher-order functions, including `map()`, `filter()`, and `reduce()`.

  ```javascript
  const numbers = [1, 2, 3, 4, 5];

  const squares = numbers.map(x => x * x);
  console.log(squares); // [1, 4, 9, 16, 25]

  const evenNumbers = numbers.filter(x => x % 2 === 0);
  console.log(evenNumbers); // [2, 4]

  const sum = numbers.reduce((acc, x) => acc + x, 0);
  console.log(sum); // 15
  ```

- **Function Composition**: Higher-order functions can be used to compose multiple functions into one.

  ```javascript
  function compose(f, g) {
    return function(x) {
      return f(g(x));
    };
  }

  const double = x => x * 2;
  const increment = x => x + 1;
  const doubleThenIncrement = compose(increment, double);

  console.log(doubleThenIncrement(5)); // 11
  ```

# Prototypes, Constructor Function, and Class Syntax 

### 1. **What is a prototype in JavaScript?**

A prototype is an object from which other objects inherit properties. In JavaScript, every function and object has a property called `prototype`, which is used to implement inheritance. When trying to access a property or method on an object, JavaScript will first look at the object itself, and if it doesn't find it, it will look at the object's prototype.

**Example:**

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  return `Hello, my name is ${this.name}`;
};

const john = new Person('John');
console.log(john.greet()); // Hello, my name is John
```

In this example, the `greet` method is added to the `Person` prototype, so all instances of `Person` can access it.

### 2. **What is a constructor function?**

A constructor function is a special type of function used to create and initialize objects. In JavaScript, convention dictates that constructor functions are named with an initial capital letter. The `new` keyword is used to create an instance of an object from a constructor function.

**Example:**

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const alice = new Person('Alice', 25);
console.log(alice.name); // Alice
console.log(alice.age); // 25
```

When the `new` keyword is used with a constructor function:
1. A new empty object is created.
2. The constructor function's `this` is set to the new object.
3. The object is linked to the function's prototype.
4. The new object is returned.

### 3. **What is the `prototype` property?**

The `prototype` property is an object associated with a function, which is used to define methods and properties that will be shared by all instances of objects created by that function. This allows for efficient memory usage, as methods defined on the prototype are shared among instances rather than each instance having its own copy.

**Example:**

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  return `Hello, my name is ${this.name}`;
};

const bob = new Person('Bob');
console.log(bob.greet()); // Hello, my name is Bob
```

Here, `greet` is defined on `Person.prototype`, so all instances of `Person` share this method.

### 4. **What is prototypal inheritance?**

Prototypal inheritance is a feature in JavaScript that allows objects to inherit properties and methods from other objects. This is achieved through the prototype chain, where objects have a reference to their prototype, and that prototype may also have its own prototype, forming a chain.

**Example:**

```javascript
function Animal(legs) {
  this.legs = legs;
}

Animal.prototype.walk = function() {
  return `Walking on ${this.legs} legs`;
};

function Bird(name, legs) {
  Animal.call(this, legs);
  this.name = name;
}

Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;

Bird.prototype.fly = function() {
  return `${this.name} is flying`;
};

const parrot = new Bird('Parrot', 2);
console.log(parrot.walk()); // Walking on 2 legs
console.log(parrot.fly()); // Parrot is flying
```

In this example, `Bird` inherits from `Animal`. The `Bird` prototype is set to an object created with `Animal.prototype`, establishing the inheritance chain.

### 5. **What is the `__proto__` property?**

The `__proto__` property is an internal property (though accessible in modern JavaScript environments) that points to the prototype object from which the object inherited its properties and methods. It's part of the prototype chain, but its direct use is discouraged in favor of `Object.getPrototypeOf()` and `Object.setPrototypeOf()` for better standards compliance and code clarity.

**Example:**

```javascript
const person = {
  greet() {
    return 'Hello';
  }
};

const john = {
  __proto__: person
};

console.log(john.greet()); // Hello
```

Here, `john` inherits the `greet` method from `person` via `__proto__`.

### 6. **What is the difference between the `prototype` and `__proto__` properties?**

- **`prototype`**: This is a property of functions (specifically constructor functions) that is used to set the prototype for all instances created with that constructor. It defines the "blueprint" for objects created by the constructor function.

- **`__proto__`**: This is a property of all objects that points to the object's prototype. It represents the actual inheritance link (prototype chain) from the object to its prototype.

**Example:**

```javascript
function Person() {}
const john = new Person();

console.log(Person.prototype); // The prototype property of the constructor
console.log(john.__proto__);   // The prototype property of the created object
```

### 7. **What is class syntax in JavaScript?**

Class syntax is a syntactic sugar introduced in ES6 (ECMAScript 2015) to create objects and handle inheritance. It provides a clearer and more concise way to work with prototypes and constructor functions.

**Example:**

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name}`;
  }
}

const alice = new Person('Alice', 25);
console.log(alice.greet()); // Hello, my name is Alice
```

Here, the `Person` class has a constructor method and a `greet` method. Instances of `Person` can be created using the `new` keyword.

### 8. **How do classes handle inheritance in JavaScript?**

Classes use the `extends` keyword to handle inheritance. The `super` keyword is used to call the constructor of the parent class and access its methods.

**Example:**

```javascript
class Animal {
  constructor(legs) {
    this.legs = legs;
  }

  walk() {
    return `Walking on ${this.legs} legs`;
  }
}

class Bird extends Animal {
  constructor(name, legs) {
    super(legs);
    this.name = name;
  }

  fly() {
    return `${this.name} is flying`;
  }
}

const eagle = new Bird('Eagle', 2);
console.log(eagle.walk()); // Walking on 2 legs
console.log(eagle.fly()); // Eagle is flying
```

In this example, `Bird` extends `Animal`, inheriting its properties and methods. The `super` keyword is used to call the `Animal` constructor and set the `legs` property.

### 9. **What are static methods in JavaScript classes?**

Static methods are defined on the class itself, rather than on instances of the class. They are called directly on the class and cannot be called on instances.

**Example:**

```javascript
class MathUtils {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtils.add(2, 3)); // 5
```

In this example, `add` is a static method and is called on the `MathUtils` class.

### 10. **What is the `super` keyword in JavaScript?**

The `super` keyword is used to call functions on an object's parent class. It is used in class constructors to call the parent class's constructor, and in methods to call parent methods.

**Example:**

```javascript
class Animal {
  constructor(legs) {
    this.legs = legs;
  }

  walk() {
    return `Walking on ${this.legs} legs`;
  }
}

class Dog extends Animal {
  constructor(name, legs) {
    super(legs);
    this.name = name;
  }

  bark() {
    return `${this.name} is barking`;
  }

  walk() {
    return `Dog named ${this.name} is ${super.walk()}`;
  }
}

const dog = new Dog('Buddy', 4);
console.log(dog.walk()); // Dog named Buddy is Walking on 4 legs
console.log(dog.bark()); // Buddy is barking
```

In this example, the `super` keyword in the `Dog` class is used to call the constructor of the `Animal` class and the `walk` method from the parent class.

# Async Programming and Web APIs

### 1. **What is asynchronous programming in JavaScript?**

Asynchronous programming allows JavaScript to perform tasks like I/O operations, network requests, or timers without blocking the main thread. This means that other code can run while waiting for the asynchronous task to complete. JavaScript handles this through the use of callbacks, promises, async/await, and event loops.

### 2. **What are callbacks in JavaScript?**

A callback is a function passed as an argument to another function. This function is invoked after the completion of some operation, allowing the program to continue executing without waiting for the operation to finish.

**Example:**

```javascript
function fetchData(callback) {
  setTimeout(() => {
    callback('Data received');
  }, 1000);
}

function processData(data) {
  console.log(data);
}

fetchData(processData); // 'Data received' after 1 second
```

In this example, `fetchData` takes a callback function `processData` that is called when the data is ready.

### 3. **What are promises in JavaScript?**

A promise is an object representing the eventual completion or failure of an asynchronous operation. Promises provide a cleaner way to handle asynchronous code compared to callbacks, allowing for better readability and error handling.

A promise has three states:
- **Pending**: Initial state, neither fulfilled nor rejected.
- **Fulfilled**: The operation completed successfully.
- **Rejected**: The operation failed.

**Example:**

```javascript
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Data received');
  }, 1000);
});

fetchData
  .then(data => {
    console.log(data); // 'Data received'
  })
  .catch(error => {
    console.error(error);
  });
```

In this example, the `then` method is used to handle the resolved value of the promise, and `catch` is used to handle any errors.

### 4. **What is `async/await` in JavaScript?**

`async/await` is syntactic sugar built on top of promises. It allows writing asynchronous code in a more synchronous and readable manner. An `async` function always returns a promise, and the `await` keyword is used to wait for the promise's resolution.

**Example:**

```javascript
async function fetchData() {
  try {
    const response = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Data received');
      }, 1000);
    });
    console.log(response); // 'Data received'
  } catch (error) {
    console.error(error);
  }
}

fetchData();
```

In this example, `fetchData` is an async function that uses `await` to wait for the promise to resolve before logging the data.

### 5. **What is the event loop in JavaScript?**

The event loop is a mechanism that allows JavaScript to perform non-blocking operations, despite being single-threaded. It continuously checks the call stack and the message queue. If the call stack is empty, it takes the first message from the queue and processes it, allowing asynchronous callbacks to be executed.

**Example:**

```javascript
console.log('Start');

setTimeout(() => {
  console.log('Callback');
}, 0);

console.log('End');

// Output: 
// Start
// End
// Callback
```

In this example, the `setTimeout` callback is executed after the main thread's execution is complete because of the event loop.

### 6. **What are Web APIs in the context of JavaScript?**

Web APIs are a set of interfaces provided by browsers that allow developers to interact with the browser and device capabilities. These APIs are part of the web platform and are not part of the JavaScript language itself. Some common Web APIs include:

- **DOM (Document Object Model) API**: Manipulates HTML and CSS.
- **Fetch API**: Makes HTTP requests.
- **Geolocation API**: Retrieves the geographical location of a device.
- **Canvas API**: Draws and manipulates graphics on a web page.

### 7. **What is the Fetch API?**

The Fetch API provides a modern way to make network requests similar to `XMLHttpRequest` but with a more powerful and flexible feature set. It returns a promise that resolves to the `Response` object representing the response to the request.

**Example:**

```javascript
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
```

In this example, `fetch` is used to make a GET request to the specified URL. The response is parsed as JSON, and the data is logged to the console.

### 8. **What is the `XMLHttpRequest` object?**

`XMLHttpRequest` (XHR) is an older way to make HTTP requests from the browser. It allows for the retrieval of data from a URL without having to refresh the entire page. Although Fetch API is preferred now, XHR is still used in some scenarios.

**Example:**

```javascript
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data', true);

xhr.onload = function() {
  if (xhr.status === 200) {
    console.log(JSON.parse(xhr.responseText));
  } else {
    console.error('Request failed');
  }
};

xhr.send();
```

In this example, XHR is used to make a GET request, and the response is logged if the status is 200 (OK).

### 9. **What is the `async` attribute in HTML `script` tags?**

The `async` attribute in the `script` tag tells the browser to download the script file asynchronously while the HTML is still parsing. Once the script is downloaded, it is executed immediately, which can be helpful for improving page load times.

**Example:**

```html
<script src="example.js" async></script>
```

In this example, `example.js` will be downloaded asynchronously and executed as soon as it's ready.

### 10. **What is a WebSocket?**

WebSocket is a protocol that provides full-duplex communication channels over a single, long-lived connection. It allows for real-time communication between the client and server, enabling instant data exchange.

**Example:**

```javascript
const socket = new WebSocket('ws://example.com/socket');

socket.onopen = function(event) {
  socket.send('Hello Server!');
};

socket.onmessage = function(event) {
  console.log('Message from server:', event.data);
};

socket.onclose = function(event) {
  console.log('Connection closed');
};

socket.onerror = function(error) {
  console.error('WebSocket error:', error);
};
```

In this example, a WebSocket connection is established, and various event handlers are set up to handle opening, receiving messages, closing, and errors.

# Callback Hell and Promises

### Callback Hell

1. **What is Callback Hell?**

   Callback Hell refers to a situation where multiple nested callbacks are used to perform asynchronous operations in sequence. This leads to code that is difficult to read and maintain, often appearing as a "pyramid" or "rightward drift" in the code structure.

   **Example:**

   ```javascript
   doFirstThing(function(result1) {
     doSecondThing(result1, function(result2) {
       doThirdThing(result2, function(result3) {
         doFourthThing(result3, function(result4) {
           console.log('Final result:', result4);
         });
       });
     });
   });
   ```

   In this example, each operation depends on the result of the previous one, leading to deeply nested callbacks, making the code hard to follow and maintain.

2. **Why is Callback Hell problematic?**

   Callback Hell is problematic because:
   - **Readability**: The code becomes difficult to read and understand due to deep nesting.
   - **Maintainability**: It's challenging to modify or extend such code.
   - **Error Handling**: Managing errors across multiple layers of callbacks can be cumbersome.
   - **Scalability**: Adding more asynchronous operations increases complexity.

3. **How can Callback Hell be avoided?**

   Callback Hell can be avoided by:
   - **Modularization**: Breaking down the code into smaller, reusable functions.
   - **Using Promises**: Promises provide a more elegant way to handle asynchronous operations and avoid deep nesting.
   - **Using `async/await`**: The `async/await` syntax allows for writing asynchronous code in a more synchronous-looking manner.

### Promises

1. **What is a Promise in JavaScript?**

   A Promise is an object representing the eventual completion (or failure) of an asynchronous operation. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason.

   **Example:**

   ```javascript
   const myPromise = new Promise((resolve, reject) => {
     // Asynchronous operation
     if (/* success */) {
       resolve('Success!');
     } else {
       reject('Failure!');
     }
   });

   myPromise
     .then(result => console.log(result))
     .catch(error => console.error(error));
   ```

   In this example, `myPromise` is either resolved with "Success!" or rejected with "Failure!" based on the operation's outcome.

2. **What are the states of a Promise?**

   A Promise has three states:
   - **Pending**: The initial state, neither fulfilled nor rejected.
   - **Fulfilled**: The operation completed successfully, and the promise has a value.
   - **Rejected**: The operation failed, and the promise has a reason (error).

3. **How does `.then()` work in Promises?**

   The `.then()` method is used to specify what should happen when a promise is fulfilled. It takes two arguments: a callback function for the fulfilled case and another for the rejected case (optional).

   **Example:**

   ```javascript
   myPromise.then(
     value => console.log('Fulfilled with:', value),
     error => console.error('Rejected with:', error)
   );
   ```

   The first function handles the fulfilled value, and the second handles the rejection reason.

4. **How does `.catch()` work in Promises?**

   The `.catch()` method is used to handle errors or rejected promises. It is similar to specifying the second callback in `.then()`, but it is more convenient for handling all errors in a promise chain.

   **Example:**

   ```javascript
   myPromise
     .then(value => console.log('Fulfilled with:', value))
     .catch(error => console.error('Rejected with:', error));
   ```

   In this example, `.catch()` handles any errors that occur in the promise chain.

5. **What is the purpose of `.finally()` in Promises?**

   The `.finally()` method is called when a promise is settled, whether fulfilled or rejected. It allows you to run some code regardless of the promise's outcome, typically for cleanup.

   **Example:**

   ```javascript
   myPromise
     .then(value => console.log('Fulfilled with:', value))
     .catch(error => console.error('Rejected with:', error))
     .finally(() => console.log('Operation completed'));
   ```

   In this example, `finally` runs after the promise is either resolved or rejected.

6. **How can Promises be chained?**

   Promises can be chained by returning a new promise from within a `.then()` callback. This allows for sequential execution of asynchronous operations.

   **Example:**

   ```javascript
   fetchData()
     .then(data => processData(data))
     .then(result => saveResult(result))
     .then(final => console.log('All done:', final))
     .catch(error => console.error('Error:', error));
   ```

   In this example, each `.then()` returns a new promise, allowing the next step to execute after the previous one completes.

7. **What is `Promise.all()`?**

   `Promise.all()` is a method that takes an array of promises and returns a new promise. This new promise resolves when all of the input promises have resolved, or rejects when any of the input promises reject.

   **Example:**

   ```javascript
   Promise.all([promise1, promise2, promise3])
     .then(results => console.log('All promises resolved:', results))
     .catch(error => console.error('One or more promises rejected:', error));
   ```

   In this example, `Promise.all()` waits for all the promises to resolve before continuing.

8. **What is `Promise.race()`?**

   `Promise.race()` is a method that takes an array of promises and returns a new promise that resolves or rejects as soon as one of the input promises resolves or rejects.

   **Example:**

   ```javascript
   Promise.race([promise1, promise2, promise3])
     .then(result => console.log('First promise resolved:', result))
     .catch(error => console.error('First promise rejected:', error));
   ```

   In this example, `Promise.race()` resolves or rejects based on the first promise that settles.

9. **How does `async/await` work with Promises?**

   The `async/await` syntax allows you to write asynchronous code that looks synchronous. An `async` function always returns a promise, and the `await` keyword pauses the function execution until the promise is resolved or rejected.

   **Example:**

   ```javascript
   async function fetchData() {
     try {
       const data = await getData();
       const processedData = await processData(data);
       console.log('Processed data:', processedData);
     } catch (error) {
       console.error('Error:', error);
     }
   }

   fetchData();
   ```

   In this example, `await` pauses the function execution until each promise is resolved, and `try/catch` is used for error handling.

10. **What are some common pitfalls when using Promises?**

   - **Not handling errors**: Always handle errors with `.catch()` or try/catch when using `async/await`.
   - **Forgetting to return a Promise**: When chaining, make sure to return a promise in each `.then()` callback.
   - **Mixing callbacks and Promises**: Stick to a single pattern to avoid confusion and potential bugs.

# Introduction to DOM Web API

### 1. **What is the DOM (Document Object Model)?**

The DOM (Document Object Model) is a programming interface for web documents. It represents the document as a tree of nodes, where each node corresponds to a part of the document (such as an element, attribute, or text). The DOM allows developers to manipulate the structure, style, and content of web pages dynamically.

### 2. **How does the DOM represent a web page?**

The DOM represents a web page as a hierarchical tree structure where:
- **Document** is the root node.
- **Elements** (such as `<div>`, `<p>`, `<a>`) are children of the document node.
- **Attributes** (such as `class`, `id`) are associated with elements.
- **Text nodes** represent the text inside elements.

**Example:**

For the HTML:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Example</title>
</head>
<body>
  <h1>Hello, World!</h1>
</body>
</html>
```

The DOM tree would look something like this:

```
Document
 └─ html
    ├─ head
    │  └─ title
    └─ body
       └─ h1
```

### 3. **How can you access DOM elements using JavaScript?**

You can access DOM elements using various methods provided by the DOM API, such as:

- **`getElementById(id)`**: Retrieves an element by its `id` attribute.
- **`getElementsByClassName(className)`**: Retrieves elements by their class name.
- **`getElementsByTagName(tagName)`**: Retrieves elements by their tag name.
- **`querySelector(selector)`**: Retrieves the first element that matches a CSS selector.
- **`querySelectorAll(selector)`**: Retrieves all elements that match a CSS selector.

**Example:**

```javascript
// Accessing elements
const heading = document.getElementById('myHeading');
const paragraphs = document.getElementsByClassName('myParagraph');
const firstDiv = document.querySelector('div');
const allLinks = document.querySelectorAll('a');
```

### 4. **How do you modify DOM elements using JavaScript?**

You can modify DOM elements by changing their properties or using various methods, such as:

- **`innerHTML`**: Sets or gets the HTML content inside an element.
- **`textContent`**: Sets or gets the text content inside an element.
- **`setAttribute(name, value)`**: Sets the value of an attribute on an element.
- **`style`**: Accesses and modifies the inline styles of an element.

**Example:**

```javascript
const heading = document.getElementById('myHeading');
heading.textContent = 'New Heading Text'; // Change text
heading.style.color = 'blue'; // Change color
heading.setAttribute('class', 'newClass'); // Set attribute
```

### 5. **How do you create and add new elements to the DOM?**

You can create and add new elements using methods such as:

- **`createElement(tagName)`**: Creates a new element with the specified tag name.
- **`appendChild(childNode)`**: Adds a new child node to the specified parent node.
- **`insertBefore(newNode, referenceNode)`**: Inserts a new node before a reference node.
- **`removeChild(childNode)`**: Removes a child node from the specified parent node.

**Example:**

```javascript
const newElement = document.createElement('div');
newElement.textContent = 'Hello, new element!';
document.body.appendChild(newElement); // Add to the end of the body
```

### 6. **How do you handle events in the DOM?**

You can handle events by attaching event listeners to DOM elements using methods such as:

- **`addEventListener(event, callback)`**: Adds an event listener to an element.
- **`removeEventListener(event, callback)`**: Removes an event listener from an element.

**Example:**

```javascript
const button = document.getElementById('myButton');

button.addEventListener('click', () => {
  alert('Button clicked!');
});

// To remove the event listener
// button.removeEventListener('click', callbackFunction);
```

### 7. **What are event handlers in the DOM?**

Event handlers are functions that respond to events triggered by the user or the browser. They can be assigned to DOM elements using properties or methods.

**Example:**

```html
<button id="myButton" onclick="alert('Button clicked!')">Click me</button>
```

In this example, the `onclick` attribute is used to assign an event handler directly in HTML.

### 8. **What is event delegation?**

Event delegation is a technique where a single event handler is used to manage events for multiple child elements by leveraging event propagation (bubbling). This is often used to handle events for elements that are dynamically added to the DOM.

**Example:**

```javascript
document.getElementById('parent').addEventListener('click', (event) => {
  if (event.target && event.target.matches('button')) {
    alert('Button inside parent clicked!');
  }
});
```

In this example, clicking any button inside the element with `id="parent"` will trigger the event handler.

### 9. **What is event propagation?**

Event propagation refers to the process by which events are handled in the DOM. There are two phases:
- **Capturing Phase**: The event travels from the root of the document to the target element.
- **Bubbling Phase**: The event travels from the target element back up to the root.

**Example:**

```javascript
document.body.addEventListener('click', () => {
  console.log('Body click event');
}, true); // Capturing phase

document.getElementById('myButton').addEventListener('click', () => {
  console.log('Button click event');
}); // Bubbling phase
```

In this example, the `body` event listener is set to the capturing phase (true), and the `button` event listener is set to the bubbling phase (false by default).

### 10. **How do you manipulate attributes and styles in the DOM?**

You can manipulate attributes and styles using the following methods:

- **Attributes**: Use `getAttribute(name)`, `setAttribute(name, value)`, and `removeAttribute(name)`.
- **Styles**: Use the `style` property or CSS classes.

**Example:**

```javascript
const link = document.getElementById('myLink');
link.setAttribute('href', 'https://www.example.com'); // Modify attribute

const box = document.getElementById('box');
box.style.backgroundColor = 'red'; // Modify style
box.classList.add('highlight'); // Add CSS class
```

In this example, the `href` attribute of a link is modified, and the background color and CSS class of a box are updated.

# Events and Event Listeners

### 1. **What is an Event in JavaScript?**

An event in JavaScript is an occurrence or action that happens in the browser, which the JavaScript code can respond to. Examples include user interactions like clicks, key presses, or form submissions, as well as browser-specific events like page load or resizing.

### 2. **What is an Event Listener?**

An event listener is a function that waits for a specific event to occur on a specified element. When the event happens, the event listener function is executed. Event listeners can be added to elements to handle events like clicks, changes, and more.

### 3. **How do you add an Event Listener to an Element?**

You can add an event listener using the `addEventListener` method. This method takes two arguments: the type of event and a callback function that will execute when the event occurs.

**Example:**

```javascript
const button = document.getElementById('myButton');

button.addEventListener('click', () => {
  alert('Button clicked!');
});
```

In this example, an event listener is added to the button element to handle click events.

### 4. **What are Event Types?**

Event types are specific actions or occurrences that you can listen for. Common event types include:

- **Mouse Events**: `click`, `dblclick`, `mousedown`, `mouseup`, `mouseover`, `mouseout`, `mousemove`, `contextmenu`
- **Keyboard Events**: `keydown`, `keypress`, `keyup`
- **Form Events**: `submit`, `change`, `focus`, `blur`, `input`
- **Window Events**: `load`, `resize`, `scroll`, `unload`
- **Touch Events**: `touchstart`, `touchmove`, `touchend`, `touchcancel`

**Example:**

```javascript
window.addEventListener('resize', () => {
  console.log('Window resized');
});
```

### 5. **How do you remove an Event Listener?**

To remove an event listener, use the `removeEventListener` method with the same event type and callback function used in `addEventListener`.

**Example:**

```javascript
const handleClick = () => {
  alert('Button clicked!');
};

button.addEventListener('click', handleClick);
button.removeEventListener('click', handleClick);
```

In this example, the `handleClick` function is added and then removed from the button element.

### 6. **What is Event Bubbling and Capturing?**

Event bubbling and capturing are two phases of event propagation:

- **Event Bubbling**: The event starts from the target element and bubbles up to the root of the document. It is the default behavior.
- **Event Capturing**: The event starts from the root of the document and travels down to the target element. This phase is less commonly used but can be enabled with the third argument in `addEventListener`.

**Example:**

```javascript
document.getElementById('parent').addEventListener('click', () => {
  console.log('Parent clicked!');
}, true); // Capturing phase

document.getElementById('child').addEventListener('click', () => {
  console.log('Child clicked!');
}); // Bubbling phase
```

In this example, the event is captured during the capturing phase and bubbles up to the parent.

### 7. **What is Event Delegation?**

Event delegation is a technique where a single event listener is used to manage events for multiple child elements. This is done by attaching the event listener to a common parent element and using event bubbling to handle events for the children.

**Example:**

```javascript
document.getElementById('parent').addEventListener('click', (event) => {
  if (event.target && event.target.matches('button')) {
    alert('Button inside parent clicked!');
  }
});
```

In this example, clicking any button inside the `parent` element triggers the event listener.

### 8. **What is the `event` Object?**

The `event` object is automatically passed to the event handler function and contains information about the event, such as the type of event, the target element, and additional details specific to the event type.

**Common Properties:**

- **`event.type`**: Type of the event (e.g., 'click').
- **`event.target`**: The element that triggered the event.
- **`event.currentTarget`**: The element to which the event handler is attached.
- **`event.preventDefault()`**: Prevents the default action of the event.
- **`event.stopPropagation()`**: Stops the event from propagating to parent elements.

**Example:**

```javascript
document.getElementById('myButton').addEventListener('click', (event) => {
  console.log(event.type); // 'click'
  console.log(event.target); // <button id="myButton">Click me</button>
  event.preventDefault(); // Prevent default action
});
```

### 9. **How do you handle multiple events on the same element?**

You can handle multiple events by adding separate event listeners for each event type or using a single listener function to handle different event types.

**Example:**

```javascript
const element = document.getElementById('myElement');

element.addEventListener('click', () => {
  console.log('Element clicked!');
});

element.addEventListener('mouseover', () => {
  console.log('Mouse over element!');
});
```

In this example, separate event listeners are used for `click` and `mouseover` events.

### 10. **What is the `this` keyword in event handlers?**

In an event handler, the `this` keyword refers to the element that the event handler is attached to. This allows you to access and manipulate the element that triggered the event.

**Example:**

```javascript
document.getElementById('myButton').addEventListener('click', function() {
  this.style.backgroundColor = 'yellow'; // Change background color of the button
});
```

In this example, `this` refers to the button element that was clicked.

# Event Lifecycle - Bubbling and Capturing, Event Delegation 

### 1. **What is Event Bubbling?**

Event bubbling is a phase of event propagation in the DOM where the event starts from the target element and bubbles up to the root of the document. During this phase, the event is first handled by the innermost element (the target) and then propagates outward through its ancestors.

**Example:**

```html
<!DOCTYPE html>
<html>
<body>
  <div id="parent">
    <button id="child">Click me</button>
  </div>

  <script>
    document.getElementById('parent').addEventListener('click', () => {
      console.log('Parent clicked');
    });

    document.getElementById('child').addEventListener('click', () => {
      console.log('Child clicked');
    });
  </script>
</body>
</html>
```

In this example, clicking the button (`#child`) will log "Child clicked" first, followed by "Parent clicked" because the event bubbles up from the child to the parent.

### 2. **What is Event Capturing?**

Event capturing (or capturing phase) is the phase of event propagation where the event starts from the root of the document and travels down to the target element. This phase occurs before the bubbling phase and is less commonly used than bubbling.

**Example:**

```html
<!DOCTYPE html>
<html>
<body>
  <div id="parent">
    <button id="child">Click me</button>
  </div>

  <script>
    document.getElementById('parent').addEventListener('click', () => {
      console.log('Parent clicked');
    }, true); // Capturing phase

    document.getElementById('child').addEventListener('click', () => {
      console.log('Child clicked');
    });
  </script>
</body>
</html>
```

In this example, setting the `true` parameter in `addEventListener` specifies that the event should be handled during the capturing phase. The logs will be "Parent clicked" first and "Child clicked" second.

### 3. **What is Event Propagation?**

Event propagation refers to the process by which events are handled in the DOM. It includes both the capturing phase (from the root to the target) and the bubbling phase (from the target to the root). 

**Phases of Event Propagation:**
- **Capturing Phase**: Event travels from the root down to the target element.
- **Target Phase**: Event reaches the target element.
- **Bubbling Phase**: Event travels back up from the target element to the root.

### 4. **How do you use `event.stopPropagation()`?**

`event.stopPropagation()` is a method used to stop the event from propagating further in the event flow. It prevents the event from reaching other event listeners on ancestor elements.

**Example:**

```html
<!DOCTYPE html>
<html>
<body>
  <div id="parent">
    <button id="child">Click me</button>
  </div>

  <script>
    document.getElementById('parent').addEventListener('click', () => {
      console.log('Parent clicked');
    });

    document.getElementById('child').addEventListener('click', (event) => {
      console.log('Child clicked');
      event.stopPropagation(); // Prevents bubbling
    });
  </script>
</body>
</html>
```

In this example, clicking the button will log "Child clicked" but not "Parent clicked" because `event.stopPropagation()` stops the event from bubbling up to the parent.

### 5. **What is Event Delegation?**

Event delegation is a technique where a single event listener is used to manage events for multiple child elements by leveraging event propagation. Instead of adding individual event listeners to each child, you attach a single listener to a parent element and handle events for all children through event delegation.

**Example:**

```html
<!DOCTYPE html>
<html>
<body>
  <ul id="list">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>

  <script>
    document.getElementById('list').addEventListener('click', (event) => {
      if (event.target.tagName === 'LI') {
        alert(`Item clicked: ${event.target.textContent}`);
      }
    });
  </script>
</body>
</html>
```

In this example, a single event listener is attached to the `#list` element. It checks if the clicked target is an `LI` element and handles the click accordingly. This approach is efficient and useful for dynamically added elements.

### 6. **How does Event Delegation improve performance?**

Event delegation improves performance by:
- **Reducing the number of event listeners**: Instead of adding listeners to each element, one listener is added to a parent.
- **Handling dynamic elements**: It can handle events for elements that are added to the DOM after the initial load.
- **Lowering memory usage**: Fewer event listeners mean less memory usage and potentially better performance.

### 7. **What are some common use cases for Event Delegation?**

Common use cases for event delegation include:
- **Handling events for dynamic content**: Useful for elements added or modified after page load.
- **Managing lists or tables**: Efficiently handle events for list items or table rows.
- **Form validation**: Handle form submission and input changes in a single handler.

### 8. **How do you prevent default behavior of an event?**

You can prevent the default action associated with an event using `event.preventDefault()`. This is often used to override default browser behavior, such as preventing form submission or following a link.

**Example:**

```html
<!DOCTYPE html>
<html>
<body>
  <a href="https://www.example.com" id="link">Go to Example</a>

  <script>
    document.getElementById('link').addEventListener('click', (event) => {
      event.preventDefault(); // Prevents navigation
      alert('Link click prevented');
    });
  </script>
</body>
</html>
```

In this example, clicking the link will display an alert and prevent the browser from navigating to "https://www.example.com".

### 9. **What are Event Objects in JavaScript?**

Event objects are automatically passed to event handlers and contain information about the event. They provide properties and methods to get details about the event and control its behavior.

**Properties of Event Object:**
- **`event.type`**: The type of event (e.g., `click`, `keydown`).
- **`event.target`**: The element that triggered the event.
- **`event.currentTarget`**: The element to which the event handler is attached.
- **`event.defaultPrevented`**: Boolean indicating if `preventDefault()` was called.
- **`event.stopPropagation()`**: Method to stop event propagation.

**Example:**

```javascript
document.getElementById('myButton').addEventListener('click', (event) => {
  console.log('Event type:', event.type); // 'click'
  console.log('Target element:', event.target); // The button element
});
```

In this example, the event object provides details about the click event.

### 10. **How does event delegation handle events for dynamically added elements?**

Event delegation handles events for dynamically added elements by leveraging the event propagation. Since the event listener is attached to a parent element, it can manage events for all child elements, including those added after the event listener was set up.

**Example:**

```html
<!DOCTYPE html>
<html>
<body>
  <ul id="list">
    <!-- Items will be added dynamically -->
  </ul>
  <button id="addItem">Add Item</button>

  <script>
    const list = document.getElementById('list');
    const button = document.getElementById('addItem');

    // Event delegation
    list.addEventListener('click', (event) => {
      if (event.target.tagName === 'LI') {
        alert(`Item clicked: ${event.target.textContent}`);
      }
    });

    // Adding items dynamically
    button.addEventListener('click', () => {
      const newItem = document.createElement('li');
      newItem.textContent = 'New Item';
      list.appendChild(newItem);
    });
  </script>
</body>
</html>
```

In this example, the event delegation allows handling clicks on dynamically added `LI` elements.

# 'Strict Mode'

### 1. **What is Strict Mode in JavaScript?**

Strict mode is a way to opt-in to a restricted variant of JavaScript, which helps in catching common coding errors and prevents the use of some features that are considered error-prone or unsafe. It was introduced in ECMAScript 5 to improve the quality of JavaScript code by making it more predictable and secure.

### 2. **How do you enable Strict Mode?**

Strict mode can be enabled by adding `"use strict";` at the beginning of a script or a function. It can be applied globally to the entire script or locally to individual functions.

**Global Strict Mode:**

```javascript
"use strict";

function myFunction() {
  // Code here runs in strict mode
}
```

**Local Strict Mode:**

```javascript
function myFunction() {
  "use strict";
  // Code here runs in strict mode
}
```

### 3. **What are the key differences between strict mode and non-strict mode?**

Strict mode introduces several changes to the behavior of JavaScript:

- **Variable Declarations**: Variables must be declared with `let`, `const`, or `var`. Undeclared variables will throw an error.
  
  ```javascript
  "use strict";
  x = 10; // Error: x is not defined
  ```

- **Assignment to Read-Only Properties**: Assigning values to read-only properties or non-existent properties will throw an error.
  
  ```javascript
  "use strict";
  const obj = {};
  Object.defineProperty(obj, 'prop', { value: 42, writable: false });
  obj.prop = 9; // Error: Cannot assign to read-only property 'prop'
  ```

- **Deleting Variables and Functions**: Deleting variables, function names, or function parameters will throw an error.
  
  ```javascript
  "use strict";
  delete x; // Error: Delete of an unqualified identifier in strict mode.
  ```

- **`this` Behavior**: In strict mode, `this` is `undefined` in functions that are not called as methods of objects.
  
  ```javascript
  "use strict";
  function show() {
    console.log(this); // undefined
  }
  show();
  ```

- **Reserved Keywords**: Strict mode reserves some keywords that cannot be used as variable names, such as `class`, `enum`, `export`, `extends`, `import`, `super`, etc.
  
  ```javascript
  "use strict";
  var class = 1; // Error: Unexpected strict mode reserved word
  ```

### 4. **What are the benefits of using Strict Mode?**

Using strict mode provides several benefits:

- **Error Detection**: It helps catch common coding mistakes and prevents the use of unsafe features.
- **Code Optimization**: JavaScript engines can optimize code more efficiently when strict mode is enabled.
- **Security**: It makes it easier to write secure JavaScript code by eliminating some features that can lead to vulnerabilities.

### 5. **What does Strict Mode do with `this`?**

In strict mode, `this` behaves differently compared to non-strict mode:

- **Global Context**: In non-strict mode, `this` in the global context refers to the global object (`window` in browsers). In strict mode, `this` is `undefined` when not called as a method of an object.

  ```javascript
  "use strict";
  function show() {
    console.log(this); // undefined
  }
  show();
  ```

- **Methods**: In methods, `this` still refers to the object that owns the method.

  ```javascript
  "use strict";
  const obj = {
    name: 'Alice',
    greet() {
      console.log(this.name); // 'Alice'
    }
  };
  obj.greet();
  ```

- **Constructors**: In strict mode, `this` inside a constructor function must refer to an object that is being constructed. If `this` is not an object, it will throw an error.

  ```javascript
  "use strict";
  function Person(name) {
    this.name = name;
  }
  const p = new Person('Alice');
  console.log(p.name); // 'Alice'
  ```

### 6. **Can you use Strict Mode in ES6+ features like classes and modules?**

Yes, strict mode is automatically applied to ES6+ features such as classes and modules:

- **Classes**: All code within a class is in strict mode by default.

  ```javascript
  class MyClass {
    constructor() {
      "use strict";
      this.prop = 1; // Valid
    }
  }
  ```

- **Modules**: JavaScript modules (`.mjs` files or `<script type="module">` tags) are always in strict mode.

  ```javascript
  // In a module file or script type="module"
  let x = 10; // Strict mode automatically applied
  ```

### 7. **What are some common errors or issues encountered when using Strict Mode?**

Common errors include:

- **Assigning to undeclared variables**: Strict mode requires all variables to be declared.
- **Deleting non-configurable properties**: Strict mode throws errors if you attempt to delete non-configurable properties.
- **Duplicating parameter names**: Strict mode does not allow duplicate parameter names in functions.

**Examples:**

```javascript
"use strict";
function sum(a, a) { // Error: Duplicate parameter name not allowed in strict mode
  return a + a;
}
```

### 8. **Can you disable Strict Mode once it's enabled?**

No, once strict mode is enabled, it cannot be disabled for the rest of the script or function. However, you can opt out of strict mode for specific functions or scripts by simply not including `"use strict";` in those contexts.

### 9. **How does Strict Mode affect `eval` and `with` statements?**

- **`eval`**: In strict mode, `eval` does not introduce new variables into the surrounding scope. It operates in its own scope.
  
  ```javascript
  "use strict";
  eval("var x = 2;");
  console.log(x); // Error: x is not defined
  ```

- **`with`**: The `with` statement is not allowed in strict mode. It can lead to unpredictable behavior and is therefore disallowed.
  
  ```javascript
  "use strict";
  with (Math) { // Error: Strict mode code may not include a with statement
    console.log(PI);
  }
  ```

### 10. **Can you apply Strict Mode to dynamically generated code?**

Yes, you can apply strict mode to dynamically generated code by using the `use strict` directive within the dynamically created code, for example, in the `eval` function or with `Function` constructor.

**Example:**

```javascript
"use strict";
const strictFunc = new Function('"use strict"; return (function() { return this; })()');
console.log(strictFunc()); // undefined
```

# Debbuging & JSON

### Debugging

#### 1. **What are some common methods for debugging JavaScript code?**

Common methods for debugging JavaScript code include:

- **`console.log()`**: Used to log information to the browser’s console. Helpful for inspecting values and flow of execution.

  ```javascript
  console.log('Debugging message:', variable);
  ```

- **Browser Developer Tools**: Most modern browsers (e.g., Chrome, Firefox, Edge) come with built-in developer tools. Key features include:
  - **Console**: View and interact with logs and errors.
  - **Debugger**: Set breakpoints and step through code execution.
  - **Sources**: Inspect and edit source files.
  - **Network**: Monitor network requests and responses.

- **`debugger` Statement**: Pauses code execution and invokes the debugging interface when the browser’s developer tools are open.

  ```javascript
  function exampleFunction() {
    debugger; // Code execution will pause here if developer tools are open
    // Your code here
  }
  ```

- **Breakpoints**: In developer tools, you can set breakpoints that halt execution at specific lines, allowing you to inspect variables and call stacks.

- **`try...catch`**: Handle and log errors gracefully using a try-catch block.

  ```javascript
  try {
    // Code that might throw an error
  } catch (error) {
    console.error('An error occurred:', error);
  }
  ```

#### 2. **What is a breakpoint, and how do you use it?**

A breakpoint is a marker you set in your code to pause execution at a specific line. This allows you to inspect the state of your program at that point.

**How to use breakpoints:**

- **In Browser DevTools**: Open the Sources panel, navigate to your JavaScript file, and click on the line number where you want to set the breakpoint.
- **Conditional Breakpoints**: Right-click on the line number to set a conditional breakpoint that only pauses when a specified condition is true.

#### 3. **What is the call stack, and how do you use it for debugging?**

The call stack is a list of functions that have been called and are currently executing. It helps you understand the sequence of function calls leading to the current point of execution.

**How to use the call stack:**

- **In Browser DevTools**: When execution is paused (e.g., at a breakpoint), inspect the call stack panel to view the sequence of function calls.
- **Analyze Call Stack**: Use the call stack to trace back the origin of errors or unexpected behavior.

#### 4. **How do you debug asynchronous code?**

Debugging asynchronous code (e.g., promises, async/await) involves:

- **Using Console Logs**: Log values and states at various points in the async code to understand its flow.
- **Breakpoints in Async Code**: Modern browsers support setting breakpoints in async functions and can handle promises.
- **`debugger` Statement**: Insert `debugger` statements in async functions to pause execution and inspect state.

**Example with Promises:**

```javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    debugger; // Pause here to inspect data
    console.log(data);
  })
  .catch(error => console.error('Error:', error));
```

### JSON (JavaScript Object Notation)

#### 1. **What is JSON?**

JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate. It is used to transmit data between a server and a web application.

**Example JSON:**

```json
{
  "name": "Alice",
  "age": 30,
  "isStudent": false,
  "courses": ["Math", "Science"],
  "address": {
    "street": "123 Main St",
    "city": "Wonderland"
  }
}
```

#### 2. **How do you parse JSON in JavaScript?**

You use `JSON.parse()` to convert a JSON string into a JavaScript object.

**Example:**

```javascript
const jsonString = '{"name":"Alice","age":30}';
const obj = JSON.parse(jsonString);
console.log(obj.name); // 'Alice'
```

#### 3. **How do you convert a JavaScript object to JSON?**

You use `JSON.stringify()` to convert a JavaScript object into a JSON string.

**Example:**

```javascript
const obj = {
  name: 'Alice',
  age: 30,
  isStudent: false
};
const jsonString = JSON.stringify(obj);
console.log(jsonString); // '{"name":"Alice","age":30,"isStudent":false}'
```

#### 4. **What are some common use cases for JSON in JavaScript?**

Common use cases for JSON include:

- **Data Storage**: Storing data in JSON format for use in web applications.
- **Data Transmission**: Exchanging data between a client and a server.
- **APIs**: Many web APIs use JSON to send and receive data.

#### 5. **What are some common issues when working with JSON?**

Common issues include:

- **Malformed JSON**: Incorrectly formatted JSON strings (e.g., missing commas, unquoted keys) will cause parsing errors.
  
  **Example Error:**
  ```javascript
  const jsonString = '{"name": "Alice", "age": 30,}'; // Error: Unexpected token
  ```

- **Circular References**: Objects with circular references cannot be serialized to JSON. Use `JSON.stringify()` with a replacer function or remove circular references.

- **Data Loss**: Some JavaScript objects (e.g., functions, `undefined`) cannot be represented in JSON and will be lost when converting to JSON.

#### 6. **How do you handle JSON parsing errors?**

Use `try...catch` to handle errors that may occur during JSON parsing.

**Example:**

```javascript
const jsonString = '{"name": "Alice", "age": 30'; // Malformed JSON
try {
  const obj = JSON.parse(jsonString);
} catch (error) {
  console.error('Error parsing JSON:', error);
}
```

#### 7. **How do you format JSON for better readability?**

Use `JSON.stringify()` with the `space` argument to add indentation and make the JSON more readable.

**Example:**

```javascript
const obj = {
  name: 'Alice',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'Wonderland'
  }
};
const jsonString = JSON.stringify(obj, null, 2); // Indent with 2 spaces
console.log(jsonString);
```

### Summary

- **Debugging**: Utilize console methods, browser developer tools, breakpoints, and the `debugger` statement for effective debugging.
- **JSON**: Parse JSON with `JSON.parse()`, convert objects with `JSON.stringify()`, handle common issues, and format JSON for readability.

# Exception Handling

### 1. **What is Exception Handling?**

Exception handling is a programming concept used to manage errors and unexpected events that occur during the execution of a program. It allows you to handle errors gracefully without crashing the application, providing a way to respond to issues and maintain control flow.

### 2. **How do you handle exceptions in JavaScript?**

In JavaScript, exceptions are handled using `try...catch` statements. You can also use `finally` for code that should always execute regardless of whether an exception occurred.

**Basic Syntax:**

```javascript
try {
  // Code that may throw an error
} catch (error) {
  // Code to handle the error
} finally {
  // Code that will always run
}
```

**Example:**

```javascript
try {
  let result = riskyOperation(); // Function that may throw an error
  console.log(result);
} catch (error) {
  console.error('An error occurred:', error);
} finally {
  console.log('This code always runs.');
}
```

### 3. **What is the `try` block?**

The `try` block contains the code that you want to execute and that may potentially throw an error. If an error occurs in the `try` block, the control is transferred to the `catch` block.

**Example:**

```javascript
try {
  let x = 1;
  let y = x / 0; // This will not throw an error in JavaScript, but let's assume a risky operation
}
```

### 4. **What is the `catch` block?**

The `catch` block contains code that handles the error if one occurs in the `try` block. It receives an `error` object that contains information about the exception.

**Example:**

```javascript
try {
  let x = JSON.parse('invalid JSON');
} catch (error) {
  console.error('Error parsing JSON:', error.message);
}
```

### 5. **What is the `finally` block?**

The `finally` block contains code that will always execute after the `try` and `catch` blocks, regardless of whether an error occurred. It is typically used for cleanup code, such as closing files or releasing resources.

**Example:**

```javascript
try {
  let file = openFile('data.txt');
  // Perform operations with the file
} catch (error) {
  console.error('Failed to open file:', error);
} finally {
  closeFile(); // Ensure the file is closed regardless of success or failure
}
```

### 6. **What is the `throw` statement?**

The `throw` statement is used to create a custom error. It allows you to throw exceptions manually and pass an error object or message.

**Example:**

```javascript
function validateAge(age) {
  if (age < 0) {
    throw new Error('Age cannot be negative');
  }
  return age;
}

try {
  validateAge(-1);
} catch (error) {
  console.error('Validation error:', error.message);
}
```

### 7. **What are built-in error types in JavaScript?**

JavaScript provides several built-in error types:

- **`Error`**: The generic error type.
  
  ```javascript
  throw new Error('Something went wrong');
  ```

- **`TypeError`**: Thrown when a value is not of the expected type.
  
  ```javascript
  throw new TypeError('Expected a string');
  ```

- **`ReferenceError`**: Thrown when referring to a non-existent variable.
  
  ```javascript
  throw new ReferenceError('Variable is not defined');
  ```

- **`SyntaxError`**: Thrown for syntax-related errors (e.g., invalid JSON).
  
  ```javascript
  throw new SyntaxError('Invalid syntax');
  ```

- **`RangeError`**: Thrown when a value is outside of the allowed range.
  
  ```javascript
  throw new RangeError('Value out of range');
  ```

### 8. **How do you create a custom error in JavaScript?**

You can create a custom error by extending the built-in `Error` class.

**Example:**

```javascript
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = 'CustomError'; // Custom name for the error
  }
}

try {
  throw new CustomError('This is a custom error');
} catch (error) {
  console.error(error.name, error.message); // 'CustomError This is a custom error'
}
```

### 9. **What is the `Error` object, and what properties does it have?**

The `Error` object represents an error that occurred during execution. Common properties include:

- **`message`**: A description of the error.
- **`name`**: The name of the error type (e.g., `TypeError`).
- **`stack`**: A stack trace representing the point in the code where the error was created.

**Example:**

```javascript
try {
  throw new Error('An error occurred');
} catch (error) {
  console.log('Error message:', error.message);
  console.log('Error name:', error.name);
  console.log('Stack trace:', error.stack);
}
```

### 10. **How does exception handling work with asynchronous code?**

For asynchronous code, such as promises and `async/await`, handling exceptions involves:

- **Promises**: Use `.catch()` to handle errors from rejected promises.

  ```javascript
  fetch('https://api.example.com/data')
    .then(response => response.json())
    .catch(error => console.error('Error fetching data:', error));
  ```

- **`async/await`**: Use `try...catch` around `await` expressions to handle errors.

  ```javascript
  async function fetchData() {
    try {
      let response = await fetch('https://api.example.com/data');
      let data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  fetchData();
  ```

### Summary

- **Exception Handling**: Use `try...catch` to manage errors and `finally` for cleanup.
- **Custom Errors**: Create custom error types by extending the `Error` class.
- **Asynchronous Code**: Handle exceptions in promises with `.catch()` and in `async/await` with `try...catch`.

# RegExp

### 1. **What is a Regular Expression (RegExp)?**

A Regular Expression (RegExp) is a sequence of characters that defines a search pattern. It is used for matching strings against specific patterns and is often used for validation, searching, and replacing text.

### 2. **How do you create a Regular Expression in JavaScript?**

You can create a Regular Expression in JavaScript using either a regular expression literal or the `RegExp` constructor.

**Using a literal:**

```javascript
const regex = /pattern/;
```

**Using the `RegExp` constructor:**

```javascript
const regex = new RegExp('pattern');
```

**Example:**

```javascript
const regex1 = /hello/;
const regex2 = new RegExp('hello');
```

### 3. **What are the basic regular expression patterns and metacharacters?**

Some basic patterns and metacharacters include:

- **`.`**: Matches any single character except newline.
  
  ```javascript
  /a.b/.test('acb'); // true
  ```

- **`^`**: Matches the start of a string.
  
  ```javascript
  /^hello/.test('hello world'); // true
  ```

- **`$`**: Matches the end of a string.
  
  ```javascript
  /world$/.test('hello world'); // true
  ```

- **`*`**: Matches zero or more occurrences of the preceding character or group.
  
  ```javascript
  /a*/.test('aaa'); // true
  ```

- **`+`**: Matches one or more occurrences of the preceding character or group.
  
  ```javascript
  /a+/.test('aaa'); // true
  ```

- **`?`**: Matches zero or one occurrence of the preceding character or group.
  
  ```javascript
  /a?b/.test('b'); // true
  ```

- **`{n}`**: Matches exactly `n` occurrences of the preceding character or group.
  
  ```javascript
  /a{3}/.test('aaa'); // true
  ```

- **`{n,}`**: Matches `n` or more occurrences.
  
  ```javascript
  /a{2,}/.test('aaa'); // true
  ```

- **`{n,m}`**: Matches between `n` and `m` occurrences.
  
  ```javascript
  /a{2,4}/.test('aaa'); // true
  ```

- **`[...]`**: Matches any one of the characters inside the brackets.
  
  ```javascript
  /[abc]/.test('a'); // true
  ```

- **`[^...]`**: Matches any character not in the brackets.
  
  ```javascript
  /[^abc]/.test('d'); // true
  ```

- **`|`**: Matches either the expression before or the expression after the `|`.
  
  ```javascript
  /cat|dog/.test('dog'); // true
  ```

- **`()`**: Groups characters together and captures the matched substring.
  
  ```javascript
  /(abc)+/.test('abcabc'); // true
  ```

- **`\d`**: Matches any digit (equivalent to `[0-9]`).
  
  ```javascript
  /\d/.test('1'); // true
  ```

- **`\D`**: Matches any non-digit.
  
  ```javascript
  /\D/.test('a'); // true
  ```

- **`\w`**: Matches any word character (alphanumeric plus underscore).
  
  ```javascript
  /\w/.test('a'); // true
  ```

- **`\W`**: Matches any non-word character.
  
  ```javascript
  /\W/.test('@'); // true
  ```

- **`\s`**: Matches any whitespace character (space, tab, newline).
  
  ```javascript
  /\s/.test(' '); // true
  ```

- **`\S`**: Matches any non-whitespace character.
  
  ```javascript
  /\S/.test('a'); // true
  ```

### 4. **How do you use regular expressions for matching strings?**

You use methods like `test()`, `exec()`, and `match()` to work with regular expressions.

- **`test()`**: Tests whether a pattern is present in a string. Returns `true` or `false`.

  ```javascript
  const regex = /hello/;
  console.log(regex.test('hello world')); // true
  ```

- **`exec()`**: Executes a search for a match and returns an array of results or `null` if no match is found.

  ```javascript
  const regex = /hello/;
  const result = regex.exec('hello world');
  console.log(result[0]); // 'hello'
  ```

- **`match()`**: Uses a regular expression to search for matches in a string and returns an array of results or `null`.

  ```javascript
  const str = 'hello world';
  const matches = str.match(/hello/);
  console.log(matches[0]); // 'hello'
  ```

### 5. **How do you use regular expressions for replacing strings?**

You use the `replace()` method to replace matches of a regular expression with a specified string.

**Example:**

```javascript
const str = 'hello world';
const result = str.replace(/world/, 'there');
console.log(result); // 'hello there'
```

### 6. **What are flags in regular expressions, and how do you use them?**

Flags modify the behavior of regular expressions:

- **`g`**: Global search. Finds all matches, not just the first.
  
  ```javascript
  const regex = /a/g;
  console.log('banana'.replace(regex, 'A')); // 'bAnAnA'
  ```

- **`i`**: Case-insensitive search.
  
  ```javascript
  const regex = /hello/i;
  console.log(regex.test('HELLO')); // true
  ```

- **`m`**: Multi-line search. Changes the behavior of `^` and `$` to match the start and end of each line.
  
  ```javascript
  const regex = /^a/m;
  console.log(regex.test('a\nb')); // true
  ```

- **`s`**: Dotall mode. Allows `.` to match newline characters.
  
  ```javascript
  const regex = /a.b/s;
  console.log(regex.test('a\nb')); // true
  ```

- **`u`**: Unicode mode. Treats pattern and input as Unicode.
  
  ```javascript
  const regex = /\u{1F600}/u; // Unicode emoji
  console.log(regex.test('😀')); // true
  ```

- **`y`**: Sticky search. Matches only from the current position in the string.
  
  ```javascript
  const regex = /a/y;
  const str = 'abc';
  console.log(regex.exec(str)); // ['a']
  console.log(regex.lastIndex); // 1
  ```

### 7. **How do you use regular expressions for validation?**

Regular expressions are commonly used for input validation, such as validating email addresses, phone numbers, or passwords.

**Example:**

- **Email Validation:**

  ```javascript
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  console.log(emailRegex.test('example@example.com')); // true
  ```

- **Phone Number Validation:**

  ```javascript
  const phoneRegex = /^\d{10}$/;
  console.log(phoneRegex.test('1234567890')); // true
  ```

### 8. **What are lookahead and lookbehind assertions in regular expressions?**

Lookahead and lookbehind assertions are zero-width assertions used to match patterns based on surrounding text.

- **Lookahead**: Matches a group of characters only if they are followed by another pattern.
  
  ```javascript
  const regex = /foo(?=bar)/;
  console.log(regex.test('foobar')); // true
  ```

- **Negative Lookahead**: Matches a group of characters only if they are not followed by another pattern.
  
  ```javascript
  const regex = /foo(?!bar)/;
  console.log(regex.test('foobaz')); // true
  ```

- **Lookbehind**: Matches a group of characters only if they are preceded by another pattern (not supported in all environments).

  ```javascript
  const regex = (?<=foo)bar;
  console.log(regex.test('foobar')); // true
  ```

- **Negative Lookbehind**: Matches a group of characters only if they are not preceded by another pattern (not supported in all environments).

  ```javascript
  const regex = (?<!foo)bar;
  console.log(regex.test('bazbar')); // true
  ```

### 9. **How do you handle regular expressions with special characters?**

To handle special characters in regular expressions, you need to escape them with a backslash (`\`).

**Example:**

- **Escape Special Characters:**

  ```javascript
  const regex = /a\.b/;
  console.log(regex.test('a.b')); // true
  ```

- **Dynamic Pattern Creation:**

  ```javascript
  const specialChar = '\\';
  const regex = new RegExp(`a${specialChar}b`);
  console.log(regex.test('a\\b')); // true
  ```

### Summary

- **Regular Expressions**: Patterns used for matching and manipulating strings.
- **Creation**: Use literals or `RegExp` constructor.
- **Patterns and Metacharacters**: Define search patterns and matches.
- **Flags**: Modify behavior of regular expressions.
- **Methods**: `test()`, `exec()`, `match()`, `replace()`.
- **Assertions**: Lookahead and lookbehind for advanced pattern matching.
