class Storage {
  constructor() {
    this.shows = []
  }
  getShows() {
    this.shows = (localStorage.getItem('shows') === null) ? this.shows : localStorage.getItem('shows') 
    return JSON.parse(this.shows);
  }
  setShows(shows) {
    localStorage.setItem('shows', shows)
  }
  removeShowFromLocalStorage(showItem) {
    let shows;
    if (localStorage.getItem('shows') === null) {
      shows = [];
    } else {
      shows = JSON.parse(localStorage.getItem('shows'));
    }
  
    shows.forEach(function(show, index) {
      if(showItem.textContent === show) {
        shows.splice(index, 1)
      }
    })
  
    localStorage.setItem('shows', JSON.stringify(shows))
  }
}