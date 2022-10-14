/// <reference types="cypress" />

import LoginPage from '../pageobject/LoginPage'
import Dashboard from '../pageobject/Dashboard'
import LoanCreate from '../pageobject/LoanCreate'
import Borrower from '../pageobject/Borrower';


const loginpage = new LoginPage();
const dashboard = new Dashboard();
const loancreate = new LoanCreate();
const borrower = new Borrower();

describe('GoDocs 2.0 Automation', () => {
beforeEach(() => {

    cy.visit('http://localhost:58271/Account/Login?ReturnUrl=%2F')
    loginpage.verifylogin()
        
  })

  it('Succesful Login', () => {
    
    dashboard.verifysuccesslogin()
 
  })

  it.only('Create Loan', () => {
    
    dashboard.clickloancreate()
    loancreate.verifyloanpage()
    loancreate.addloandata()
    borrower.verifyborrowerpage()
    borrower.addborrowerdata()  
     

  })
/*
  it('Add Loan Details', ()=>{


    borrower.addborrowerdata()   

  })

*/
 
})
