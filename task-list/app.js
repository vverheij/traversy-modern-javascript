const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");
const modal = document.querySelectorAll('.modal');
let instances;
// load all eventlisteners
loadEventListeners();

function loadEventListeners() {
  // add task event
  form.addEventListener("submit", addTask);
  taskList.addEventListener("click", removeTask);
  clearBtn.addEventListener("click", clearTasks);
  filter.addEventListener("keyup", filterTasks);
  document.addEventListener("DOMContentLoaded", getTasks);
  }

function addTask(e) {
  if (taskInput.value === "") {
    e.preventDefault();
    return instances[0].open();
  } 

  // create li elemant
  const li = document.createElement("li");
  li.className = "collection-item";

  // create and add text node
  li.appendChild(document.createTextNode(taskInput.value));

  // create new link element
  const link = document.createElement("a");

  link.className = "delete-item secondary-content";

  // add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';

  li.appendChild(link);

  taskList.appendChild(li);

  storeTaskInLocalStorage(taskInput.value);

  taskInput.value = "";

  e.preventDefault();
}

function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    // let result = instances[0].open();

    if (confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();

      // remove form local storage
      removeTaskFromLocalStorage(e.target.parentElement.parentElement)
    }
  }
}

function removeTaskFromLocalStorage(taskItem) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task, index) {
    if(taskItem.textContent === task) {
      tasks.splice(index, 1)
    }
  })

  localStorage.setItem('tasks', JSON.stringify(tasks))
}


function clearTasks(e) {
  // taskList.innerHTML = ''
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
  clearTasksFromLocalStorage()
}

function clearTasksFromLocalStorage() {
  localStorage.clear();
}


function filterTasks(e) {
  const text = e.target.value.toLowerCase();
  document.querySelectorAll(".collection-item").forEach(function (task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}

function storeTaskInLocalStorage(task) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function getTasks(e) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach(function (task) {
    // create li elemant
    const li = document.createElement("li");
    li.className = "collection-item";

    // create and add text node
    li.appendChild(document.createTextNode(task));

    // create new link element
    const link = document.createElement("a");

    link.className = "delete-item secondary-content";

    // add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';

    li.appendChild(link);

    taskList.appendChild(li);
  });
  // instances = M.Modal.init(modal, {dismissible: false, onOpenStart: function() { alert('Closed');}});
  instances = M.Modal.init(modal, { opacity: .1, dismissible: false, startingTop: '1%'});
}

function onCloseStart() {
  // alert('hello world')
  console.log('hellow owlrd')
}

