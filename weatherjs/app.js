const weather = new Weather('Amsterdam', 'uk')
const ui = new UI()

document.addEventListener('DOMContentLoaded', getWeather)

function getWeather() {
  weather
    .getWeather()
    .then((data) => ui.paint(data))
    .catch((err) => console.log(err))
}
