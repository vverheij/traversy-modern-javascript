class Github {
  constructor() {
    this.client_id = 'ba3f081292ce18bcdac1'
    this.client_secret = 'b0099a2d2fb6472fba1e249dc89dc8c64db89528'
    this.token = 'ab7651086a29809a0aed7b990edcfa0b487152eb'
    this.repos_count = 200
    this.repos_sort = 'created: asc'
  }

  async getUser(userName) {
    // const url =  `https://api.github.com/users/${userName}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    // const baseUrl = `https://api.github.com/users/`
    
    const profileResponse = await fetch(
    `https://api.github.com/users/${userName}` 
    , {
      headers: {
        'User-Agent': 'mygithubsearch',
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': `token ${this.token}` 
      }
    })
    const profile = await profileResponse.json()

    const reposResponse = await fetch(
    `https://api.github.com/users/${userName}/repos?per_page=${this.repos_count}&${this.repos_sort}`
    , {
      headers: {
        'User-Agent': 'mygithubsearch',
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': `token ${this.token}` 
      }
    })
    const repos = await reposResponse.json()
    return {
      profile,
      repos
    }
  }
}
