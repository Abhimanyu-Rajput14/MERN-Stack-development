### Authentication Using Passport.js

**Passport.js** is a popular authentication middleware for Node.js that allows you to add authentication to your web applications in a simple and consistent way. Passport is extremely flexible and can authenticate using a wide range of strategies, including local username/password authentication, OAuth (Google, Facebook, Twitter), JWT, and more.

Here, we'll focus on how to implement **local authentication** using Passport.js, which is useful for traditional username/password-based authentication.

---

### 1. **What is Passport.js?**

Passport.js is a **middleware** for Node.js that simplifies implementing authentication strategies in a web application. It can authenticate requests using a variety of strategies, such as:
- **Local Authentication**: Using a username and password stored in the database.
- **OAuth**: For integrating with third-party login systems like Google or Facebook.
- **JWT**: For token-based authentication.

It is designed to be **unobtrusive**, meaning it doesn't impose strict rules on how your application should be structured.

---

### 2. **Setting Up Passport.js for Local Authentication**

Let’s walk through setting up **Passport.js** in a Node.js application for **local authentication** using a username and password stored in memory (this can be adapted to use a database such as MongoDB or MySQL).

#### Install the Required Packages

First, we need to install the necessary dependencies:

```bash
npm init -y
npm install express passport passport-local bcryptjs express-session body-parser
```

- **express**: The web framework for creating the server.
- **passport**: The authentication middleware.
- **passport-local**: A strategy for local username/password authentication.
- **bcryptjs**: For password hashing (to store passwords securely).
- **express-session**: To handle sessions (since Passport uses sessions to maintain logged-in state).
- **body-parser**: To parse incoming request bodies.

---

#### Basic Application Structure

We’ll create a basic app where users can register, log in, and log out. For simplicity, we'll store users in memory (no database). In a real-world application, you would store user information in a database.

Create a new file, `app.js`, and set up the Express server:

```javascript
const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Simulate an in-memory database for storing users
const users = [];

// Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Session middleware (needed for passport)
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true
}));

// Initialize passport
app.use(passport.initialize());
app.use(passport.session());

// Passport Local Strategy (authentication strategy)
passport.use(new LocalStrategy(
  async (username, password, done) => {
    // Find user by username (in a real app, use a database query)
    const user = users.find(u => u.username === username);
    if (!user) {
      return done(null, false, { message: 'Incorrect username.' });
    }

    // Compare provided password with stored hash
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return done(null, false, { message: 'Incorrect password.' });
    }

    return done(null, user);
  }
));

// Serialize user (store user in session)
passport.serializeUser((user, done) => {
  done(null, user.username);
});

// Deserialize user (retrieve user from session)
passport.deserializeUser((username, done) => {
  const user = users.find(u => u.username === username);
  done(null, user);
});

// Registration route (for new users)
app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  
  // Check if user already exists
  if (users.find(u => u.username === username)) {
    return res.status(400).send('User already exists');
  }

  // Hash the password before storing
  const hashedPassword = await bcrypt.hash(password, 10);

  // Store the user (in a real app, store in a database)
  users.push({ username, password: hashedPassword });
  res.status(201).send('User registered successfully');
});

// Login route (using Passport.js)
app.post('/login', passport.authenticate('local', {
  successRedirect: '/dashboard',
  failureRedirect: '/login',
  failureFlash: true
}));

// Protected route (middleware to check if user is logged in)
function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();  // Allow access
  }
  res.redirect('/login');  // Deny access and redirect to login
}

// Dashboard route (only accessible for authenticated users)
app.get('/dashboard', isAuthenticated, (req, res) => {
  res.send(`Welcome to your dashboard, ${req.user.username}`);
});

// Logout route (destroy the session)
app.get('/logout', (req, res) => {
  req.logout((err) => {
    if (err) return next(err);
    res.redirect('/');
  });
});

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to the Home Page');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
```

---

### 3. **How Passport.js Works in the Example**

1. **Local Strategy**:
   - We use `passport-local` to authenticate users based on a username and password. The `LocalStrategy` checks if the username exists and whether the provided password matches the hashed password stored in the "database".
   - `passport.use(new LocalStrategy(...))` is the line where we define the strategy for authentication.
   - The `done` function is used to pass control to the next step, either authenticated or failed.

2. **Session Management**:
   - After a user is authenticated, Passport.js serializes the user and stores their session information (`serializeUser` and `deserializeUser`).
   - **`serializeUser`** stores the user’s session data in the cookie.
   - **`deserializeUser`** retrieves user information from the session.

3. **Authentication Middleware**:
   - **`passport.authenticate('local')`**: This middleware is used to authenticate the user by checking their username and password.
   - **`isAuthenticated`**: This custom middleware checks if the user is logged in by verifying the session using `req.isAuthenticated()`.

---

### 4. **Authorization Using Middleware**

Authorization ensures that a user has permission to access specific resources or perform certain actions. In our example, we use a simple middleware to protect routes like `/dashboard`.

#### `isAuthenticated` Middleware:

This middleware checks if the user is authenticated before allowing them to access the `/dashboard` route. If the user is not authenticated (i.e., not logged in), they will be redirected to the login page.

```javascript
function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();  // Allow access to the protected route
  }
  res.redirect('/login');  // Deny access and redirect to login
}
```

This middleware is placed on the `/dashboard` route:

```javascript
app.get('/dashboard', isAuthenticated, (req, res) => {
  res.send(`Welcome to your dashboard, ${req.user.username}`);
});
```

This ensures that only logged-in users can access their dashboard.

---

### 5. **Testing the Application**

1. **Register a New User**:
   Send a POST request to `/register` with the following JSON body:
   ```json
   {
     "username": "john_doe",
     "password": "supersecurepassword"
   }
   ```

2. **Login as the Registered User**:
   Send a POST request to `/login` with the following JSON body:
   ```json
   {
     "username": "john_doe",
     "password": "supersecurepassword"
   }
   ```

3. **Access the Dashboard**:
   Once logged in, you can access the protected `/dashboard` route. If the user is not authenticated, they will be redirected to the login page.

4. **Logout**:
   Send a GET request to `/logout` to log out the user and destroy their session.

---

### 6. **Conclusion**

By using Passport.js, you can easily integrate authentication into your web applications. The `passport-local` strategy helps with traditional username/password authentication, while Passport also supports OAuth and other authentication methods. 

In addition, using **authorization middleware**, like the `isAuthenticated` function, ensures that only users with the correct permissions can access specific resources. This approach allows you to quickly implement secure, flexible authentication and authorization in your Node.js application.

