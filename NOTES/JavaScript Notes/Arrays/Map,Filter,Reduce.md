In JavaScript, **map**, **filter**, and **reduce** are high-order functions commonly used for processing arrays. These methods are frequently discussed in interviews because they demonstrate your understanding of functional programming concepts and array manipulation. Here's an explanation:

---

### **1. Map**
- **Purpose**: Creates a new array by applying a given function to each element of the input array.
- **Key Points**:
  - Does not modify the original array.
  - The output array is of the same length as the input array.
- **Use Cases**:
  - Transforming or modifying each element in an array.
  - Example: Converting an array of numbers to their squares.

```javascript
const numbers = [1, 2, 3, 4];
const squares = numbers.map(num => num * num);
console.log(squares); // Output: [1, 4, 9, 16]
```

---

### **2. Filter**
- **Purpose**: Creates a new array containing only the elements that pass a certain condition.
- **Key Points**:
  - The callback function returns `true` for elements to include and `false` for those to exclude.
  - The output array may have fewer elements than the input array.
- **Use Cases**:
  - Filtering elements based on a condition.
  - Example: Extracting even numbers from an array.

```javascript
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]
```

---

### **3. Reduce**
- **Purpose**: Reduces an array to a single value by applying a function cumulatively to its elements.
- **Key Points**:
  - Requires a callback with two arguments: an accumulator and the current element.
  - Can also take an initial value for the accumulator.
- **Use Cases**:
  - Summing all numbers in an array.
  - Finding the maximum or minimum value in an array.
  - Example: Calculating the sum of all elements in an array.

```javascript
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); // Output: 10
```

---

### **Differences and Summary**:

| Feature       | **map**                  | **filter**               | **reduce**               |
|---------------|--------------------------|--------------------------|--------------------------|
| **Output**    | Array (same length)      | Array (filtered subset)  | Single value             |
| **Use**       | Transform each element   | Select elements by a condition | Aggregate all elements   |
| **Callback**  | Returns transformed value| Returns `true`/`false`  | Returns cumulative value |

---

### **Interview Tips**:
1. **Emphasize immutability**: All these methods create new arrays or values without modifying the original.
2. **Highlight chaining**: Mention that these methods can be combined for more complex operations. For example:

```javascript
const numbers = [1, 2, 3, 4, 5];
const result = numbers
  .filter(num => num % 2 === 0)   // [2, 4]
  .map(num => num * 2)            // [4, 8]
  .reduce((sum, num) => sum + num, 0); // 12

console.log(result); // Output: 12
```