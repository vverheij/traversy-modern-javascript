function EasyHTTP() {

  this.http = new XMLHttpRequest()
}

// get 
EasyHTTP.prototype.get = function(url, callback) {
  this.http.open('GET', url, true)

  this.http.onload = () => {
    if(this.http.status === 200) {
      // console.log(this.http.responseText)
      // return this.http.responseText
      callback(this.http.responseText)
    }
  }

  this.http.send()
}

// post

// put

// delete 
