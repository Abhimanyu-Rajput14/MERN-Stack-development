// Import libraries
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 3000;
const session = require("express-session");
const userModel = require("./models/user.model");

// Initialize app
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "abhi1234",
    cookie: {
      maxAge: 60 * 1000,
    },
  })
);

// Set EJS engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

function isLoggedIn(req, res, next) {
  console.log(req.session);
  if (!req.session.user) {
    res.redirect("/login");
    return;
  }
  next();
}

app.use((req, res, next) => {
  if (req.session.user) app.locals.user = req.session.user;
  next();
});

// MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/auth-demo")
  .then(() => console.log("DB Connected!"));

// Routes
app.get("/", isLoggedIn, (req, res) => res.render("index", { title: "home" }));

app.get("/login", (req, res) => {
  if (req.session.user) {
    res.redirect("back");
    return;
  }
  res.render("login");
});

app.get("/register", (req, res) => {
  if (req.session.user) {
    res.redirect("back");
    return;
  }
  res.render("register");
});

app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  const user = await userModel.findOne({ username });
  if (user) {
    res.send("User already exists");
    return;
  }
  await userModel.create({ username, email, password });
  res.redirect("/login");
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await userModel.findOne({ username });
  if (!user) {
    res.redirect("/register");
    return;
  }
  if (user.password !== password) {
    res.send("Invalid Creds!");
    return;
  }
  req.session.user = user;

  res.redirect("/");
});

app.get("/logout", (req, res) => {
  req.session.destroy();
  // delete req.session.user;
  res.redirect("/login");
});

// Start server
app.listen(PORT, () => console.log(`server is running on Port ${PORT}`));
