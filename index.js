class Formatter {
  static capitalize(string,bannedWords=[]) {
    if (bannedWords.includes(string)) {
      return string
    } else {
      return string[0].toUpperCase() + string.slice(1)
    }
  }
  static sanitize(string) {
    let result = ''
    for (const char of string) {
      if ("qwertyuiopasdfghjklzxcvbnm-' ".includes(char.toLowerCase())) {
        result += char
      }
    }
    return result
  }
  static titleize(string) {
    string = this.capitalize(string)
    const array = string.split(' ')
    const capArray = array.map(word => {
      return this.capitalize(word,['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'])
    })
    return capArray.join(' ')
  }
}