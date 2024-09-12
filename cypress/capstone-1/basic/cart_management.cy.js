describe('Cart Management', () => {
  it('should add items to the cart', () => {
    cy.visit('https://automationexercise.com/product_details/1');

    // Add products to the cart
    cy.get('.btn.btn-default.cart').click();
    

    // Verify cart contents 
    cy.get('a').contains('Cart').click();
    
    cy.get('.cart_delete').click();
    cy.get('.table-responsive.cart_info').should('contain', 'Cart is empty!');
  });
});