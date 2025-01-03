// Start of the code
require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const app = express();
app.use(express.json()); // To parse JSON request body

// Dummy users database
let users = [];

// Register route - create a new user
app.post("/register", async (req, res) => {
  const { username, password } = req.body;

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Save user with hashed password
  users.push({ username, password: hashedPassword });

  // Generate JWT token
  const token = jwt.sign({ username }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.json({ message: "User registered", token });
});

// Login route - authenticate a user
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  // Find user by username
  const user = users.find((u) => u.username === username);

  if (!user) {
    return res.status(400).json({ message: "Invalid username or password" });
  }

  // Check if password matches
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(400).json({ message: "Invalid username or password" });
  }

  // Generate new token
  const token = jwt.sign({ username }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.json({ message: "Logged in", token });
});

// Protected route - only accessible with a valid token
app.get("/protected", (req, res) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(403).json({ message: "Token required" });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
    res.json({ message: "This is protected data", user: decoded });
  } catch (err) {
    res.status(401).json({ message: "Invalid or expired token" });
  }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
// End of the code
