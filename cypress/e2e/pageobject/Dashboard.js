/// <reference types="cypress" />
class dashboard {

    constructor() {

        this.dashboard= 'h2'
        this.loancreate= '#addLoan'

    }


    verifysuccesslogin()
    {
        cy.get(this.dashboard,).should('have.text','Dashboard');

    }

    clickloancreate()
    {
        cy.get(this.loancreate).click();
    }
}

export default dashboard 