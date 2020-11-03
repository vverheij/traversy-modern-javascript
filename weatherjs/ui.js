class UI {
  constructor() {
    this.location = document.getElementById('w-location')
    this.desc = document.getElementById('w-desc')
    this.string = document.getElementById('w-string')
    this.details = document.getElementById('w-details')
    this.icon = document.getElementById('w-icon')
    this.humidity = document.getElementById('w-humidity')
    this.feelslike = document.getElementById('w-feels-like')
    this.dewpoint = document.getElementById('w-dewpoint')
    this.wind = document.getElementById('w-wind')
  }
  paint(weather) {
    this.location.textContent = weather.city
    this.desc.textContent = weather.description
    this.string.textContent = weather.wind.speed
    // this.details.textContent = weather.id
    // this.icon.setAttribute('src', weather.icon)
    this.icon.textContent = 'icon' //weather.icon
    this.humidity.textContent = `Relative Humidity ${weather.humidity}`
    this.feelslike.textContent = `Feels like ${weather.feels_like}`
    this.dewpoint.textContent = `id ${weather.id}`
    this.wind.textContent = `Wind ${weather.wind.speed}`
  }
}
