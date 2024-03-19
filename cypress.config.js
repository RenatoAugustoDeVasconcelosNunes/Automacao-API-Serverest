const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://serverest.dev',
    env:{
      hideCredentials: true, //O Access Token fica hide com vários *
    },
  },
  fixturesFolder: false,
  video: false,
})
