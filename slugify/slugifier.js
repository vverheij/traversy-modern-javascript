class Slugifier {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
  }
  slugify(str) {
    str = this.removeBaseUrl(str)
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();
  
    // remove accents, swap ñ for n, etc
    var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to   = "aaaaeeeeiiiioooouuuunc------";
    for (var i=0, l=from.length ; i<l ; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }
  
    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes
  
    str = this.prependBaseUrl(str);
    return str;
  }
  removeBaseUrl(str) {
    if (str.startsWith(this.baseUrl)) {
      str = str.replace(this.baseUrl,'')
    }
    return str
  }
  prependBaseUrl(str) {
    if (!str.startsWith(this.baseUrl)) {
      return str = `${this.baseUrl}${str}`
    } 
    return str
  }
}