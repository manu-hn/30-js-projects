const addTaskSection = document.getElementById('add-task-section');
const viewTaskSection = document.getElementById('view-task-section');
const uLists = document.createElement('ul');
const taskInput = document.getElementById('add-input');
const addTaskBtn = document.getElementById('add-btn');
viewTaskSection.appendChild(uLists);

let tasksArray = [];

document.addEventListener('DOMContentLoaded', () => {
    const parsedTasks = localStorage.getItem('tasks');
    if (parsedTasks) {
        tasksArray = JSON.parse(parsedTasks);
        updateTasks();
    }
});

addTaskBtn.addEventListener('click', addTask);

function addTask() {
    if (taskInput.value !== "") {
        const taskObject = {
            id: tasksArray.length + 1,
            taskName: taskInput.value,
            completed: false,
        };
        tasksArray.push(taskObject);
        taskInput.value = ''; // Clear the input field after adding the task
        updateTasks();
    }
}



function renderTasks() {
    uLists.innerHTML = '';
    tasksArray.forEach((task) => {
        const li = document.createElement('li');
        li.className = "task-name";
        const span = document.createElement('span');
        const deleteBtn = document.createElement('button');
        const editBtn = document.createElement('button');
        const btnContainer = document.createElement('div');
        const checkbox = document.createElement('input');

        deleteBtn.textContent = 'Delete'
        deleteBtn.className = 'button-75'
        editBtn.textContent = 'Edit'
        editBtn.className = 'button-63'
        btnContainer.id = 'btn-container'
        checkbox.type = "checkbox";
        span.textContent = task.taskName;

        checkbox.checked = task.completed;

        checkbox.addEventListener('click', ()=>{
            task.completed = checkbox.checked;
            updateTasks();
        });


        if (task.completed) {
            span.style.textDecoration = 'line-through';
            span.style.textDecorationColor = "#000000"
            span.style.textDecorationThickness = "0.25em"
        } else {
            span.style.textDecoration = 'none';
        }

        deleteBtn.addEventListener('click', () => {
            console.log('deleted')
            deleteTask(task?.id);
        })
        editBtn.addEventListener('click', () => {
            editTask(task?.id);
        })

      

        btnContainer.append(editBtn, deleteBtn, checkbox);

        li.append(span, btnContainer)

        uLists.appendChild(li);
    });
}

function deleteTask(id) {

    tasksArray = tasksArray.filter((task) => task.id !== id);
    updateTasks();
}


function editTask(id) {
    const newTaskName = prompt('Enter Task Name !');

    if (newTaskName !== '') {
        tasksArray.forEach((task) => {
            if (task.id === id) task.taskName = newTaskName;
        });
        updateTasks();
    } else {
        alert('Please Enter Proper Name')
    }
}

function updateTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasksArray));
    renderTasks();
}