const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    video: false,
    screenshotOnRunFailure: true,
    chromeWebSecurity: false,
    modifyObstructiveCode: false,
    experimentalModifyObstructiveThirdPartyCode: true
  },
});
