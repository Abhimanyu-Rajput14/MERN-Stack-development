// ---------class constructor---------

class rectangle {
  constructor(l, b) {
    this.length = l;
    this.breadth = b;
  }

  area() {
    return this.length * this.breadth;
  }
  isSquare() {
    return this.length === this.breadth;
  }
  static print() {
    console.log("this is static method");
  }
  get newLength() {
    return this.length;
  }
  set newLength(value) {
    this.length = value;
  }
}
const r1 = new rectangle(12, 45);
// const r2 = new rectangle(24, 24);
// console.log(r1);
// console.log(r2);
// console.log(r1.area());
// console.log(r1.isSquare());
// console.log(r2.isSquare());
// console.log(rectangle.print());
// r1.newLength = 55;
// console.log(r1.newLength);

class cuboid extends rectangle {
  constructor(l, b, h) {
    super(l, b);
    this.height = h;
  }
  volume() {
    return this.length * this.height * this.breadth;
  }
}
const r3 = new cuboid(4, 7, 2);
// console.log(r3.volume());
// console.log(r3.area());

// ------------Async in Sync manner-------------

// ---------- (1)nested callBack / callBack hell / pyramid of doom ---------

function getFood(callBack) {
  setTimeout(() => {
    console.log("food arrived!");
    callBack();
  }, 3000);
}
function getDrinks(callBack) {
  setTimeout(() => {
    console.log("drink arrived!");
    callBack();
  }, 1000);
}

function getSweets() {
  setTimeout(() => {
    console.log("sweets arrived!");
  }, 2000);
}

// wrapper function
// getFood(function () {
//   getDrinks(function () {
//     getSweets();
//   });
// });

function downloadFile(callback) {
  const file = "photo.png";
  console.log("File started to download", file);

  setTimeout(() => {
    callback(file);
  }, 3000);
}

function compressFile(file, callback) {
  console.log("File started to compress", file);

  setTimeout(() => {
    const compressedFile = file.split(".")[0] + ".zip";
    callback(compressedFile);
  }, 2000);
}

function uploadFile(file, callback) {
  console.log("File started uploading", file);

  setTimeout(() => {
    callback("http://stackoverflow.cloud/" + file);
  }, 2000);
}

// downloadFile(function (file) {
//   console.log("File downloaded successfully!", file);
//   compressFile(file, function (compressedFile) {
//     console.log("File compressed Successfully!", compressedFile);
//     uploadFile(compressedFile, function (finalUpload) {
//       console.log("File uploaded succesfully to", finalUpload);
//     });
//   });
// });

// ----------- (2)promise ------------

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const num = Math.floor(Math.random() * 10);
//     if (num > 5) {
//       resolve();
//     } else {
//       reject();
//     }
//   }, 2000);
// });

// p.then(() => {
//   console.log("Promise fullfilled");
// }).catch(() => {
//   console.log("Promise rejected");
// });

function downloadFile() {
  const file = "photo.png";
  console.log("File started to download", file);

  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(file);
    }, 3000);
  });

  return p;
}

function compressFile(file) {
  console.log("File started to compress", file);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const compressedFile = file.split(".")[0] + ".zip";
      resolve(compressedFile);
    }, 2000);
  });
}

function uploadFile(file) {
  console.log("File started to upload");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("https://facebook.cloud.com/" + file);
    }, 2000);
  });
}

//---CallBack Method---

// downloadFile(function(file){
//     console.log('File downloaded successfully!', file);
//     compressFile(file, function(compressedFile){
//         console.log('File compressed Successfully!', compressedFile);
//         uploadFile(compressedFile, function(finalLink){
//             console.log('final link', finalLink);
//         });
//     })
// });

//---nested promises method----

// downloadFile()
//     .then((file)=>{
//         console.log(file);
//         //here
//         compressFile(file)
//             .then((compressedFile)=>{
//                 console.log(compressedFile);
//                 uploadFile(compressedFile)
//                     .then((finalLink)=>{
//                         console.log(finalLink)
//                     })
//             })

//     })
//     .catch((err)=>{
//         console.log(err);
//     })

//---sequential promises method---

// downloadFile()
//   .then((file) => {
//     console.log("file downloaded successfully!", file);
//     return compressFile(file);
//   })
//   .then((compressedFile) => {
//     console.log("File compressed successfully!", compressedFile);
//     return uploadFile(compressedFile);
//   })
//   .then((finalLink) => {
//     console.log("file uploaded successfully to", finalLink);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// ------------- (3) Async - await -------------------

async function main() {
  const file = await downloadFile();
  console.log("file downloaded successfully", file);

  const compressedFile = await compressFile(file);
  console.log("file compressed successfully", compressedFile);

  const finalLink = await uploadFile(compressedFile);
  console.log("file uploaded successfully", finalLink);
}
main();
