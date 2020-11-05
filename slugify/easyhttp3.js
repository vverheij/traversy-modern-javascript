class EasyHTTP {
  async get(url) {
    const response = await fetch(url)
    const data = await response.json()
    return data
  }
  async post(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(data)
    })
    const result = await response.json()
    return result;
  }
  async put(url, data) {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(data)
    })
    const result = await response.json();
    return result
  }
  async delete(url) {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {'Content-type': 'application/json'}
    })
    const result = await 'Resource deleted'
    return result
  }
}

