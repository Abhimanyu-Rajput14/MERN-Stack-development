# Javascript functions

Functions are fundamental to JavaScript and are used to encapsulate code into reusable blocks. JavaScript supports different types of functions, including function declarations, function expressions, and arrow functions. Here's a comprehensive look at these different types and their characteristics:

## 1. **Function Declaration**

**Description**: Function declarations define named functions that can be called before they are defined in the code. They are hoisted, meaning the function definition is moved to the top of its scope during compilation.

**Syntax**:
```javascript
function functionName(parameters) {
  // code to be executed
}
```

**Example**:
```javascript
function greet(name) {
  return "Hello, " + name;
}

console.log(greet("Alice")); // "Hello, Alice"
```

**Characteristics**:
- **Hoisting**: Function declarations are hoisted to the top of their scope.
- **Named**: Must have a name.

## 2. **Function Expression**

**Description**: Function expressions define functions as part of an expression. They can be named or anonymous and are not hoisted. Function expressions are assigned to variables and can be invoked only after the variable has been assigned.

**Syntax**:
```javascript
const functionName = function(parameters) {
  // code to be executed
};
```

**Example**:
```javascript
const multiply = function(a, b) {
  return a * b;
};

console.log(multiply(2, 3)); // 6
```

**Characteristics**:
- **Not Hoisted**: Function expressions are not hoisted.
- **Anonymous or Named**: Can be anonymous or named.

## 3. **Arrow Function**

**Description**: Arrow functions provide a shorter syntax for writing function expressions and lexically bind the `this` value (i.e., they inherit `this` from their surrounding context). They are useful for callbacks and functional programming.

**Syntax**:
```javascript
const functionName = (parameters) => {
  // code to be executed
};
```

**Example**:
```javascript
const add = (a, b) => a + b;

console.log(add(5, 7)); // 12
```

**Characteristics**:
- **Short Syntax**: Provides a more concise syntax for function expressions.
- **Lexical `this` Binding**: Inherits `this` from the surrounding context, making them unsuitable for methods that need their own `this` context.
- **Implicit Return**: If the function body has a single expression, the result is implicitly returned.

**Example with Implicit Return**:
```javascript
const square = x => x * x;

console.log(square(4)); // 16
```

**Example with Block Body**:
```javascript
const greet = name => {
  const greeting = "Hello";
  return `${greeting}, ${name}`;
};

console.log(greet("Alice")); // "Hello, Alice"
```

## 4. **First-Class Functions**

**Description**: In JavaScript, functions are first-class citizens, meaning they can be treated like any other value. This means functions can be assigned to variables, passed as arguments, returned from other functions, and stored in data structures.

**Characteristics**:
- **Assign to Variables**: Functions can be assigned to variables.
  ```javascript
  const sayHello = function() {
    return "Hello";
  };
  ```
- **Pass as Arguments**: Functions can be passed as arguments to other functions.
  ```javascript
  function execute(fn) {
    return fn();
  }

  console.log(execute(() => "Hello")); // "Hello"
  ```
- **Return from Other Functions**: Functions can return other functions.
  ```javascript
  function createMultiplier(multiplier) {
    return function(value) {
      return value * multiplier;
    };
  }

  const double = createMultiplier(2);
  console.log(double(5)); // 10
  ```
- **Store in Data Structures**: Functions can be stored in arrays or objects.
  ```javascript
  const operations = [
    function(a, b) { return a + b; },
    function(a, b) { return a - b; }
  ];

  console.log(operations[0](3, 4)); // 7
  console.log(operations[1](9, 5)); // 4
  ```

## Summary

- **Function Declaration**: Named functions, hoisted, can be called before they appear in the code.
- **Function Expression**: Functions defined as part of an expression, not hoisted, can be named or anonymous.
- **Arrow Function**: Concise syntax, lexically binds `this`, and is ideal for simple functions and callbacks.
- **First-Class Functions**: Functions in JavaScript can be assigned to variables, passed as arguments, returned from other functions, and stored in data structures.

## Understanding function execution and execution context:

### 1. **Function Execution**

When a function is invoked in JavaScript, several steps occur:

1. **Creation Phase**: When the function is defined, JavaScript prepares the function by creating its execution context. This includes setting up the function’s local scope, the `this` value, and initializing parameters.

2. **Execution Phase**: When the function is called, JavaScript creates a new execution context for that function. This context includes:
   - **Function Arguments**: Passed to the function.
   - **Local Variables**: Variables declared within the function.
   - **`this` Binding**: The context object to which `this` refers.

### 2. **Execution Context**

An execution context is an environment in which JavaScript code is evaluated and executed. There are three types of execution contexts:

1. **Global Execution Context**:
   - Created when the JavaScript engine first starts executing the script.
   - The global object (`window` in browsers, `global` in Node.js) and `this` are initialized.
   - Global variables and functions are created in this context.

2. **Function Execution Context**:
   - Created every time a function is invoked.
   - Contains the function’s arguments, local variables, and a reference to the outer (lexical) environment.

3. **Eval Execution Context** (Rarely Used):
   - Created when code is executed inside an `eval()` function.

**Components of Execution Context**:
- **Variable Environment**: Holds function arguments, local variables, and function declarations.
- **Lexical Environment**: Contains variable bindings and references to parent lexical environments.
- **This Binding**: Refers to the context in which the function is invoked.

### 3. **Execution Context Lifecycle**

1. **Creation Phase**:
   - **Variable and Function Declarations**: Variables and function declarations are hoisted to the top of their scope. Initial values are set to `undefined`.
   - **Lexical Environment Setup**: Sets up the environment with variable bindings.

2. **Execution Phase**:
   - **Code Execution**: Executes the code line by line, initializing variables and performing operations.

### 4. **Function Scope and Closure**

**Function Scope**:
- Variables defined within a function are only accessible within that function.
- Function scopes can be nested, allowing inner functions to access variables from their outer function.

**Example**:
```javascript
function outer() {
  let outerVar = 'I am outer';
  function inner() {
    console.log(outerVar); // 'I am outer'
  }
  inner();
}

outer();
```

**Closure**:
- A closure is a function that retains access to its lexical environment even after the function has finished executing.
- This allows inner functions to access variables from their outer function even after the outer function has completed execution.

**Example**:
```javascript
function createCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```

### 5. **The `this` Keyword**

The value of `this` depends on how a function is called:
- **Global Context**: In the global context, `this` refers to the global object (`window` in browsers, `global` in Node.js).
- **Object Method**: When a function is called as a method of an object, `this` refers to the object.
- **Constructor Function**: When a function is called with the `new` keyword, `this` refers to the newly created object.
- **Arrow Functions**: Do not have their own `this` context; they inherit `this` from their surrounding lexical context.
- **Event Handlers**: In event handlers, `this` refers to the element that triggered the event.

**Examples**:
```javascript
// Global Context
console.log(this); // window (in browsers)

// Object Method
const person = {
  name: 'Alice',
  greet() {
    console.log(this.name); // 'Alice'
  }
};
person.greet();

// Constructor Function
function Person(name) {
  this.name = name;
}
const alice = new Person('Alice');
console.log(alice.name); // 'Alice'

// Arrow Function
const obj = {
  name: 'Alice',
  greet: () => {
    console.log(this.name); // undefined (inherits `this` from surrounding context)
  }
};
obj.greet();
```

### Summary

- **Function Execution**: Involves creating a new execution context with its own scope and `this` binding.
- **Execution Context**: Includes the global context, function context, and eval context.
- **Function Scope and Closure**: Functions can access variables from their outer scopes due to closures.
- **`this` Keyword**: Refers to different objects based on how the function is called.
