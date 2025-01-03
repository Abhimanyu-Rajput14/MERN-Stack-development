const fs = require("fs");
const path = require("path");
const data = `C H I N T U`;

const filePath = path.join(__dirname, "data", "file.txt");
const filePath2 = path.join(__dirname, "practice.txt");

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});

fs.writeFile(filePath, data, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("success");
});



fs.appendFile(filePath2, "\nChintu Singh", "utf8", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("appended successfully");
});

fs.readFile(filePath2, "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});