class Storage {
  constructor() {
    this.shows = []
  }
  getShows() {
    // this.shows = (localStorage.getItem('shows') === null) ? this.shows : JSON.parse(localStorage.getItem('shows')) 
    if (localStorage.getItem('shows') === null) {
      return this.shows
    } else {
      return JSON.parse(localStorage.getItem('shows'));
    }
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
  clearShowsFromLocalStorage() {
    localStorage.clear()
  }
  storeShowInLocalStorage(show) {
    let shows
    if (localStorage.getItem('shows') === null) {
      shows = []
    } else {
      shows = JSON.parse(localStorage.getItem('shows'))
    }
    shows.unshift(show)
    localStorage.setItem('shows', JSON.stringify(shows))
  }
}