describe('Handling Web Elements on Example.com', () => {
    beforeEach(() => {
      // Visit the example.com page
      cy.visit('http://example.com');
    });
  
    it('Validate the presence of the main heading', () => {
      // Validate that the main heading <h1> exists and contains the correct text
      cy.get('h1').should('exist').and('contain', 'Example Domain');
    });
  
    it('Validate the presence of the paragraph', () => {
      // Validate that the paragraph <p> exists and contains the correct text
      cy.get('p').should('exist').and('contain', 'This domain is for use in illustrative examples in documents.');
    });
  
    it('Validate the presence of the link', () => {
      // Validate that the link <a> exists and contains the correct text
      cy.get('a').should('exist').and('contain', 'More information...');
    });
  
 
  });
  