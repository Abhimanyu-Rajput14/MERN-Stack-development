const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "data", "file.txt");
const data = "r a n d o m  t e x t";

fs.writeFile(filePath, data, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("success");
});

fs.readFile(filePath, { encoding: "utf-8" }, (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data.toUpperCase());
});
