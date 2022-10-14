/// <reference types="cypress" />
class loginpage {

    constructor() {

        this.email =  '#email' 
        this.password= '#password'
        this.next= 'span'
        this.signin= 'span'
        
    }


    verifylogin()
    {
        
        cy.get(this.email,{ timeout:20000}).focused().type('vinay.patil@godocs.com')
        cy.get(this.next).click()
        cy.get(this.password,{ timeout:20000}).focused().type('Test@123')
        cy.get(this.signin).click()    
    }

    

}

export default loginpage 