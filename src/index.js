import './style.css';

const createTask = document.querySelector("#createTask");
const addTask = document.querySelector("#addTask");
const tasks = document.querySelector(".tasks");
const emptyTodo = document.querySelector(".emptyTodo")

const todoApp = ()=> {
    addTask.addEventListener("click", (Event)=>{
        Event.preventDefault()
        if (createTask.value === "") {
            console.log("champ vide");
        }
        if (createTask.value != "") {
            emptyTodo.remove()
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
            //icon.classList.toggle("fas fa-check")
            
        })

        const deleTodo = ()=>{
            deleteTask.addEventListener("click", (e)=>{
                taskList.remove();
            })
        }

        const editTodo = ()=>{
            editTask.addEventListener("click", (e)=>{
                e.preventDefault();
                let inputEdit = document.createElement("input");
                const save = document.createElement("button");
                save.innerHTML = `Save`;
                inputEdit.type = "text";
                inputEdit.setAttribute("class", "inputEdit");
                save.setAttribute("id", "save");
                taskList.append(save, inputEdit);
                inputEdit.addEventListener("keypress", (e)=>{
                    taskName.style.visibility ="hidden"
                })
                save.addEventListener("click", (e)=>{
                    e.preventDefault();
                    if(inputEdit.value === ""){
                        console.log("Veillez entrer une modification svp");
                    }
                    if(inputEdit.value != "") {
                       
                        taskName.textContent = inputEdit.value;
                        taskName.style.visibility = "visible"
                        save.remove();
                        inputEdit.remove();
                    }
                })


            })
        }

        editTodo();
        deleTodo();
    })
    
    
}

todoApp()