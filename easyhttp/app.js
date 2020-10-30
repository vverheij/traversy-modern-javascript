const http = new EasyHTTP();

// const posts = 
http.get('https://jsonplaceholder.typicode.com/posts', function(response) {
  console.log(response);
})
