describe('Checkout Process', () => {
    it('should complete the checkout process successfully', () => {
        cy.visit('https://automationexercise.com/login');

        // login
      cy.get('.login-form [data-qa="login-email"]').clear().type('shiva1302@anymail.com');
      cy.get('.login-form [data-qa="login-password"]').clear().type('Shiva1302');
      cy.get('.login-form [data-qa="login-button"]').click();

      // Navigate to cart
      cy.get('.shop-menu.pull-right').contains('Cart').click();

      // Proceed to checkout
      cy.get('a').contains('Proceed To Checkout').click();

      // place order
      cy.get('a').contains('Place Order').click();

      // card details
      cy.get('.payment-information [data-qa="name-on-card"]').type('Shiva');
      cy.get('.payment-information [data-qa="card-number"]').type('9652 4125 8547 2365');
      cy.get('.payment-information [data-qa="cvc"]').type('852');
      cy.get('.payment-information [data-qa="expiry-month"]').type('12');
      cy.get('.payment-information [data-qa="expiry-year"]').type('1985');
      cy.get('.payment-information [data-qa="pay-button"]').click();

      cy.get('.col-sm-9.col-sm-offset-1 [data-qa="order-placed"]').should('contain', 'Order Placed!'); // Adjust selector if needed



    });
  });