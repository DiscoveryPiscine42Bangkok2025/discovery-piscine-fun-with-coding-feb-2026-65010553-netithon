const list = document.getElementById("ft_list");
const newBtn = document.getElementById("new");

window.onload = loadTodos; //เวลาโหลด/เข้าๆออกแล้วข้อมูลยังอยู่

newBtn.onclick = function () {
  const text = prompt("New TO DO:"); //ส่วนของการเพิ่มรายการ
  if (text && text.trim() !== "") { //กันกรอกค่าว่าง
    addTodo(text.trim());
    saveTodos();
  }
};

function addTodo(text) {
  const div = document.createElement("div"); //สร้างรายการใหม่เป็น div
  div.textContent = text;

  div.onclick = function () {
    if (confirm("Do you want to remove this TO DO?")) {
      list.removeChild(div);
      saveTodos();
    }
  };

  list.prepend(div);
}

function saveTodos() {
  const todos = [];
  list.querySelectorAll("div").forEach(div => {
    todos.push(div.textContent);               //เก็บข้อความของแต่ละ div ลงใน array
  });
  document.cookie = "todos=" + encodeURIComponent(JSON.stringify(todos));
}


// ส่วนของการโหลดข้อมูลจาก cookie
function loadTodos() {
  const cookies = document.cookie.split("; ");
  const todoCookie = cookies.find(c => c.startsWith("todos="));
  if (!todoCookie) return;

  const todos = JSON.parse(decodeURIComponent(todoCookie.split("=")[1]));
  todos.forEach(todo => addTodo(todo));
}
