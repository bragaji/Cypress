  /// <reference types="cypress" />
  it('Google Search', ()=> {

    cy.visit("https://www.google.com")
    cy.get('#APjFqb').type('Prashant gautam{enter}')
    cy.wait(2000)
    //cy.get('.FPdoLc > center > .gNO89b').click()

  })