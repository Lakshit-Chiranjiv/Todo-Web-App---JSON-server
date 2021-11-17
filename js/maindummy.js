window.addEventListener('DOMContentLoaded',()=> renderTasks());
const tasks_div = document.getElementById('tasks');

const renderTasks = async () => {

    const response = await fetch('../data/dbdummy.json');
    const tasks_obj = await response.json();

    console.log(tasks_obj);

    let task_template = '';

    Array.prototype.forEach.call(tasks_obj.tasks, task => {
        task_template += `
            <div class="single-task">
                <h2>${task.title}</h2>
                <p>${task.date}</p>
                <button>Open Task</button>
                <a href="#"><i class="fas fa-2x fa-trash-alt"></i></a>
            </div>`
      });


    tasks_div.innerHTML = task_template;
}







