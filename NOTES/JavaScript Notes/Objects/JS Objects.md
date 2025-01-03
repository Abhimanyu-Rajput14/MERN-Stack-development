# Objects in Javascript
JavaScript objects are a fundamental data structure used to store and manage data in key-value pairs. They are versatile and can represent various types of data, including real-world entities like users or products.

## Key Concepts of JavaScript Objects

### 1. **Creating Objects**

**Object Literal Notation**:
```javascript
let person = {
  name: "Alice",
  age: 30,
  isEmployed: true
};
```

**Using the `new Object()` Syntax**:
```javascript
let person = new Object();
person.name = "Alice";
person.age = 30;
person.isEmployed = true;
```

### 2. **Accessing Object Properties**

**Dot Notation**:
```javascript
console.log(person.name); // "Alice"
```

**Bracket Notation**:
```javascript
console.log(person['age']); // 30
```

**Dynamic Property Access**:
```javascript
let key = 'isEmployed';
console.log(person[key]); // true
```

### 3. **Modifying Object Properties**

You can change the value of an existing property or add new properties.

**Modifying a Property**:
```javascript
person.age = 31;
```

**Adding a New Property**:
```javascript
person.email = "alice@example.com";
```

### 4. **Deleting Properties**

**Using `delete` Operator**:
```javascript
delete person.email;
console.log(person.email); // undefined
```

### 5. **Methods**

Objects can contain functions as properties, which are called methods.

**Example**:
```javascript
let person = {
  name: "Alice",
  age: 30,
  greet: function() {
    return "Hello, my name is " + this.name;
  }
};

console.log(person.greet()); // "Hello, my name is Alice"
```

**Shorthand Method Syntax** (ES6):
```javascript
let person = {
  name: "Alice",
  age: 30,
  greet() {
    return "Hello, my name is " + this.name;
  }
};

console.log(person.greet()); // "Hello, my name is Alice"
```

### 6. **Object Property Shorthand**

When the property name and the variable name are the same, you can use shorthand syntax.

**Example**:
```javascript
let name = "Alice";
let age = 30;

let person = {
  name, // shorthand for name: name
  age   // shorthand for age: age
};

console.log(person); // { name: "Alice", age: 30 }
```

### 7. **Computed Property Names**

You can use expressions inside square brackets to define property names.

**Example**:
```javascript
let key = 'age';
let person = {
  name: "Alice",
  [key]: 30
};

console.log(person.age); // 30
```

### 8. **Object Methods**

**`Object.keys(obj)`**:
Returns an array of the object's own enumerable property names.

**Example**:
```javascript
let person = { name: "Alice", age: 30 };
console.log(Object.keys(person)); // ["name", "age"]
```

**`Object.values(obj)`**:
Returns an array of the object's own enumerable property values.

**Example**:
```javascript
let person = { name: "Alice", age: 30 };
console.log(Object.values(person)); // ["Alice", 30]
```

**`Object.entries(obj)`**:
Returns an array of the object's own enumerable string-keyed property `[key, value]` pairs.

**Example**:
```javascript
let person = { name: "Alice", age: 30 };
console.log(Object.entries(person)); // [["name", "Alice"], ["age", 30]]
```

**`Object.assign(target, ...sources)`**:
Copies properties from one or more source objects to a target object.

**Example**:
```javascript
let person = { name: "Alice" };
let details = { age: 30, job: "Engineer" };

Object.assign(person, details);
console.log(person); // { name: "Alice", age: 30, job: "Engineer" }
```

**`Object.freeze(obj)`**:
Freezes an object so that its properties cannot be modified.

**Example**:
```javascript
let person = { name: "Alice", age: 30 };
Object.freeze(person);

person.age = 31; // This will not change the property
console.log(person.age); // 30
```

**`Object.seal(obj)`**:
Seals an object so that new properties cannot be added, but existing properties can still be modified.

**Example**:
```javascript
let person = { name: "Alice", age: 30 };
Object.seal(person);

person.age = 31; // This will change the property
person.email = "alice@example.com"; // This will not add the property
console.log(person); // { name: "Alice", age: 31 }
```

### 9. **Prototype Inheritance**

JavaScript objects have a prototype from which they inherit properties and methods.

**Accessing the Prototype**:
```javascript
let person = { name: "Alice" };
let prototype = Object.getPrototypeOf(person);
console.log(prototype); // [Object: null prototype]
```

**Setting the Prototype**:
```javascript
let person = { name: "Alice" };
let prototype = { greet() { return "Hello!"; } };

Object.setPrototypeOf(person, prototype);
console.log(person.greet()); // "Hello!"
```

### Summary

- **Creating Objects**: Use object literals or `new Object()`.
- **Accessing/Modifying Properties**: Use dot or bracket notation.
- **Deleting Properties**: Use the `delete` operator.
- **Methods**: Functions as properties of objects.
- **Property Shorthand**: Use shorthand syntax for properties and methods.
- **Computed Property Names**: Define property names using expressions.
- **Object Methods**: Use `Object.keys()`, `Object.values()`, `Object.entries()`, `Object.assign()`, `Object.freeze()`, `Object.seal()`.
- **Prototype Inheritance**: Use prototype-based inheritance to share properties and methods.




