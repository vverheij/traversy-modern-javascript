const http = new EasyHTTP()

// get posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(posts)}
// })

// get post
// http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, post) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post)}
// })

const data = {
  title: 'title new post',
  body: 'body new post',
}

// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post)}
// })

// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function (
//   err,
//   post
// ) {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(post)
//   }
// })

// delete
// http.delete('https://jsonplaceholder.typicode.com/posts/1', function (
//   err,
//   response
// ) {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(response)
//   }
// })

document.getElementById('button1').addEventListener('click', getText)

// fetch
function getText() {
  fetch('text.txt').then(function (res) {
    return res.text()
  }).then(data => {
    document.getElementById('output').innerHTML = data
  }).catch((err)=> {
    console.log(err)
  })
}

document.getElementById('button2').addEventListener('click', getJson)

function getJson() {
  fetch('posts.json').then(function (res) {
    return res.json()
  }).then(data => {
    let output = '<ol>'
    // const parsedData = JSON.parse(data) 
    data.forEach(post => {
      output += `<li>${post.title}</li>`
    });
    output += '</ol>'
    document.getElementById('output').innerHTML = output
  }).catch((err)=> {
    console.log(err)
  })
}

document.getElementById('button3').addEventListener('click', getExternal)

function handleErrors(res) {
  // console.log(res)
  if (!res.ok) {
    throw new Error(res.error);
  }
  return res;
}

function getExternal() {
  fetch('https://api.github.com/users')
  .then((res) => {
    return res.json()
  })
  // .then((res) => {
  //   console.log(res)
  //   return res})
  .then(data => {
    let output = '<ol>'
    data.forEach(user => {
      output += `<li><div>${user.login} <br><img src="${user.avatar_url}" width=100></div></li>`
    });

    output += '</ol>'
    document.getElementById('output').innerHTML = output
  }).catch((err)=> {
    document.getElementById('output').innerHTML = `<span class="error">${err}</span>`
    console.log(err)
  })
}
