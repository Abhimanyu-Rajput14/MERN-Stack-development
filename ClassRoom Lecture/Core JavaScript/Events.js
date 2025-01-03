const button = document.querySelector("button");

// button.onclick = () => alert("clicked");
// button.addEventListener("click", () => alert("submitted"));

const h1 = document.querySelector("h1");
h1.addEventListener("mouseenter", () => {
  h1.style.background = "yellow";
  const txt = h1.textContent.toLocaleUpperCase();
});
h1.addEventListener("mouseleave", () => {
  h1.style.background = null;
});

const email = document.querySelectorAll("input")[0];
const pass = document.querySelectorAll("input")[1];

button.addEventListener("click", () => {
  const inp = email.value;
  const pss = pass.value;

  alert(inp);
  alert(pss);
});
