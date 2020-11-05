const slugifier = new Slugifier('https://filmfestival.nl/show/')
const ui = new UI()
const storage = new Storage()

const form = document.querySelector('#show-form')
const showList = document.querySelector('.collection')
const clearBtn = document.querySelector(".clear-shows");
const filter = document.querySelector("#filter");
const showInput = document.querySelector('#show')

loadEventListeners()

function loadEventListeners() {
  form.addEventListener('submit', addShow)
  showList.addEventListener('click', removeShow)
  clearBtn.addEventListener("click", clearShows);
  filter.addEventListener("keyup", filterShows);
  document.addEventListener('DOMContentLoaded', getShows)
}

function addShow(e) {
  if (showInput.value === "") {
    alert('Please enter show url')
    e.preventDefault()
    return
  } 
  const show = slugifier.slugify(showInput.value)
  ui.addShow(show)
  storage.storeShowInLocalStorage(show);
  e.preventDefault()
}

function removeShow(e) {
  ui.removeShow(e)
  if (e.target.parentElement.classList.contains('delete-item')) {
    storage.removeShowFromLocalStorage(e.target.parentElement.parentElement)
  }
}

function clearShows(e) {
  ui.clearShows()
  storage.clearShowsFromLocalStorage()
}

function filterShows(e) {
  ui.filterShows(e)
}

function getShows(e) {
  let shows = storage.getShows()
  ui.addShowsToList(shows)
  e.preventDefault();
}
