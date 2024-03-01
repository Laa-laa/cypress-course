/// <reference types="cypress" />
import './commands'

context('Hello World!', () => {
    beforeEach(() => {
        cy.visit('../../app/index.html');
    });

    it('p should have text Hello World!', () => {
        cy.get('p')
            .should('have.text', 'Hello World!');
    });
})

context('Test du composant de chiffrement César', () => {
    beforeEach(() => {
        cy.visit('../../caesar/index.html');
    });

    describe('Compléter le formulaire', () => {
        it('Remplit les champs du formulaire', () => {
            cy.get('#shift').type('3'); 
            cy.get('#message').type('Hello'); 
            cy.get('#encryptBtn').click(); 
            cy.get('#output').should('not.be.empty');
            cy.get('#output').should('contain', 'Khoor');
        });
    });

});

describe('Accordion Test', () => {
    beforeEach(() => {
        cy.visit('../../app/accordion.html') // Replace 'path/to/your/html/file.html' with the actual path
    })

    it('Should toggle accordion items correctly', () => {
        // First accordion item
        cy.get('[x-data="{ open: [false, false] }"] > :nth-child(1)').as('firstAccordionItem')
        cy.get('@firstAccordionItem').find('svg').should('not.have.class', 'rotate-90')
        cy.get('@firstAccordionItem').click()
        cy.get('@firstAccordionItem').find('svg').should('have.class', 'rotate-90')
        cy.get('@firstAccordionItem').next().should('be.visible')

        // Second accordion item
        cy.get('[x-data="{ open: [false, false] }"] > :nth-child(3)').as('secondAccordionItem')
        cy.get('@secondAccordionItem').find('svg').should('not.have.class', 'rotate-90')
        cy.get('@secondAccordionItem').click()
        cy.get('@secondAccordionItem').find('svg').should('have.class', 'rotate-90')
        cy.get('@secondAccordionItem').next().should('be.visible')
    })
})

describe('Lightbox tests', () => {
    beforeEach(() => {
      cy.visit('../../caesar/lightbox.html'); // Remplacez "URL_de_votre_page" par l'URL de votre page avec la lightbox
    });
  
    it('Opens the lightbox on image click', () => {
      cy.openLightbox(); // Appelle la commande pour ouvrir la lightbox
    });
  
    it('Closes the lightbox on click outside', () => {
      cy.openLightbox(); // Ouvre d'abord la lightbox
      cy.closeLightbox(); // Appelle la commande pour fermer la lightbox
    });
  
    // D'autres tests similaires à définir ici en utilisant d'autres commandes personnalisées
  });
  