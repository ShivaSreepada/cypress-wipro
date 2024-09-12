describe('Simple Test', () => {
    it('should load the homepage and verify the title', () => {
      cy.visit('https://automationexercise.com');  // Example e-commerce site
      cy.title().should('include', 'Automation Exercise');
    });
  });
  