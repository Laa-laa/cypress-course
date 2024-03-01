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
Cypress.Commands.add('dataCy', (value) => {
    cy.get(`[data-cy=${value}]`);
   });
   
Cypress.Commands.add('openLightbox', () => {
    cy.get('.relative').click(); // Sélectionne l'élément de l'image et clique dessus
    cy.get('.fixed').should('be.visible'); // Vérifie que la lightbox est ouverte
    });
    
Cypress.Commands.add('closeLightbox', () => {
    cy.get('.fixed').click('topLeft'); // Clique en dehors de la lightbox
    cy.get('.fixed').should('not.be.visible'); // Vérifie que la lightbox est fermée
  });
  