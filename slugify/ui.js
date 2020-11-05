class UI {
  constructor() {
    this.form = document.querySelector("#show-form");
    this.showList = document.querySelector(".collection");
    this.showInput = document.querySelector("#show");
    this.showList = document.querySelector(".collection");
    // this.storage = new Storage();
    // this.clearBtn = document.querySelector(".clear-tasks");
    // const filter = document.querySelector("#filter");
    // const taskInput = document.querySelector("#task");
    // const modal = document.querySelectorAll('.modal');
  }
  addShowsToList(shows) {
    shows.slice().reverse().forEach((show) => { 
      const li = this.createShowListItem(show)
      this.showList.appendChild(li);
    })
  }
  addShow(show){
    const li = this.createShowListItem(show)
    this.showList.insertBefore(li, this.showList.childNodes[0]);
    this.showInput.value = "";
  }
  clearShows(){
    while (this.showList.firstChild) {
      this.showList.removeChild(this.showList.firstChild)
    }
  }
  createShowListItem(show) {
    const li = document.createElement("li");
    li.className = "collection-item";

    const url = document.createElement('a')
    url.setAttribute('href', show)
    url.setAttribute('target', '_blank')
    url.classList = 'blnk'
    url.style.color = 'black'
    url.style.textTransform = 'none'
    url.appendChild(document.createTextNode(show))      

    li.appendChild(url)

    const btn = document.createElement("a");

    btn.className = "delete-item secondary-content";
    btn.innerHTML = '<i class="fa fa-remove"></i>';

    li.appendChild(btn);
    return li;
  }
  removeShow(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
      e.target.parentElement.parentElement.remove()
      // remove form local storage
      // this.storage.removeShowFromLocalStorage(e.target.parentElement.parentElement)
    }
  }
  filterShows(e) {
    const text = e.target.value.toLowerCase()
    document.querySelectorAll('.collection-item').forEach(function (item) {
      const content = item.firstChild.textContent
      if (content.toLowerCase().indexOf(text) != -1) {
        item.style.display = 'block'
      } else {
        item.style.display = 'none'
      }
    })
  }
}
