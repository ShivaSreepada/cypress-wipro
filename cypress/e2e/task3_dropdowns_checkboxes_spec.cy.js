describe('Heroku Demo App - Dropdowns & Checkboxes', () => {
    it('Selects option from dropdown and verifies selection', () => {
      cy.visit('https://the-internet.herokuapp.com/dropdown');
  
      // Select option by visible text
      cy.get('#dropdown').select('Option 2');
  
      // Verify selected value
      cy.get('#dropdown')
        .should('have.value', '2')
        .and('contain', 'Option 2'); // Additional assertion for text content
    });
  
    it('Checks and unchecks checkbox and verifies state', () => {
      cy.visit('https://the-internet.herokuapp.com/checkboxes');
  
      // Get the first checkbox element
      cy.get('input[type="checkbox"]').first()
        .should('not.be.checked') // Verify initial state
  
        // Check the box
        .check()
        .should('be.checked') // Verify checked state
  
        // Uncheck the box
        .uncheck()
        .should('not.be.checked'); // Verify unchecked state again
    });
  });
  