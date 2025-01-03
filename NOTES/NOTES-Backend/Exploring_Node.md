### **Node.js Overview**

#### What is Node.js?

**Node.js** is a powerful, open-source runtime environment that allows developers to run JavaScript on the server side. It's built on **Google Chrome's V8 JavaScript engine**, which is known for its speed and efficiency. Node.js enables **asynchronous, event-driven** programming, making it highly suitable for building fast, scalable network applications.

#### Key Features of Node.js:

1. **Asynchronous & Event-Driven:**
   - All APIs in Node.js are non-blocking, meaning the server does not wait for data to be returned. It continues executing while a previous call executes in the background.
  
2. **Single-Threaded:**
   - Node.js uses a single-threaded model with event looping. The event-driven model helps handle concurrent requests efficiently.

3. **Scalability:**
   - It can handle thousands of requests without the need for multiple threads, making it highly scalable.

4. **Fast Execution:**
   - Because Node.js uses the V8 engine, it executes code very quickly, making it perfect for I/O-heavy applications like real-time chat apps.

5. **Package Ecosystem:**
   - The **Node Package Manager (NPM)** is one of the largest ecosystems of open-source libraries, which makes it easy to add pre-built modules to your application.

---

### **Inbuilt Node.js Modules**

Node.js comes with many **core modules** that provide functionality like handling files, creating servers, and more. Here's a look at some key modules:

#### 1. **HTTP Module**
   The `http` module in Node.js allows you to create a web server.

   **Example: Creating a basic HTTP server**
   ```javascript
   // Import the HTTP module
   const http = require('http');

   // Create a server
   const server = http.createServer((req, res) => {
       res.statusCode = 200;
       res.setHeader('Content-Type', 'text/plain');
       res.end('Hello, World!\n');
   });

   // Listen on port 3000
   server.listen(3000, () => {
       console.log('Server running at http://localhost:3000/');
   });
   ```

   **Real-World Use Case:** This is the foundation of a web server, which could be extended to serve an API or a full website.

#### 2. **File System (fs) Module**
   The `fs` module is used to interact with the file system, allowing you to read, write, update, and delete files.

   **Example: Reading a file asynchronously**
   ```javascript
   const fs = require('fs');

   fs.readFile('example.txt', 'utf8', (err, data) => {
       if (err) {
           console.error(err);
           return;
       }
       console.log(data);
   });
   ```

   **Real-World Use Case:** You can use the `fs` module to read and write configuration files for your Node.js application.

#### 3. **Path Module**
   The `path` module provides utilities for working with file and directory paths.

   **Example: Working with file paths**
   ```javascript
   const path = require('path');

   // Join two path segments
   const filePath = path.join(__dirname, 'example.txt');
   console.log(filePath);
   ```

   **Real-World Use Case:** Useful for constructing cross-platform file paths (important for when working on both Windows and Linux environments).

---

### **Sharing Code Between Files in Node.js**

In Node.js, you can break your code into different files and share functionality between them using **`module.exports`** and **`require()`**.

#### **Example: Sharing code between files**

1. **File 1: mathOperations.js**
   ```javascript
   // mathOperations.js
   function add(a, b) {
       return a + b;
   }

   function subtract(a, b) {
       return a - b;
   }

   module.exports = { add, subtract };
   ```

2. **File 2: app.js**
   ```javascript
   // app.js
   const math = require('./mathOperations');

   const sum = math.add(5, 10);
   const difference = math.subtract(10, 5);

   console.log('Sum:', sum);         // Output: Sum: 15
   console.log('Difference:', difference); // Output: Difference: 5
   ```

   **Real-World Use Case:** In a large project, you would modularize your code into different files, like separating logic for user authentication, database handling, and business logic.

---

### **Interview Questions & Answers**

1. **Q: What is Node.js, and why is it used?**
   - **A:** Node.js is a runtime environment for executing JavaScript outside the browser. It’s used to build fast, scalable network applications due to its asynchronous and non-blocking nature.

2. **Q: How does Node.js handle multiple requests with a single-threaded model?**
   - **A:** Node.js uses an event-driven architecture where the main thread delegates tasks to the event loop, which handles I/O operations asynchronously. This allows it to manage many requests efficiently with a single thread.

3. **Q: What is the purpose of the `http` module in Node.js?**
   - **A:** The `http` module in Node.js is used to create web servers and handle HTTP requests and responses.

4. **Q: How can you read a file in Node.js asynchronously?**
   - **A:** You can use the `fs.readFile()` method to read files asynchronously. Example:
     ```javascript
     fs.readFile('example.txt', 'utf8', (err, data) => {
         if (err) throw err;
         console.log(data);
     });
     ```

5. **Q: How do you share code between different files in Node.js?**
   - **A:** You can share code using `module.exports` to export functions, objects, or variables from one file, and `require()` to import them into another file.

---