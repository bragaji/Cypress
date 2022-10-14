///<reference types ='cypress'/>

class borrower{

    constructor(){
        
        let i=6020;
        i++;
        this.headerborrower= 'h2'
        this.fname= '#firstName6021 > .form-control'
        this.lname= '#lastName'+i+' > .form-control'
        this.address1= '#addressOne'+i
        this.address2= '#addressTwo'+i
        this.city= '#addressCity'+i
        this.state= '#addressState'+i
        this.pincode= '#addressZipCode'+i
        this.validate= '#validateAddress'+i
       



    }
    verifyborrowerpage()
    {
        cy.get(this.headerborrower).should('have.text','Borrower')
        
    }

    addborrowerdata()
    {
        cy.get(this.fname).type('Test')
        cy.get(this.lname).type('User')
        cy.get(this.address1).type('Road abc')
        cy.get(this.address2).type('Street Indiana')
        cy.get(this.city).type('Miami')
        cy.get(this.state).select('California')
        cy.get(this.pincode).type('42312')
        cy.get(this.pincode).click()




    }


}export default borrower