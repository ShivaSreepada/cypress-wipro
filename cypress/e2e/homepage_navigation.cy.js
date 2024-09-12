describe('Homepage Navigation', () => {
    it('should load the homepage and display product categories', () => {
        cy.visit('https://automationexercise.com');  // Example e-commerce site
        cy.get('.features_items').should('be.visible');
    });
});
