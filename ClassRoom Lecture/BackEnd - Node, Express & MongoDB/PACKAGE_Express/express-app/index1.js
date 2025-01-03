// const colors = require("colors");
// const figlet = require("figlet");

// console.log("Abhimanyu Singh".rainbow);

// figlet("Coding Blocks", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data.rainbow);
// });

const express = require("express");
const app = express();
const path = require("path");
const users = require("../views/users.js");
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

// app.get('/monkeyPox',(req,res)=>{
//   res.sendFile(path.join(__dirname, "views", "index.html"))
// })
// app.get('/menu',(req,res)=>{
//   res.send(`<h1>Menu !</h1>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit provident aperiam nulla, sint nihil ullam doloribus dolorem veritatis omnis nemo esse adipisci iusto inventore eius tenetur quod perspiciatis itaque corrupti facilis dolorum nesciunt error cum, animi accusantium! Recusandae consequuntur necessitatibus animi iusto commodi. Possimus quia magni laudantium facere, dicta fugiat.</p>
//     `)
// })

app.get("/users", (req, res) => {
  res.json(users);
});

// app.get('/users/test1', (req, res)=>{
//     const user = users.filter(user => user.username === 'test1');
//     res.json(user);
// })

// app.get('/users/test2', (req, res)=>{
//     const user = users.filter(user => user.username === 'test2');
//     res.json(user);
// })

app.get("/users/getage", (req, res) => {
  const allUsers = users.map((user) => ({ age: user.age }));
  res.json(allUsers);
});

// req.params -> to access path params
app.get("/users/:username", (req, res) => {
  const username = req.params.username;
  //   const { username } = req.params; // destructuring
  const user = users.filter((user) => user.username === username);
  res.json(user);
});

app.get("*", (req, res) => {
  res.send("404 Not Found !");
});

app.listen(port, () => {
  console.log(`Port is listening to ${port}`);
});
