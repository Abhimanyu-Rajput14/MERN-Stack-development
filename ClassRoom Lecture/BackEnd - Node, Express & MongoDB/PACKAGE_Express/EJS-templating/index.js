const express = require("express");
const app = express();

const todo = ["morning walk", "learn node", "eat breakfast"];

app.get("/todos", (req, res) => {
  res.render("todo.ejs", {
    title: "ToDos",
    data: todo,
  });
});

app.get("/", (req, res) => {
  // res.send('Working Fine !!')
  const randomNum = Math.floor(Math.random()*100);
  res.render("random.ejs", {
    title: "Homepage",
    ran:randomNum,
  });
});

app.listen(4000, () => {
  console.log("Server is UP at port", 4000);
});
