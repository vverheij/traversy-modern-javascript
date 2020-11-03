const weather = new Weather('Amsterdam', 'uk')
const ui = new UI()
function test() {
  for (let x = 0; x <= 360; x += .5) {
    console.log(x, ui.windDirectionFromDegrees(x))
  }
}

// test()

document.addEventListener('DOMContentLoaded', getWeather)
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value
  const state = document.getElementById('state').value
  weather.changeLocation(city, state)
  getWeather()
  // close modal jquery because modal is bootstrap
  $('#locModal').modal('hide')
})

function getWeather() {
  weather
    .getWeather()
    .then((data) => ui.paint(data))
    .catch((err) => console.log(err))
}



