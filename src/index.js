import './style.css';

const createTask = document.querySelector("#createTask");
const addTask = document.querySelector("#addTask");
const tasks = document.querySelector(".tasks");
const emptyTodo = document.querySelector(".emptyTodo")

const displayTodo = ()=> {
    addTask.addEventListener("click", (Event)=>{
        Event.preventDefault()
        if (createTask.value === "") {
            console.log("champ vide");
        }
        if (createTask.value != "") {
            console.log(createTask.value);
            emptyTodo.remove()
            //createTask.value = "";
        }

        const taskList = document.createElement("div");
        const taskName = document.createElement("span");
        const deleteTask = document.createElement("button");
        const editTask = document.createElement("button");
        const done = document.createElement("input")
        const icon = document.createElement("i");

        editTask.textContent = "Edit"
        deleteTask.textContent = "Delete";
        taskName.textContent = createTask.value;
        done.type = "checkbox"
        tasks.append(taskList);
        taskList.append(done, taskName, editTask,deleteTask, icon);
        taskList.setAttribute("class", "taskList")
        createTask.value = "";

        done.addEventListener("click", ()=>{
            icon.setAttribute("class", "fas fa-check");
            
        })

        const deleTodo = ()=>{
            deleteTask.addEventListener("click", (e)=>{
                taskList.remove()
            })
        }
        deleTodo()
    })
    
    
}




displayTodo()