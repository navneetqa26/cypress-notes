/// <reference types="cypress" />
import registerafter from '../PageObjects/registeraftercheckout.js';
describe("Login User",()=>{
  
    it("Login user",()=>{

     // Launch The browser

     cy.visit("https://automationexercise.com")
     cy.url().should("include", "automationexercise");
     const check = new registerafter();
     check.visitproducts()
     check.verifyproducts()
     check.clickaddtocart()
     check.addedproductverify()
     check.clickonviewcart()
     check.cartverify()
     check.proceedtocheckout()
     check.registermodal()
     check.registerlogin()

     check.namesignup("Navneet")
     check.emailsignup("navneet315@gmail.com")
     check.btnsignup();
     check.titlesignup();
     check.radiotitle();
     check.alreadyname()
     check.alreadyemail();
     check.registerpass("Test@123")
     check.registerdays()
     check.registermonths()
     check.registeryears()
     check.newsletter()
     check.offers()
     check.fname()
     check.lname()
     check.company()
     check.address()
     check.country()
     check.state()
     check.city()
     check.zipcode()
     check.mobile()
     check.createaccount()
     check.accountcreated()
     check.clickcontinue()
     check.Accountcreatedverify()
     check.gotocart()
     check.verifycart()
     check.proceedcheckout()
     check.checkoutverify()
     check.clickplaceorder()
     check.paymentverification()
     check.nameoncard()
     check.cardnumber()
     check.cvc()
     check.expirymonth()
     check.expiryyear()
     check.payandconfirm()
     check.orderplaced()

     

     


    })

    





})