const parent = document.getElementById("parent");
const child = document.getElementById("child");
const grandChild = document.getElementById("grand-child");

parent.addEventListener(
  "click",
  (e) => {
    e.stopPropagation();
    console.log("parent element");
  },
  false
);

child.addEventListener(
  "click",
  () => {
    console.log("child element");
  },
  true
);
grandChild.addEventListener(
  "click",
  () => {
    console.log("grand-child element");
  },
  false
);
