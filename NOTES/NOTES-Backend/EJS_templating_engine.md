### **Understanding Templating Languages and Their Importance**

A **templating language** is used to dynamically generate HTML on the server side. It allows developers to embed JavaScript logic within HTML files to create dynamic content that is rendered on the client side. Templating languages help separate business logic from the view, making code easier to maintain and reuse.

#### **Why Use Templating Languages?**
- **Separation of concerns**: You can keep the HTML structure separate from the backend logic.
- **Dynamic content rendering**: You can inject variables, iterate over data, and conditionally display content.
- **Efficient for rendering HTML**: Instead of sending raw data to the client and using client-side JS for rendering, templates allow server-side rendering (SSR), which can improve performance.

---

### **Popular Templating Engines in Node.js**

Some popular templating engines that can be used with Node.js and Express include:

1. **EJS (Embedded JavaScript)**
   - Allows embedding JavaScript in HTML files.
   - Easy to use and integrates well with Express.
   - Syntax: `<%= %>`, `<%- %>`, and more.

2. **Pug**
   - Focuses on writing less code by using indentation instead of HTML tags.
   - Simple and clean syntax.

3. **Handlebars**
   - A logic-less templating engine that separates logic and HTML.
   - Well-suited for rendering templates with minimal logic.

---

### **Configuring Express to Use EJS**

We will use **EJS** as the templating engine for Express. EJS is widely used because it closely resembles regular HTML and allows embedding JavaScript code inside HTML templates.

#### **Step 1: Install EJS**

Before using EJS in your Express app, you need to install it:

```bash
npm install ejs
```

#### **Step 2: Configure Express to Use EJS**

You need to tell Express to use EJS as the view engine. This can be done using the following configuration:

```javascript
const express = require('express');
const app = express();

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Specify the 'views' directory where your EJS files will be stored
app.set('views', './views');

// Define a route
app.get('/', (req, res) => {
    res.render('index', { message: 'Hello from the server!' });
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
```

- **app.set('view engine', 'ejs')**: This tells Express to use EJS as the template engine.
- **app.set('views', './views')**: This sets the directory where the EJS templates will be stored (default is `./views`).

---

### **Setting Up the Views Directory**

Create a folder named `views` in your project directory. This folder will contain all your `.ejs` files (views).

Inside the `views` folder, create a file called `index.ejs` with the following content:

```html
<!DOCTYPE html>
<html>
<head>
    <title>My First EJS App</title>
</head>
<body>
    <h1><%= message %></h1>
</body>
</html>
```

Here, `<%= message %>` is an EJS tag that outputs the value of `message`, which is passed from the server.

---

### **Understanding EJS Tags**

EJS provides various tags that allow you to embed JavaScript code inside HTML files:

1. **Output Escaped Content (`<%= %>`)**: This outputs content and escapes any special characters like `<`, `>`, etc.
   - Example:
     ```html
     <p><%= message %></p>
     ```

2. **Output Unescaped Content (`<%- %>`)**: This outputs content without escaping characters. Use this with caution.
   - Example:
     ```html
     <p><%- htmlContent %></p>
     ```

3. **JavaScript Logic (`<% %>`)**: This allows you to include JavaScript code like loops, conditionals, etc., but it does not output content directly.
   - Example:
     ```html
     <% if (showMessage) { %>
         <p>This is a message!</p>
     <% } %>
     ```

4. **Comments (`<%# %>`)**: Comments in EJS templates that won't appear in the rendered output.
   - Example:
     ```html
     <%# This is a comment %>
     ```

---

### **Passing Data from the Server to the Template**

To pass data from the server to an EJS template, you use the `res.render()` method. The first argument is the name of the template, and the second argument is an object containing the data you want to pass.

#### **Example: Passing Data to EJS Template**

In the following code, we pass an array of users to the EJS template:

```javascript
const express = require('express');
const app = express();

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Example route that sends data to the template
app.get('/users', (req, res) => {
    const users = [
        { name: 'John', age: 25 },
        { name: 'Jane', age: 30 },
        { name: 'Mark', age: 35 }
    ];

    // Render the template with the data
    res.render('users', { users });
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
```

In the `views/users.ejs` file, you can iterate over the `users` array and display the data:

```html
<!DOCTYPE html>
<html>
<head>
    <title>User List</title>
</head>
<body>
    <h1>List of Users</h1>
    <ul>
        <% users.forEach(user => { %>
            <li><%= user.name %> is <%= user.age %> years old.</li>
        <% }) %>
    </ul>
</body>
</html>
```

---

### **Interview Questions & Answers**

1. **Q: What is a templating engine, and why is it important in server-side rendering?**
   - **A:** A templating engine dynamically generates HTML by embedding JavaScript logic within HTML files. It helps separate the server-side logic from the presentation layer, making the code more maintainable and enabling dynamic content rendering.

2. **Q: How do you configure Express to use EJS as the templating engine?**
   - **A:** You can configure Express to use EJS by setting it as the view engine:
     ```javascript
     app.set('view engine', 'ejs');
     ```
     This tells Express to look for `.ejs` files when rendering views.

3. **Q: What is the purpose of the `views` directory in an Express app?**
   - **A:** The `views` directory is where all the EJS (or other template engine) files are stored. These files contain the HTML structure along with embedded JavaScript to display dynamic content.

