/// <reference types="cypress" />
class loancreate {

    constructor() {

        this.client = '#client'
        this.lender =  '#lender'
        this.product = '#product'
        this.headerloanctrate = 'h2'
        this.loantype= '#loanType'
        this.loannumber= '#loanNumber > .form-control'
        this.loanamount= '.input-group > .form-control'
        this.supportlevel= '#supportLevel'
        this.proprtystate= '#propertyState'
        this.submit= '#submit'

    }

    verifyloanpage()
    {
        cy.get(this.headerloanctrate).should('have.text','Loan Create')
    }

    

    addloandata()
    {
        cy.get(this.client).select('LoanDocSolutions');
        cy.get(this.lender).select('LoanDocSolutions')
        cy.get(this.product).select('CommercialDocs')
        cy.get(this.loantype,{timeout:15000}).select('Construction Loan') 
        cy.get(this.loannumber).type('123123')
        cy.get(this.loanamount).type('9999')
        cy.get(this.supportlevel).select('Standard')
        cy.get(this.proprtystate).select('California')
        cy.get(this.submit).click()
        cy.wait(10000)
        cy.get(this.supportlevel).select('Standard')
        cy.get(this.proprtystate).select('California')
        cy.get(this.submit).click()
        cy.wait(10000)
        

    }
}

export default loancreate 