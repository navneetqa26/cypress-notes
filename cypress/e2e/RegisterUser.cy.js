/// <reference types="cypress" />
import Registerform from '../PageObjects/RegisterUser.js';
describe("Register User",()=>{
  
    it.skip("Register user",()=>{

     // Launch The browser

     cy.visit("https://automationexercise.com/")
     cy.url().should("include", "automationexercise.com");
     const register = new Registerform();
     register.clksignup();
     register.verifysignup();
     register.namesignup("Navneet")
     register.emailsignup("navneet451@gmail.com")
     register.btnsignup();
     register.titlesignup();
     register.radiotitle();
     register.alreadyname()
     register.alreadyemail();
     register.registerpass("Test@123")
     register.registerdays()
     register.registermonths()
     register.registeryears()
     register.newsletter()
     register.offers()
     register.fname()
     register.lname()
     register.company()
     register.address()
     register.country()
     register.state()
     register.city()
     register.zipcode()
     register.mobile()
     register.createaccount()
     register.accountcreated()
     register.clickcontinue()
     register.Accountcreatedverify()
     
    })

   
    it("Register user with already registered email",()=>{

        // Launch The browser
   
        cy.visit("https://automationexercise.com/")
        cy.url().should("include", "automationexercise.com");
        const register = new Registerform();
        register.alreadysignup();
        register.alrsignup();
        register.alrsignupname("Navneet")
        register.alremail("navneet26@gmail.com")
        register.alrbtn();
        register.existuser();
      



        
       })


})