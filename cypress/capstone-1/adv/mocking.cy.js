describe('Product Search with Mocking', () => {
    beforeEach(() => {
      // Mock the API response
      cy.intercept('GET', '/products?search=blue%20top', {
        fixture: 'mock-products.json'
      }).as('searchProducts');
  
      // Visit the products page
      cy.visit('https://automationexercise.com/products', {
        timeout: 10000
      });
    });
  
    it('should search for products and display mocked results', () => {
      // Ensure the search box and button are visible
      cy.get('#search_product', { timeout: 10000 }).should('be.visible');
      cy.get('#submit_search', { timeout: 10000 }).should('be.visible');
  
      // Type a query into the search box and submit
      cy.get('#search_product').type('Blue Top');
      cy.get('#submit_search').click();
  
      // Wait for the mocked request to complete
      cy.wait('@searchProducts');
  
      // Check that product information is displayed
      cy.get('.productinfo').should('be.visible');
      cy.get('.productinfo').should('contain.text', 'Blue Top');
    });
  });
  