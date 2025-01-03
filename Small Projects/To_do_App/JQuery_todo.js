const form = $("form");
const input = $("form input");
const list = $(".list");

form.on("submit", (e) => {
  e.preventDefault();
  const text = input.val();
  input.val("");
  addNewTodo(text);
});

function addNewTodo(text) {
  if (text === "") return;

  const newTodo = $(`<div class="todo">
                      <div class="left">
                        <input class="check" type="checkbox">
                        <p>${text}</p>
                      </div>
                      <div class="right">
                        <span class="up-arrow">⬆️</span>
                        <span class="trash-bin">🗑️</span>
                        <span class="down-arrow">⬇️</span>
                      </div>
                    </div>`);

  list.prepend(newTodo);
}

list.on("click", (e) => {
  const element = $(e.target);

  if (element.hasClass("check")) {
    element.next("p").toggleClass("completed");
    const currDiv = element.closest(".todo");

    if (!element.is(":checked")) {
      return list.prepend(currDiv);
    }

    list.append(currDiv);
  }

  if (element.hasClass("trash-bin")) {
    element.closest(".todo").remove();
  }

  if (element.hasClass("up-arrow")) {
    const currDiv = element.closest(".todo");
    const prevDiv = currDiv.prev();

    if (prevDiv.length) prevDiv.before(currDiv);
  }

  if (element.hasClass("down-arrow")) {
    const currDiv = element.closest(".todo");
    const nextDiv = currDiv.next();

    if (nextDiv.length) nextDiv.after(currDiv);
  }
});
