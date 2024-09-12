describe('Homepage Navigation', () => {
    it('should load the homepage and display product categories', () => {
      cy.visit('https://automationexercise.com');
  
      // Verify that the homepage loads correctly
      cy.url().should('include', 'automationexercise.com');
      cy.title().should('include', 'Automation Exercise');
  
      // Check that product categories are displayed
      cy.get('.features_items').should('be.visible');
    });
  });
  