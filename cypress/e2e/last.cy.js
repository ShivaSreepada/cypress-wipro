const { defineConfig } = require('cypress');
const { mount } = require('cypress/react');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
    downloadsFolder: 'cypress/downloads',
  },
  component: {
    setupNodeEvents(on, config) {
      // Implement node event listeners for component testing here
      on('file:preprocessor', require('@cypress/webpack-preprocessor'));
    },
    devServer: {
      framework: 'react',
      bundler: 'webpack',
    },
  },
});
