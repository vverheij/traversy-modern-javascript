function EasyHTTP() {

  this.http = new XMLHttpRequest()
}

// get 
EasyHTTP.prototype.get = function(url, callback) {
  this.http.open('GET', url, true)

  this.http.onload = () => {
    if(this.http.status === 200) {
      callback(null, this.http.responseText)
    } else {
      callback('Error' + this.http.status)
    } 
  }
  this.http.send() 
}

// post
EasyHTTP.prototype.post = function(url, data, callback) {
  this.http.open('POST', url, true)
  this.http.setRequestHeader('content-type', 'application/json')
  this.http.onload =  () => {
    callback(null, this.http.responseText)
  }
  this.http.send(JSON.stringify(data))
}

// put
EasyHTTP.prototype.put = function(url, data, callback) {
  this.http.open('PUT', url, true)
  this.http.setRequestHeader('content-type', 'application/json')
  this.http.onload =  () => {
    callback(null, this.http.responseText)
  }
  this.http.send(JSON.stringify(data))
}

// delete 
EasyHTTP.prototype.delete = function(url, callback) {
  this.http.open('DELETE', url, true)

  this.http.onload = () => {
    if(this.http.status === 200) {
      callback(null, this.http.responseText)
    } else {
      callback('Error' + this.http.status)
    } 
  }
  this.http.send() 
}