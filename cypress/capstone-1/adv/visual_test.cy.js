// cypress/integration/visual_test.cy.js

describe('Visual Testing with Percy', () => {
    it('should capture a visual snapshot of the homepage after full load', () => {
      cy.visit('https://automationexercise.com');
      
      // Wait for a key element to ensure the page has fully loaded
      cy.get('.features_items', { timeout: 10000 }).should('be.visible');
      
      // Add a slight delay if needed to ensure everything is rendered
      cy.wait(2000); // Wait for 2 seconds
  
      // Capture the snapshot after ensuring the page is ready
      cy.percySnapshot('Homepage');
    });
  });
  