const taskInput=document.getElementById('taskInput');
const addButton=document.getElementById('addButton');
const taskList=document.getElementById('taskList');

taskInput.addEventListener('input',() => {
    addButton.disabled = !taskInput.value.trim();
});

addButton.addEventListener('click',addTask);

function addTask(){
    const taskName=taskInput.value.trim();
    if (!taskName) return;
    const task = document.createElement('div');
    task.className = 'task';

    const taskNameSpan = document.createElement('span');
    taskNameSpan.className = 'task-name';
    taskNameSpan.textContent = taskName;

    const taskCheckbox = document.createElement('input');
    taskCheckbox.type = 'checkbox';

    taskCheckbox.addEventListener('change', () => {
        if (taskCheckbox.checked) {
            task.classList.add('completed');
        } else {
            task.classList.remove('completed');
        }
    });

    task.appendChild(taskCheckbox);
    task.appendChild(taskNameSpan);
    taskList.appendChild(task);


    taskInput.value = '';
    addButton.disabled = true;



}

