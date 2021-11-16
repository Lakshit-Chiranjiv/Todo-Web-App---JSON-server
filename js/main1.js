

const tasks_div = document.getElementById('tasks');

const renderTasks = async () => {

    let tasks_url = 'http://localhost:3000/tasks';

    const response = await fetch(tasks_url);
    const tasks_obj = await response.json();

    const task_template = '';

    tasks_obj.forEach(task => {
        task_template += `
            <div class="single-task">
                <h2>${task.title}</h2>
                <p>${task.date}</p>
                <button>Open Task</button>
            </div>
        `
    })

    tasks_div.innerHTML = task_template;
}


window.addEventListener('DOMContentLoaded',()=> renderTasks());