const posts = [
    {title: 'Post one', boyd: 'this is post one'},
    {title: 'Post two', boyd: 'this is post two'}
]

//------------- synchronous ----------------
// function createPost(post) {
//     setTimeout(function() {
//         posts.push(post)
//     }, 2000);
// }

// function getPosts(){
//     setTimeout(function() {
//         let output = ''
//         posts.forEach(function(post) {
//             output += `<li>${post.title}</li>`
//         });
//         document.body.innerHTML = output
//     }, 1000)
// }

// createPost({title: 'Post three',  body: 'this is post three'})

// getPosts()


//------------- asynchronous ----------------
// function createPost(post, callback) {
//     setTimeout(function() {
//         posts.push(post)
//         callback()
//     }, 2000);
// }

// function getPosts(){
//     setTimeout(function() {
//         let output = ''
//         posts.forEach(function(post) {
//             output += `<li>${post.title}</li>`
//         });
//         document.body.innerHTML = output
//     }, 1000)
// }

// createPost({title: 'Post three',  body: 'this is post three'}, getPosts)


//------------- promises ----------------
function createPost(post) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            posts.push(post)
            const error = false;
            if (!error) {
                resolve('Post was created') // now 
            } else {
                reject('Something went wrong')
            }
        }, 2000);
    })
}

function getPosts(){
    setTimeout(function() {
        let output = ''
        posts.forEach(function(post) {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output
    }, 1000)
}

createPost({title: 'Post three',  body: 'this is post three'}).then((data) => {
    console.log(data)
    getPosts()
}
).catch(function(error) {
    console.log(error)
})