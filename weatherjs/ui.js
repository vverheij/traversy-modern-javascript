class UI {
  constructor() {
    this.location = document.getElementById('w-location')
    this.desc = document.getElementById('w-desc')
    this.temp = document.getElementById('w-temp')
    this.details = document.getElementById('w-details')
    this.icon = document.getElementById('w-icon')
    this.humidity = document.getElementById('w-humidity')
    this.feelslike = document.getElementById('w-feels-like')
    this.minmax_temp = document.getElementById('w-minmax_temp')
    this.wind = document.getElementById('w-wind')
  }
  paint(weather) {
    this.location.textContent = weather.city
    this.desc.textContent = weather.desc
    this.temp.textContent = `${weather.temp}° C`
    // this.details.textContent = weather.id
    this.icon.setAttribute(
      'src',
      `http://openweathermap.org/img/w/${weather.icon}.png`
    )
    // this.icon.textContent = 'icon' //weather.icon
    this.humidity.textContent = `Luchtvochtigheid ${weather.humidity}`
    this.feelslike.textContent = `Gevoelstemperatuur ${weather.feels_like}° C`
    this.minmax_temp.textContent = `Min/Max temperatuur ${weather.temp_min}°/${weather.temp_max}°`
    this.wind.textContent = `Windsnelheid ${weather.wind.speed} 
      uit ${this.windDirectionFromDegrees(weather.wind.deg)}/${
      weather.wind.deg
    }°`
  }
  windDirectionFromDegrees(degrees) {
    // Define array of directions
    const directions = [
      'N', // 0
      'NNO', // 22.5
      'NO', // 45
      'ONO', // 67.5
      'O', // 90
      'OZO', // 112.5
      'ZO', // 135
      'ZZO', // 157.5
      'Z', // 180
      'ZZW', // 202.5
      'ZW', // 225
      'ZZW', // 247.5
      'W', // 270
      'WNW', // 292.5
      'NW', // 315
      'NNW', // 337
    ]

    // Split into the 8 directions
    degrees = (degrees * 16) / 360

    // round to nearest integer.
    degrees = Math.round(degrees, 0)

    // Ensure it's within 0-7
    degrees = (degrees + 16) % 16

    return directions[degrees]
  }
}
