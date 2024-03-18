const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://serverest.dev',
  },
  fixturesFolder: false,
  video: false,
})