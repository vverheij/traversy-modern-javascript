class UI {
  constructor() {
    this.form = document.querySelector("#show-form");
    this.showList = document.querySelector(".collection");
    this.showInput = document.querySelector("#show");
    // const taskList = document.querySelector(".collection");
    // const clearBtn = document.querySelector(".clear-tasks");
    // const filter = document.querySelector("#filter");
    // const taskInput = document.querySelector("#task");
    // const modal = document.querySelectorAll('.modal');
  }
  paint(weather) {
  }
  addShowsToList(shows) {
    shows.forEach(function (show) {
   
      const li = document.createElement("li");
      li.className = "collection-item";
  
      const url = document.createElement('a')
      url.setAttribute('href', show)
      url.setAttribute('target', '_blank')
      url.classList = 'blnk'
      url.appendChild(document.createTextNode(show))      

      li.appendChild(url)
  
      // create new link element
      const link = document.createElement("a");
  
      link.className = "delete-item secondary-content";
  
      // add icon html
      link.innerHTML = '<i class="fa fa-remove"></i>';
  
      li.appendChild(link);
  
      showList.appendChild(li);
  })
  }
  addShow(show){
    if (this.showInput.value === "") {
      // e.preventDefault();
      alert('Please enter show url')
    } 
    
    const li = document.createElement("li");
    li.className = "collection-item";
    li.appendChild(document.createTextNode(show));
  
    const link = document.createElement("a");
    link.className = "delete-item secondary-content";
    link.innerHTML = '<i class="fa fa-remove"></i>'
    li.appendChild(link);
  
    this.showList.appendChild(li);
    storeShowInLocalStorage(show);

    this.showInput.value = "";
  }
}
