const form = document.querySelector('#show-form')
const showList = document.querySelector('.collection')
// const clearBtn = document.querySelector(".clear-tasks");
// const filter = document.querySelector("#filter");
const showInput = document.querySelector('#show')
// const modal = document.querySelectorAll('.modal');
// let instances;

const slugifier = new Slugifier('https://filmfestival.nl/show/')
const ui = new UI()
const storage = new Storage()

// load all eventlisteners
loadEventListeners()

function loadEventListeners() {
  form.addEventListener('submit', addShow)
  showList.addEventListener('click', removeShow)
  // clearBtn.addEventListener("click", clearTasks);
  // filter.addEventListener("keyup", filterTasks);
  document.addEventListener('DOMContentLoaded', getShows)
}

function addShow(e) {
  const show = slugifier.slugify(showInput.value)
  ui.addShow(show)

  e.preventDefault()
}

function removeShow(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    e.target.parentElement.parentElement.remove()
    
    // remove form local storage
    storage.removeShowFromLocalStorage(e.target.parentElement.parentElement)
  }
}

function clearTasks(e) {
  // taskList.innerHTML = ''
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild)
  }
  clearTasksFromLocalStorage()
}

function clearTasksFromLocalStorage() {
  localStorage.clear()
}

function filterTasks(e) {
  const text = e.target.value.toLowerCase()
  document.querySelectorAll('.collection-item').forEach(function (task) {
    const item = task.firstChild.textContent
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block'
    } else {
      task.style.display = 'none'
    }
  })
}

function storeShowInLocalStorage(task) {
  let shows
  if (localStorage.getItem('shows') === null) {
    shows = []
  } else {
    shows = JSON.parse(localStorage.getItem('shows'))
  }
  shows.push(task)
  localStorage.setItem('shows', JSON.stringify(shows))
}

function getShows(e) {
  let shows = storage.getShows()
  ui.addShowsToList(shows)
}
