
document.getElementById('button').addEventListener('click', loadData)

function loadData() {

  const xhr = new XMLHttpRequest()
  // console.log('readyState: ',xhr.readyState);
  // now, new simpler way without readystate check
  xhr.open('GET', 'data.txt', true)

  // console.log('readyState: ',xhr.readyState);
  
  // optional (for spinners of loaders)
  xhr.onprogress = function() {
    // console.log('readyState: ',xhr.readyState);
  }

  xhr.onload = function() {
    // console.log('readyState: ',xhr.readyState);
    if (this.status === 200){

      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`
    }
  }

  // older way
  // xhr.onreadystatechange = function() {
  //   console.log('readyState: ',xhr.readyState);
  //   if(this.status === 200) {
  //     if(this.readyState === 4) {
  //       console.log(this.responseText)
  //     }
  //   }
  // }

  xhr.onerror = function() {
    console.log('Request error')
  }
  xhr.send()
}

// readystate values
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response ready

// http statusses
// 200 ok
// 403 forbidden
// 404 not found