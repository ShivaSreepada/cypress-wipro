it('Uploads a file and validates successful processing', () => {
    cy.visit('https://the-internet.herokuapp.com/upload'); // URL with file upload feature
  
    // Attach file to the input element
    cy.get('input[type="file"]').attachFile('sample.txt'); // Ensure 'sample.txt' is in `cypress/fixtures`
  
    // Click the upload button
    cy.get('#file-submit').click();
  
    // Validate successful processing
    cy.get('h3').should('contain.text', 'File Uploaded!');
  });
  