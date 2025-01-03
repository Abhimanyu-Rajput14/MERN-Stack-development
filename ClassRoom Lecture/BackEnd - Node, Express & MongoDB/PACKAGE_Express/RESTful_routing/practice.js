const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.json());

let users = [
  {
    id: 1,
    name: "abhimanyu",
    email: "abhimanyu@123",
  },
  {
    id: 2,
    name: "abhishek",
    email: "abhishek@321",
  },
];

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send("user not found");
  }
});

app.post("/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email,
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.put("users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    res.json(user);
  } else {
    res.status(404).send("user not found");
  }
});

app.delete("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  users = users.filter((u) => u.id !== userId);
  res.status(204).send();
});

app.listen(PORT,()=>{
    console.log(`server is UP at ${PORT}`);
})