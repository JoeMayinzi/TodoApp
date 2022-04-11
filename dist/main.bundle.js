/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
//import './style.css';
var createTask = document.querySelector("#createTask");
var addTask = document.querySelector("#addTask");
var tasks = document.querySelector(".tasks");
var emptyTodo = document.querySelector(".emptyTodo");

var displayTodo = function displayTodo() {
  addTask.addEventListener("click", function (Event) {
    Event.preventDefault();

    if (createTask.value === "") {
      console.log("champ vide");
    }

    if (createTask.value != "") {
      console.log(createTask.value);
      emptyTodo.remove(); //createTask.value = "";
    }

    var taskList = document.createElement("div");
    var taskName = document.createElement("span");
    var deleteTask = document.createElement("button");
    var editTask = document.createElement("button");
    var done = document.createElement("input");
    editTask.textContent = "Edit";
    deleteTask.textContent = "Delete";
    taskName.textContent = createTask.value;
    done.type = "checkbox";
    tasks.append(taskList);
    taskList.append(done, taskName, editTask, deleteTask);
    taskList.setAttribute("class", "taskList");
    createTask.value = "";
  });
};

displayTodo();
/******/ })()
;
//# sourceMappingURL=main.bundle.js.map