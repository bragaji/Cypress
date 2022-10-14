const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:58271/Account/Login?ReturnUrl=%2FPackage%2FClientSpecific%2F3062'
  }
})