const baseURL = "https://jsonplaceholder.typicode.com";
const list = document.querySelector(".list");
const form = document.querySelector("form");
const inp = document.querySelector("form input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = inp.value;
  inp.value = "";
  addNewTodo(text);
});

// Fetch TODOs from API
async function getData() {
  try {
    const response = await fetch(`${baseURL}/todos`);
    const data = await response.json();

    for (let i = 0; i < 5; i++) {
      addNewTodoFromAPI(data[i].title, data[i].completed);
    }
  } catch (err) {
    console.log(err);
  }
}

function addNewTodo(text) {
  if (text === "") return;

  const newTodo = document.createElement("div");
  newTodo.classList.add("todo");

  newTodo.innerHTML = ` 
                <div class="left">
                    <input class="check" type="checkbox">
                    <p>${text}</p>
                </div>
                <div class="right">
                    <span class="up-arrow">⬆️</span>
                    <span class="trash-bin">🗑️</span>
                    <span class="down-arrow">⬇️</span>
                </div>`;

  list.prepend(newTodo);
}

// Add TODOs from API with completed status
function addNewTodoFromAPI(text, completed) {
  const newTodo = document.createElement("div");
  newTodo.classList.add("todo");

  newTodo.innerHTML = ` 
                <div class="left">
                    <input class="check" type="checkbox" ${
                      completed ? "checked" : ""
                    }>
                    <p class="${completed ? "completed" : ""}">${text}</p>
                </div>
                <div class="right">
                    <span class="up-arrow">⬆️</span>
                    <span class="trash-bin">🗑️</span>
                    <span class="down-arrow">⬇️</span>
                </div>`;

  if (completed) {
    list.append(newTodo);
  } else {
    list.prepend(newTodo);
  }
}

list.addEventListener("click", (e) => {
  const element = e.target;

  if (element.classList.contains("check")) {
    element.nextElementSibling.classList.toggle("completed");
    const currDiv = element.parentElement.parentElement;

    if (!element.checked) {
      return list.prepend(currDiv);
    }

    list.append(currDiv);
  }

  if (element.classList.contains("trash-bin")) {
    element.parentElement.parentElement.remove();
  }

  if (element.classList.contains("up-arrow")) {
    const currDiv = element.parentElement.parentElement;
    const prevDiv = currDiv.previousElementSibling;

    if (prevDiv) prevDiv.before(currDiv);
  }

  if (element.classList.contains("down-arrow")) {
    const currDiv = element.parentElement.parentElement;
    const nextDiv = currDiv.nextElementSibling;

    if (nextDiv) nextDiv.after(currDiv);
  }
});

getData();