describe('Cart Test', () => {
    it('should add items to the cart', () => {
      cy.addToCart(1);  // Adding product with ID 1
    });
  });