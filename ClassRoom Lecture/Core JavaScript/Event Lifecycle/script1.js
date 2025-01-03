const parent = document.getElementById("parent");
const child = document.getElementsByClassName("child");

parent.addEventListener("click", (e) => {
  if (e.target.classList.contains("child")) {
    console.log(e.target.innerText);
  }
});
