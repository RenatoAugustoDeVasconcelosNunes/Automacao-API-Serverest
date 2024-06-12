const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://serverest.dev',
    env:{
      hideCredentials: true, //O Access Token fica hide com vários *
    },
    experimentalRunAllSpecs: true, //Habilita a funcionalidade de execução de todos os testes de uma vez, de modo interativo.
  },
  fixturesFolder: false,
  video: false,
})
