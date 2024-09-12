describe('User Registration', () => {
    it('should handle valid and invalid registration inputs', () => {

          // Test with invalid inputs
          cy.visit('https://automationexercise.com/login');

          cy.get('.signup-form [data-qa="signup-name"]').type('Shiva');
          cy.get('.signup-form [data-qa="signup-email"]').clear().type('shiva1302@anymail.com');
          // Submit the registration form
          cy.get('.signup-form [data-qa="signup-button"]').click();
    
          cy.get('.signup-form').should('contain','Email Address already exist!');

      cy.visit('https://automationexercise.com/login'); 
  
      // Fill in registration form fields
      cy.get('.signup-form [data-qa="signup-name"]').type('Shiva');
      cy.get('.signup-form [data-qa="signup-email"]').type('shiva1306@anymail.com');
  
      // Submit the registration form
      cy.get('.signup-form [data-qa="signup-button"]').click();

      cy.get('.login-form [data-qa="password"]').type('Shiva1302');
      cy.get('.login-form [data-qa="first_name"]').type('Shiva');
      cy.get('.login-form [data-qa="last_name"]').type('S');
      cy.get('.login-form [data-qa="address"]').type('Hyderabad');
      cy.get('.login-form [data-qa="state"]').type('Telangana');
      cy.get('.login-form [data-qa="city"]').type('Hyderabad');
      cy.get('.login-form [data-qa="zipcode"]').type('500001');
      cy.get('.login-form [data-qa="mobile_number"]').type('9876543210');
      cy.get('.login-form [data-qa="create-account"]').click();
  
      // Verify successful registration message
      cy.get('.col-sm-9.col-sm-offset-1 [data-qa="account-created"]').should('contain', 'Account Created!'); // Adjust selector if needed
  
    });
  });
