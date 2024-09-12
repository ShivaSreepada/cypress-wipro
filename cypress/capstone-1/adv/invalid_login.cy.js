// cypress/integration/invalid_login.cy.js

describe('Invalid Login', () => {
    it('should handle invalid login attempts and show an error message', () => {
      cy.login('invalidemail@anymail.com', 'wrongpassword');
  
      // Check for an error message or indication of login failure
      cy.get('.login-form').should('contain', 'Your email or password is incorrect!');  // Adjust the error message if necessary
    });
  });
  