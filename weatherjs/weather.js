class Weather {
  constructor(city) {
    this.apiKey = '60ebfee94b3a1356837a1cb0051ddba1'
    this.city = city
    this.state = state
  }
  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=metric&lang=nl`, 
      {
        headers: {
          'Accept': 'application/json',
        }
      })
      const data = await response.json()
      const weatherData = {
        ...data.main,
        city: data.name,
        country: data.sys.country,
        desc: data.weather[0].description,
        icon: data.weather[0].icon,
        wind: data.wind,
        coord: data.coord,
        id: data.sys.id
      }
      return weatherData
  }
  changeLocation(city) {
    this.city = city
  }
}