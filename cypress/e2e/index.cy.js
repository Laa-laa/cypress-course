/// <reference types="cypress" />

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

  

// // Test pour automatiser la complétion du formulaire
// describe('Compléter le formulaire', () => {
//     it('Remplit les champs du formulaire', () => {
//       cy.visit('../../caesar/index.html'); // Assurez-vous que votre fichier HTML est accessible depuis cette URL
//       cy.get('#shift').type('3'); // Remplir le champ de décalage avec la valeur 3
//       cy.get('#message').type('Hello'); // Remplir le champ de message avec "Hello"
//     });
//   });
  

//   // Test pour automatiser la validation du formulaire
// describe('Valider le formulaire', () => {
//   it('Valide le formulaire en cliquant sur le bouton Encrypt', () => {
//     cy.get('#encryptBtn').click(); // Cliquer sur le bouton "Encrypt"
//     // Vérifier que le résultat est affiché
//     cy.get('#output').should('not.be.empty');
//   });
// });

// // Test pour vérifier l'affichage du bon résultat
// describe('Vérifier le résultat', () => {
//     it('Vérifie l\'affichage du bon résultat', () => {
//       cy.get('#output').should('contain', 'Khoor'); // Vérifier que le résultat affiché est "Khoor" pour le message "Hello" avec un décalage de 3
//     });
//   });
  