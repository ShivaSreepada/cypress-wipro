// cypress/support/commands.js




// Login command
Cypress.Commands.add('login', (email, password) => {
    cy.visit('https://automationexercise.com/login');
    cy.get('.login-form [data-qa="login-email"]').clear().type(email);
    cy.get('.login-form [data-qa="login-password"]').clear().type(password);
    cy.get('.login-form [data-qa="login-button"]').click();
  });
  
  // Add to cart command
  Cypress.Commands.add('addToCart', (productID) => {
    cy.visit(`https://automationexercise.com/product_details/${productID}`);
    cy.get('.btn.btn-default.cart').click();
  });
  



// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//import 'cypress-file-upload';

//import 'cypress-downloadfile/src/downloadFileCommand';

