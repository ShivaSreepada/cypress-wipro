describe('Product Search', () => {
    it('should search for products and display results', () => {
      cy.visit('https://automationexercise.com/products');  // Example e-commerce site
  
      // Type a query into the search box and submit
      cy.get('input[name="search"]').type('Dress');  // Adjust selector if necessary
      cy.get('button[type="button"]').click();  // Adjust selector if necessary
  
      // Verify that search results are displayed
      cy.url().should('include', 'search');  // Assuming the URL changes to include 'search'
      cy.get('.productinfo').should('be.visible');  // Adjust selector if necessary
      cy.get('.productinfo').should('contain.text', 'Dress');
    });
  });
  