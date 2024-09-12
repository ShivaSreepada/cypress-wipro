// cypress/integration/valid_login.cy.js

describe('Valid Login', () => {
  it('should handle valid login attempts and show products', () => {
    cy.login('shiva1302@anymail.com', 'Shiva1302');

    // Verify successful login by checking the visibility of the product list
    cy.get('.features_items', { timeout: 10000 }).should('be.visible');
  });
});
