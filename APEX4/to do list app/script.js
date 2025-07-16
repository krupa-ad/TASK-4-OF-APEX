// Load tasks when the page is loaded
window.onload = function() {
  loadTasks();
};

function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();

  if (task) {
    const tasks = getTasks();
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    input.value = "";
    loadTasks();
  }
}

function loadTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  const tasks = getTasks();
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${task} <button onclick="removeTask(${index})">X</button>`;
    taskList.appendChild(li);
  });
}

function removeTask(index) {
  const tasks = getTasks();
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  loadTasks();
}

function getTasks() {
  const tasks = localStorage.getItem("tasks");
  return tasks ? JSON.parse(tasks) : [];
}
