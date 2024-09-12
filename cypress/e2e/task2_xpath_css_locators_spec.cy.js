describe('Using XPath and CSS Locators on Example.com', () => {
    beforeEach(() => {
      cy.visit('http://example.com');
    });

    // Test using CSS selectors
    it('Validate the presence of the main heading using CSS selector', () => {
      cy.get('h1').should('exist').and('contain', 'Example Domain');
    });

    it('Validate the presence of the paragraph using CSS selector', () => {
      cy.get('p').should('exist').and('contain', 'This domain is for use in illustrative examples in documents.');
    });

    it('Validate the presence of the link using CSS selector', () => {
      cy.get('a').should('exist').and('contain', 'More information...');
    });

    // Test using XPath selectors
    it('Validate the presence of the main heading using XPath selector', () => {
      cy.xpath('//h1').should('exist').and('contain', 'Example Domain');
    });

    it('Validate the presence of the paragraph using XPath selector', () => {
      cy.xpath('//p').should('exist').and('contain', 'This domain is for use in illustrative examples in documents.');
    });

    it('Validate the presence of the link using XPath selector', () => {
      cy.xpath('//a').should('exist').and('contain', 'More information...');
    });

    // Test using a combination of CSS and XPath selectors
    it('Validate the main heading using CSS selector and XPath', () => {
      cy.get('h1').should('exist');
      cy.xpath('//h1').should('contain', 'Example Domain');
    });

    it('Validate the paragraph using CSS selector and XPath', () => {
      cy.get('p').should('exist');
      cy.xpath('//p').should('contain', 'This domain is for use in illustrative examples in documents.');
    });

    it('Validate the link using CSS selector and XPath', () => {
      cy.get('a').should('exist');
      cy.xpath('//a').should('contain', 'More information...');
    });
});
