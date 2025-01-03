const accordians = document.querySelectorAll(".Accordian");

accordians.forEach((value) => {
  const icon = value.querySelector(".icon");
  const answer = value.querySelector(".Answer");

  value.addEventListener("click", () => {
    icon.classList.toggle("active");
    answer.classList.toggle("active");
  });
});



