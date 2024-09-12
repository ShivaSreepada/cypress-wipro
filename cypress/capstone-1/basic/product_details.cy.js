describe('Product Details', () => {
    it('should display accurate product information', () => {
      cy.visit('https://automationexercise.com/product_details/1'); // Replace 1 with the actual product ID
      cy.get('.product-information').should('contain', 'Blue Top'); // Replace with expected product name
      cy.get('.product-information').should('contain', 'Rs. 500'); // Replace with expected price
      // Add more assertions for other product details (e.g., description, image)
    });
  
    it('should add product to cart', () => {
      cy.visit('https://automationexercise.com/product_details/1');
      cy.get('.btn.btn-default.cart').click();
      cy.get('a').contains('Cart').click();
      
      cy.get('.cart_description').should('contain', 'Blue Top'); // Verify cart quantity
    });
  });