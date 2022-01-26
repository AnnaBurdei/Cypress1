/// <reference types="cypress" />
describe('User should be able', () => {
    it('Sign in with valid credentials', () => {
      cy.visit('https://react-redux.realworld.io/#/login?_k=ec21gk');
      cy.get(':nth-child(1) > .form-control').type('qanov@team.com');
      cy.get(':nth-child(2) > .form-control').type('1234Qwer');
      cy.get('.btn').click();
      cy.get(':nth-child(4) > .nav-link').contains('qanov').should('exist');

    })
  })

