describe('Login Tests Using Fixtures', () => {
    beforeEach(() => {
      // Load the fixture data
      cy.fixture('userData').as('userData');
    });
  
    it('should handle valid login attempts using fixture data', function() {
      const { email, password } = this.userData.validUser;
      cy.login(email, password);
  
      // Verify successful login
      cy.get('.features_items', { timeout: 10000 }).should('be.visible');
    });
  
    it('should handle invalid login attempts using fixture data', function() {
      const { email, password } = this.userData.invalidUser;
      cy.login(email, password);
  
      // Verify error message is displayed
      cy.get('.login-form').should('contain', 'Your email or password is incorrect!'); 
    });
  });
  