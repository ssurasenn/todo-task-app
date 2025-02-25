const taskFeild = document.getElementById('todoTitle');
const taskButton = document.getElementById('addTask');
const taskList = document.querySelector('.task-list');

function addNewTask (){
    const task = taskFeild.value.trim();
            
    const taskWrapper = document.createElement('div');
    taskWrapper.className = 'task-wrapper';

    const taskInfo = document.createElement('div');
    taskInfo.className = 'task-info';

    const taskTitle = document.createElement('h3');
    taskTitle.textContent = task;

    const taskStatus = document.createElement('span');
    taskStatus.className = 'status not-started';
    taskStatus.textContent = 'Not Started';
    

    // Appening in inside the parent div
    taskInfo.appendChild(taskTitle);
    taskInfo.appendChild(taskStatus);


    const options = ["Not Started", "In Progress", "Completed"]
    const selectField = document.createElement('select')

    options.forEach((element) => {
        const option = document.createElement('option')
        option.value = element.split(' ').join('-').toLowerCase();
        option.textContent = element;
        selectField.appendChild(option);
    });
    
    // when chang select option
    selectField.addEventListener('change', (e) => {
        let value = e.target.value;
        taskStatus.textContent = value;
        console.log(value)
        taskStatus.className = `status ${value}`;
    })

        
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn-delete';
    deleteBtn.textContent = 'Del';

    //remove the Task item
    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(taskWrapper);
    })

    // Appening in inside the parent div
    taskWrapper.appendChild(taskInfo);
    taskWrapper.appendChild(selectField);
    taskWrapper.appendChild(deleteBtn);
    taskList.appendChild(taskWrapper);

    taskFeild.value = '';
};

taskButton.addEventListener('click', addNewTask);

taskFeild.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        addNewTask()
    }
})