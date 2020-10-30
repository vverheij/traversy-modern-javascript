const http = new EasyHTTP()

document.getElementById('button1').addEventListener('click', getPosts)
function getPosts() {
  http
    .get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
      // console.log(response)
      let output = '<ol>'
      // const parsedData = JSON.parse(data)
      response.forEach((post) => {
        output += `<li>${post.title}</li>`
      })
      output += '</ol>'
      document.getElementById('output').innerHTML = output
    })
    .catch((err) => console.log(err))
}

// document.getElementById('button1').addEventListener('click', getText)

// // fetch
// function getText() {
//   http.get('text.txt').then(function (res) {
//     return res.text()
//   }).then(data => {
//     document.getElementById('output').innerHTML = data
//   }).catch((err)=> {
//     console.log(err)
//   })
// }

// document.getElementById('button2').addEventListener('click', getJson)

// function getJson() {
//   fetch('posts.json').then(function (res) {
//     return res.json()
//   }).then(data => {
//     let output = '<ol>'
//     // const parsedData = JSON.parse(data)
//     data.forEach(post => {
//       output += `<li>${post.title}</li>`
//     });
//     output += '</ol>'
//     document.getElementById('output').innerHTML = output
//   }).catch((err)=> {
//     console.log(err)
//   })
// }

// document.getElementById('button3').addEventListener('click', getExternal)

// function handleErrors(res) {
//   // console.log(res)
//   if (!res.ok) {
//     throw new Error(res.error);
//   }
//   return res;
// }

// function getExternal() {
//   fetch('https://api.github.com/users')
//   .then((res) => {
//     return res.json()
//   })
//   // .then((res) => {
//   //   console.log(res)
//   //   return res})
//   .then(data => {
//     let output = '<ol>'
//     data.forEach(user => {
//       output += `<li><div>${user.login} <br><img src="${user.avatar_url}" width=100></div></li>`
//     });

//     output += '</ol>'
//     document.getElementById('output').innerHTML = output
//   }).catch((err)=> {
//     document.getElementById('output').innerHTML = `<span class="error">${err}</span>`
//     console.log(err)
//   })
// }
