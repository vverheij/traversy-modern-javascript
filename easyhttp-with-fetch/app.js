const http = new EasyHTTP()

document.getElementById('button1').addEventListener('click', getJokes)
function getJokes(e) {
  const number = document.getElementById('number').value.toString() || '1'
  http
    .get(`https://api.icndb.com/jokes/random/${number}`)
    .then((response) => {
      let output = '<ol>'
      response.value.forEach((element) => {
        output += `<li>${element.joke}</li>`
      })
      output += '</ol>'
      document.getElementById('output1').innerHTML = output
    })
    .catch((err) => console.log(err))
  e.preventDefault()
}

document.getElementById('button2').addEventListener('click', postUser)

function postUser(e) {
  const data = {
    id: document.getElementById('id').value,
    name: document.getElementById('name').value,
    username: document.getElementById('username').value,
    email: document.getElementById('email').value,
  }
  http
    .post('https://jsonplaceholder.typicode.com/users', data)
    .then((result) => {
      let output = '<strong>Posted User</strong><ol>'
      for (const [key, value] of Object.entries(result)) {
        output += `<li>${key}: ${value}</li>`
      }
      output += '</ol>'
      document.getElementById('output2').innerHTML = output
    })
    .catch((err) => console.log)
  e.preventDefault()
}

document.getElementById('button3').addEventListener('click', updateUser)

function updateUser(e) {
  const data = {
    id: document.getElementById('id').value,
    name: document.getElementById('name').value,
    username: document.getElementById('username').value,
    email: document.getElementById('email').value,
  }

  http
    .put(`https://jsonplaceholder.typicode.com/users/${data.id}`, data)
    .then((result) => {
      let output = '<strong>Updated User</strong><ol>'
      for (const [key, value] of Object.entries(result)) {
        output += `<li>${key}: ${value}</li>`
      }
      output += '</ol>'
      document.getElementById('output3').innerHTML = output
    })
    .catch((err) => console.log)
  e.preventDefault()
}

document.getElementById('button4').addEventListener('click', deleteUser)

function deleteUser(e) {
  const id = document.getElementById('deleteId').value;
  const output = document.getElementById('output4');
  http
  .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
  .then(result => output.innerText = result)
  .catch(err => console.log(err))
  e.preventDefault()
}