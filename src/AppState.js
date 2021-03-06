module.exports = class AppState {
  constructor() {
    this.hostname = null
    this.httpPort = 80
    this.httpsPort = 443

    this.redirectToHttps = true
  }

  getHostname () {
    return this.hostname
  }

  getHttpPort () {
    return this.httpPort
  }

  getHttpsPort () {
    return this.httpsPort
  }

  getRedirectToHttps () {
    return this.redirectToHttps
  }

  getServingLink () {
    let link = `https://${this.getHostname()}`
    if (this.getHttpsPort() !== 443) {
      link = `${link}:${this.getHttpsPort()}`
    }
    return link
  }

  getNotSecureServingLink () {
    let link = `http://localhost`
    if (this.getHttpsPort() !== 80) {
      link = `${link}:${this.getHttpPort()}`
    }
    return link
  }

  setHostname (hostname) {
    this.hostname = hostname
    return this
  }

  setHttpPort (port) {
    this.httpPort = port
    return this
  }

  setHttpsPort (port) {
    this.httpsPort = port
    return this
  }

  disableRedirectToHttps () {
    this.redirectToHttps = false
    return this
  }
}
