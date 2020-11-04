class Storage {
  constructor() {
    this.city
    this.state
    this.country
    this.defaultCity = 'Moordrecht'
    this.defaultState = 'Zuid Holland'
    this.defaultCountry= 'Nederland'
  }
  getLocationData() {
    this.city = (localStorage.getItem('city') === null) ? this.defaultCity : localStorage.getItem('city') 
    this.state = (localStorage.getItem('state') === null) ? this.defaultState : localStorage.getItem('state') 
    this.country = (localStorage.getItem('country') === null) ? this.defaultCountry : localStorage.getItem('country') 
    console.log({city: this.city, state: this.state, country: this.country })
    return {city: this.city, state: this.state, country: this.country }
  }
  setLocationData(city, state, country) {
    localStorage.setItem('city', city)
    localStorage.setItem('state', state)
    localStorage.setItem('country', country)
  }

}