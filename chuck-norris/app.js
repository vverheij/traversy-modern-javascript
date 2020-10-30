document.querySelector('.get-jokes').addEventListener('click', getJokes)

function getJokes(e) {
  const number = document.querySelector('input[type=number]').value
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `https://api.icndb.com/jokes/random/${number}`, true)

  xhr.onload = function() {
    if (xhr.status === 200) {
      const response = JSON.parse(xhr.responseText)
      
      let output = ''
      if (response.type === 'success') {

        response.value.forEach(element => {
          output += 
          `<li>${element.joke}</li>`
        });
      } else {
        output += 
        `<li>There was een error</li>`
      }

      document.querySelector('.jokes').innerHTML = output
    }
  }
  xhr.send();
  e.preventDefault()
}