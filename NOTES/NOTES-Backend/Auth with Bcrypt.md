### Authentication Using bcrypt

In web development, **authentication** and **authorization** are two crucial concepts for securing your application. Here, we'll dive into how to handle user authentication, particularly focusing on **bcrypt**, which is a widely used library for password hashing.

---

### 1. **Authentication vs Authorization**

- **Authentication** is the process of verifying the identity of a user, typically by checking their credentials (username and password). If the credentials are valid, the system knows who the user is.
  
  - Example: When a user logs into a website by entering their username and password, the system verifies the password to ensure it matches the one stored in the database.

- **Authorization** refers to determining what resources or actions a user is allowed to access or perform. This comes after authentication—once the user is authenticated, the system checks whether they have permission to access specific resources.
  
  - Example: A user may have access to view their profile but may not have permission to delete other users' accounts.

---

### 2. **Cryptographic Hashing Functions**

To securely store passwords, **hashing** is a key technique. A **hashing function** takes input data (e.g., a password) and returns a fixed-length string of characters. This is one-way encryption, meaning you can’t retrieve the original data from the hash.

#### Key Properties of Hash Functions:
- **One-way**: It’s nearly impossible to reverse the hash to get the original password.
- **Deterministic**: The same input will always produce the same hash.
- **Collision-resistant**: Different inputs should not produce the same hash (although theoretically possible, good algorithms make this extremely unlikely).
- **Salted**: Hashing should include a **salt** (random data) to ensure even identical passwords are hashed differently. This protects against precomputed attacks (e.g., rainbow tables).

Common hashing algorithms: 
- **MD5** and **SHA-1** (not recommended due to vulnerabilities).
- **SHA-256** (better but still not ideal for password storage).
- **bcrypt** (recommended for password hashing, resistant to brute-force attacks).

---

### 3. **Why Use bcrypt for Password Hashing?**

- **bcrypt** is a password hashing algorithm designed to be computationally expensive, which means it makes brute-force attacks significantly slower.
- It also incorporates **salting** by default, ensuring that even if two users have the same password, their hashes will be different.
- It allows you to set a **work factor** (a.k.a. cost factor), which determines the number of iterations the algorithm should run, making the hashing more secure as hardware gets faster.

---

### 4. **Implementing Authentication Using bcrypt**

Let’s go step-by-step on how to implement authentication using **bcrypt** in Node.js from scratch.

#### Install the Required Packages

First, install the necessary packages:

```bash
npm init -y
npm install express bcryptjs body-parser
```

- **express**: To create the server.
- **bcryptjs**: To hash and compare passwords.
- **body-parser**: To parse incoming request bodies.

#### Create the Server (app.js)

Now, create a basic Express server to handle user authentication.

```javascript
const express = require('express');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Fake "database" to store users (in memory for simplicity)
const users = [];

// Register endpoint
app.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validate the data
    if (!username || !password) {
      return res.status(400).send('Username and password are required');
    }

    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

    // Store user (in a real-world app, save to a database)
    users.push({ username, password: hashedPassword });

    res.status(201).send('User registered successfully');
  } catch (err) {
    res.status(500).send('Error registering user');
  }
});

// Login endpoint
app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find user by username (in a real app, query the database)
    const user = users.find((user) => user.username === username);

    if (!user) {
      return res.status(404).send('User not found');
    }

    // Compare the provided password with the stored hash
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(401).send('Invalid credentials');
    }

    res.status(200).send('Login successful');
  } catch (err) {
    res.status(500).send('Error logging in');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
```

### Explanation of the Code:
1. **Registration (POST /register)**:
   - When the user registers, the server hashes the password using bcrypt with a salt of **10** rounds.
   - The hashed password is stored in a simple in-memory database (for demonstration). In a real-world application, you would store the hash in a proper database.
   - The user is then registered successfully.

2. **Login (POST /login)**:
   - When a user logs in, the server compares the submitted password with the hashed password stored in the database using `bcrypt.compare()`.
   - If the passwords match, the user is authenticated; otherwise, they are denied access.

---

### 5. **Key Methods in bcrypt**

- **bcrypt.hash(password, saltRounds)**: Hashes the password with a specified number of salt rounds. The higher the number of salt rounds, the more computationally expensive the hashing process becomes, making brute-force attacks slower.
  
  Example:
  ```javascript
  const saltRounds = 10; // Salt rounds (higher = more secure, but slower)
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  ```

- **bcrypt.compare(password, hash)**: Compares a plain-text password with a hashed password. It returns `true` if they match and `false` if they don’t.
  
  Example:
  ```javascript
  const match = await bcrypt.compare(plainPassword, storedHash);
  if (match) {
    // Allow user to log in
  } else {
    // Reject login
  }
  ```

---

### 6. **How bcrypt Protects Against Brute-Force Attacks**

The key feature of **bcrypt** is that it is designed to be **computationally expensive**. This means that even with modern hardware, it takes more time to compute a hash than simpler algorithms like MD5 or SHA-1, which makes it more resistant to brute-force and dictionary attacks.

You can adjust the number of **salt rounds** in bcrypt to control how long the hashing process takes. The higher the number, the stronger the security, but it also requires more time and resources to hash passwords, so finding a balance is important.

---

### 7. **Testing the Application**

1. **Register a user**:
   - Send a POST request to `http://localhost:3000/register` with a JSON body:
   ```json
   {
     "username": "john_doe",
     "password": "supersecurepassword"
   }
   ```

2. **Login as the registered user**:
   - Send a POST request to `http://localhost:3000/login` with a JSON body:
   ```json
   {
     "username": "john_doe",
     "password": "supersecurepassword"
   }
   ```

3. **Invalid login**:
   - Try logging in with an incorrect password or an unregistered username to test how the application handles authentication failures.

---

### Conclusion

Using **bcrypt** for password hashing is a secure and recommended approach for authenticating users in web applications. By hashing passwords before storing them and leveraging the power of salt and multiple hash rounds, bcrypt significantly reduces the risk of password leaks and brute-force attacks.