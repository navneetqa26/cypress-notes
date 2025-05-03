/// <reference types="cypress" />
import Addressdetail from '../PageObjects/VerifyAddressDetails.js';
describe("Verify Address Details",()=>{
  
    it("Verify Address Details",()=>{

     // Launch The browser

     cy.visit("https://automationexercise.com/")
     cy.url().should("include", "automationexercise.com");
     const addressdetail = new Addressdetail();
     addressdetail.clksignup();
     addressdetail.verifysignup();
     addressdetail.namesignup("Navneet")
     addressdetail.emailsignup("navneet212@gmail.com")
     addressdetail.btnsignup();
     addressdetail.titlesignup();
     addressdetail.radiotitle();
     addressdetail.alreadyname()
     addressdetail.alreadyemail();
     addressdetail.registerpass("Test@123")
     addressdetail.registerdays()
     addressdetail.registermonths()
     addressdetail.registeryears()
     addressdetail.newsletter()
     addressdetail.offers()
     addressdetail.fname()
     addressdetail.lname()
     addressdetail.company()
     addressdetail.address()
     addressdetail.country()
     addressdetail.state()
     addressdetail.city()
     addressdetail.zipcode()
     addressdetail.mobile()
     addressdetail.createaccount()
     addressdetail.accountcreated()
     addressdetail.clickcontinue()
     addressdetail.Accountcreatedverify()
     addressdetail.Addtocart()
     addressdetail.Productadded()
     addressdetail.viewcart()
     addressdetail.cartverification()
     addressdetail.continuetoproceed()
     addressdetail.checkoutverification()
     addressdetail.verifyaddressdelivery()
     addressdetail.verifyaddressbilling()

     
    })

   



        
       


})