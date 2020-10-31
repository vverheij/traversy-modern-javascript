class Github {
  constructor() {
    this.client_id = 'ba3f081292ce18bcdac1'
    this.client_secret = 'b0099a2d2fb6472fba1e249dc89dc8c64db89528'
    this.identifiers = `client_id=${this.client_id}&client_secret=${this.client_secret}`
  }
  
  async getUser(userName) {
    const profileResponse = await fetch(`https://api.github.com/users/${userName}?${this.identifiers}`)
    // if (profileResponse.status === 200 ) {
      const profile= await profileResponse.json()
      return {
        profile
      }
    // }
    
  }

}