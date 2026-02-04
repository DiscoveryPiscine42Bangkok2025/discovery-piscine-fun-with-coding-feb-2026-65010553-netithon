$(document).ready(function () {
  const $list = $("#ft_list");
  const $newBtn = $("#new");

  loadTodos();

  $newBtn.on("click", function () {
    const text = prompt("New TO DO:");
    if (text && text.trim() !== "") {
      addTodo(text.trim());
      saveTodos();
    }
  });

  function addTodo(text) {
    const $div = $("<div></div>").text(text);

    $div.on("click", function () {
      if (confirm("Do you want to remove this TO DO?")) {
        $(this).remove();
        saveTodos();
      }
    });

    $list.prepend($div);
  }

  function saveTodos() {
    const todos = [];
    $list.children("div").each(function () {
      todos.push($(this).text());
    });
    document.cookie =
      "todos=" + encodeURIComponent(JSON.stringify(todos));
  }

  function loadTodos() {
    const cookies = document.cookie.split("; ");
    const todoCookie = cookies.find(c => c.startsWith("todos="));
    if (!todoCookie) return;

    const todos = JSON.parse(
      decodeURIComponent(todoCookie.split("=")[1])
    );
    todos.forEach(todo => addTodo(todo));
  }
});