4. **Q: What is the difference between `<%= %>` and `<%- %>` in EJS?**
   - **A:** 
     - `<%= %>`: Escapes the content, preventing XSS attacks by encoding special characters like `<`, `>`.
     - `<%- %>`: Outputs the content as-is, without escaping any characters.

5. **Q: How do you pass data from the server to an EJS template in Express?**
   - **A:** You can pass data from the server to an EJS template by passing an object as the second argument to `res.render()`:
     ```javascript
     res.render('templateName', { key: value });
     ```

---
### **Learning How to Conditionally Render Data in Templates and Loop Over Data in Templates**

In templating engines like **EJS**, you can conditionally render content and loop over data. This helps in displaying dynamic content based on certain conditions or iterating over lists of data.

---

### **Conditionally Rendering Data in EJS**

EJS allows you to conditionally render content using standard JavaScript if-else statements.

#### **Example: Conditional Rendering**

Let's say you want to display a message if a user is logged in, and another message if they are not:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Conditional Rendering</title>
</head>
<body>
    <h1>Welcome</h1>
    
    <% if (user.isLoggedIn) { %>
        <p>Welcome back, <%= user.name %>!</p>
    <% } else { %>
        <p>Please log in to continue.</p>
    <% } %>
    
</body>
</html>
```

- **<% if (user.isLoggedIn) %>**: This is an EJS if statement that checks the `isLoggedIn` property of the `user` object. 
- **<%= user.name %>**: This outputs the user's name if they are logged in.

#### **Server-side Code Example**

```javascript
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

// Route with user data
app.get('/', (req, res) => {
    const user = { isLoggedIn: true, name: 'John' };
    res.render('index', { user });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
```

---

### **Looping Over Data in EJS**

EJS provides standard JavaScript `for` and `forEach` loops to iterate over arrays and objects inside templates.

#### **Example: Looping Over an Array**

If you have an array of items (like products or users), you can display them in a list using the `forEach` method:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Looping Example</title>
</head>
<body>
    <h1>User List</h1>
    
    <ul>
        <% users.forEach(user => { %>
            <li><%= user.name %> (Age: <%= user.age %>)</li>
        <% }) %>
    </ul>
    
</body>
</html>
```

- **users.forEach(user => { ... })**: This loop iterates over the `users` array and displays each user's name and age inside a list item (`<li>`).

#### **Server-side Code Example**

```javascript
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

// Route with array of users
app.get('/users', (req, res) => {
    const users = [
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 30 },
        { name: 'Charlie', age: 35 }
    ];
    res.render('users', { users });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
```

---

### **Using Stylesheets and Scripts in an Express App as Static Files**

To serve static files such as stylesheets, images, and JavaScript files in an Express application, you need to configure Express to serve static files from a specific directory.

#### **Step 1: Set Up Static Files Directory**

Create a directory named `public` in your project, which will hold all your static files like CSS, JS, and images. You can name the folder anything, but `public` is the common convention.

Example folder structure:

```
my-app/
│
├── public/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── app.js
│   └── images/
│       └── logo.png
│
├── views/
│   └── index.ejs
│
└── app.js
```

#### **Step 2: Configure Express to Serve Static Files**

In your `app.js` file, use `express.static()` to serve the files from the `public` directory:

```javascript
const express = require('express');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Route for rendering the EJS view
app.get('/', (req, res) => {
    res.render('index');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
```

#### **Step 3: Using CSS and JavaScript in EJS**

Now, in your `index.ejs` file, you can include stylesheets and scripts like this:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Static Files Example</title>
    <link rel="stylesheet" href="/css/styles.css">
</head>
<body>
    <h1>Hello, Static Files!</h1>
    <button onclick="showMessage()">Click Me</button>

    <script src="/js/app.js"></script>
</body>
</html>
```

- **/css/styles.css**: Refers to the CSS file in the `public/css` folder.
- **/js/app.js**: Refers to the JavaScript file in the `public/js` folder.

#### **Example: styles.css**

```css
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
}

h1 {
    color: #333;
}
```

#### **Example: app.js**

```javascript
function showMessage() {
    alert("Button clicked!");
}
```

---

### **Interview Questions & Answers**

1. **Q: How do you conditionally render content in EJS?**
   - **A:** You can use standard JavaScript if-else statements to conditionally render content in EJS:
     ```html
     <% if (condition) { %>
         <p>Condition is true</p>
     <% } else { %>
         <p>Condition is false</p>
     <% } %>
     ```

2. **Q: How do you loop through an array in an EJS template?**
   - **A:** You can use JavaScript `forEach` or `for` loops to iterate over arrays in EJS:
     ```html
     <% array.forEach(item => { %>
         <p><%= item %></p>
     <% }) %>
     ```

3. **Q: How do you serve static files in an Express app?**
   - **A:** To serve static files, use `express.static()` and specify the directory where your static files (CSS, JS, images) are located:
     ```javascript
     app.use(express.static('public'));
     ```

4. **Q: What is the difference between `<%= %>` and `<% %>` in EJS?**
   - **A:** 
     - `<%= %>`: Outputs content and escapes special characters (used for displaying variables).
     - `<% %>`: Executes JavaScript code but does not output any content (used for loops, conditionals, etc.).

5. **Q: How do you include CSS and JavaScript files in an EJS template?**
   - **A:** You can include them using `<link>` for CSS and `<script>` for JavaScript:
     ```html
     <link rel="stylesheet" href="/css/styles.css">
     <script src="/js/app.js"></script>
     ```

---