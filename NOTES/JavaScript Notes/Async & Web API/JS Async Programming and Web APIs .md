# Async Programming and Web APIs

Asynchronous programming in JavaScript is essential for handling operations that take time to complete, such as network requests, file reading, or timers. Web APIs provide a way to interact with external resources or perform background tasks.

## 1. **Asynchronous Programming**

JavaScript is single-threaded, meaning it can only execute one task at a time. Asynchronous programming allows JavaScript to handle tasks that may take time to complete without blocking the main thread.

### **1.1. Callbacks**

Callbacks are functions passed as arguments to other functions and are executed once the task is completed.

**Example**:
```javascript
function getFood(callBack) {
  setTimeout(() => {
    console.log("food arrived!");
    callBack();
  }, 3000);
}
function getDrinks(callBack) {
  setTimeout(() => {
    console.log("drink arrived!");
    callBack();
  }, 1000);
}

function getSweets() {
  setTimeout(() => {
    console.log("sweets arrived!");
  }, 2000);
}

// wrapper function
getFood(function () {
  getDrinks(function () {
    getSweets();
  });
});
```

**Key Points**:
- **Callback Function**: Executed when the asynchronous operation completes.
- **Callback Hell**: Nested callbacks can become hard to manage and lead to "callback hell."

### **1.2. Promises**

Promises represent a value that may be available now, in the future, or never. They provide a cleaner way to handle asynchronous operations compared to callbacks.

**States of a Promise**:
- **Pending**: Initial state, neither fulfilled nor rejected.
- **Fulfilled**: Operation completed successfully.
- **Rejected**: Operation failed.

**Example**:
```javascript
function checkWeather() {
  return new Promise((resolve, reject) => {
    const weatherIsGood = true; // Simulating weather condition

    if (weatherIsGood) {
      resolve("The weather is nice. Go outside!");
    } else {
      reject("The weather is bad. Stay inside!");
    }
  });
}

checkWeather()
  .then(message => console.log(message))
  .catch(error => console.log(error));
```

**Key Points**:
- **Promise Creation**: Uses `new Promise()` with `resolve` and `reject` functions.
- **Chaining**: Use `.then()` for success and `.catch()` for errors.
- **Promise.all()**: Resolves multiple promises concurrently.

**Example**:
```javascript
const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);

Promise.all([promise1, promise2]).then(values => {
  console.log(values); // Output: [1, 2]
});
```

### **1.3. Async/Await**

`async` and `await` are syntactic sugar built on top of promises, making asynchronous code look and behave more like synchronous code.

**Example**:
```javascript
async function orderCoffee() {
  // Ordering coffee with a 2-second delay
  return new Promise(resolve => setTimeout(() => resolve("Coffee is ready!"), 2000));
}

async function enjoyCoffee() {
  const coffee = await orderCoffee(); // Wait for coffee to be ready
  console.log(coffee); // Coffee is ready!
  console.log("Drinking coffee...");
}

enjoyCoffee();
```

**Key Points**:
- **`async` Function**: Always returns a promise.
- **`await` Expression**: Pauses execution until the promise resolves.
- **Error Handling**: Use `try` and `catch` for error handling.

## 2. **Web APIs**

Web APIs are provided by browsers and allow JavaScript to interact with various external resources or perform specific tasks. They include APIs for making network requests, manipulating the DOM, handling user interactions, and more.

### **2.1. Fetch API**

The Fetch API provides a modern way to make network requests and handle responses using promises.

**Example**:
```javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

**Key Points**:
- **`fetch(url)`**: Initiates a network request to the specified URL.
- **`response.json()`**: Parses the response as JSON.
- **Error Handling**: Use `.catch()` to handle errors.

### **2.2. XMLHttpRequest**

`XMLHttpRequest` is an older API for making HTTP requests. While `fetch` is preferred for modern development, `XMLHttpRequest` is still used in some applications.

**Example**:
```javascript
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data');
xhr.onload = () => {
  if (xhr.status === 200) {
    console.log(JSON.parse(xhr.responseText));
  } else {
    console.error('Request failed');
  }
};
xhr.send();
```

**Key Points**:
- **`xhr.open(method, url)`**: Configures the request.
- **`xhr.onload`**: Callback executed when the request completes successfully.
- **`xhr.send()`**: Sends the request.

### **2.3. Web Storage API**

The Web Storage API provides mechanisms to store data in the browser. It includes `localStorage` and `sessionStorage`.

**Example**:
```javascript
// Storing data
localStorage.setItem('key', 'value');

// Retrieving data
const value = localStorage.getItem('key');
console.log(value); // Output: 'value'

// Removing data
localStorage.removeItem('key');
```

**Key Points**:
- **`localStorage`**: Stores data with no expiration time.
- **`sessionStorage`**: Stores data for the duration of the page session.

### **2.4. Geolocation API**

The Geolocation API allows access to the user's location.

**Example**:
```javascript
navigator.geolocation.getCurrentPosition(position => {
  console.log(position.coords.latitude, position.coords.longitude);
}, error => {
  console.error('Error getting location:', error);
});
```

**Key Points**:
- **`navigator.geolocation.getCurrentPosition`**: Retrieves the current location.
- **Error Handling**: Use the second argument to handle errors.

## Summary

- **Asynchronous Programming**:
  - **Callbacks**: Functions executed after a task completes. Can lead to callback hell.
  - **Promises**: Represent values that may be available now or in the future. Support chaining and error handling.
  - **Async/Await**: Syntactic sugar over promises that makes asynchronous code look synchronous and more readable.

- **Web APIs**:
  - **Fetch API**: Modern way to make network requests and handle responses using promises.
  - **XMLHttpRequest**: Older API for making HTTP requests.
  - **Web Storage API**: Provides `localStorage` and `sessionStorage` for storing data in the browser.
  - **Geolocation API**: Allows access to the user's geographic location.
