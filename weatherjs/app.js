const ui = new UI()
const storage = new Storage()

const weatherLocation = storage.getLocationData()
const weather = new Weather(
  weatherLocation.city,
  weatherLocation.state,
  weatherLocation.country
)
// console.log(weather)

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
  const country = null
  weather.changeLocation(city, state, country)
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

function string_to_slug (str) {
  str = str.replace(/^\s+|\s+$/g, ''); // trim
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
  var to   = "aaaaeeeeiiiioooouuuunc------";
  for (var i=0, l=from.length ; i<l ; i++) {
      str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
      .replace(/\s+/g, '-') // collapse whitespace and replace by -
      .replace(/-+/g, '-'); // collapse dashes

  return str;
}

const urlStr = 'www.filmfestival.nl/show/'

console.log(`${urlStr}${string_to_slug('NFF Conferentie: Algorithmic Aesthetics (terugkijken)')}`)
console.log(`${urlStr}${string_to_slug('NFF Conferentie: The Art of Making Film (terugkijken)')}`)
console.log(`${urlStr}${string_to_slug('NFF Conferentie: de Futurotheek (terugkijken)')}`)
console.log(`${urlStr}${string_to_slug('NFF Conferentie: Generous Interfaces (terugkijken)')}`)
console.log(`${urlStr}${string_to_slug('NFF Conferentie: The Parametric Truth (terugkijken)')}`)
console.log(`${urlStr}${string_to_slug('NFF Conferentie: Touch Me (terugkijken)')}`)
