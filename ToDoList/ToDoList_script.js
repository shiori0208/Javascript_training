document.addEventListener('DOMContentLoaded', () => {
const toDoInput = document.getElementById("todo-input");
const addTaskBtn = document.getElementById("add-task-btn");
const toDoList = document.getElementById("todo-list");

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

tasks.forEach(task => renderTask(task)); 

addTaskBtn
.addEventListener('click', () => {
    const taskTest = toDoInput.value.trim();
    if (taskTest === "") return; 

    const newTask = {
        id: Date.now(),
        text: taskTest,
        complete: false
    }; 

    tasks.push(newTask);
    saveTasks(); 
    renderTask(newTask);
    toDoInput.value = ""; //clear input
    console.log(tasks);
    
}); 

function renderTask(task) {
    const li = document.createElement('li');
    li.setAttribute('data-id', task.id);
    if(task.complete) li.classList.add("completed");
    li.innerHTML = `
    <span> ${task.text} </span>
    <button> Delete </button>`; 

    li.addEventListener('click', (e) => {
        if(e.target.tagName === 'BUTTON') return;
        task.completed = !task.complete;
        li.classList.toggle('completed'); 
        saveTasks(); 
    });

    li.querySelector('button')
    .addEventListener("click", (e) => {
        e.stopPropagation(); //prevents going upto parent, prevet toggle from firing
        tasks = tasks.filter(t => t.id != task.id);
        li.remove();
        saveTasks(); 
    }); 





    toDoList.appendChild(li); 
    
}


function saveTasks () {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

})

