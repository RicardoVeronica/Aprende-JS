// Estado de la aplicacion
const state = {
  todoList: [],
};

// Template UI
const template = () => {
  if (state.todoList.length < 1) {
    return `<p><em>Lista sin tareas</em></p>`;
  }

  let todos = state.todoList.map((item) => `<li>${item}</li>`).join("");

  return todos;
};

// Render UI
const render = () => {
  console.log(state);
  const $list = document.getElementById("todo-list");

  $list.innerHTML = template();
};

render();

document.addEventListener("submit", (e) => {
  e.preventDefault();

  const $item = document.getElementById("todo-item");

  // Actualiza estate y UI
  state.todoList.push($item.value);
  render();

  // Limpia input
  $item.value = "";
  $item.focus();
});
