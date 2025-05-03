/// <reference types="cypress" />
import Registercheckoutbefore from '../PageObjects/registerbeforecheckout.js';
describe("Register Before Checkout",()=>{
  
    it("Register Before Checkout",()=>{

     // Launch The browser

     cy.visit("https://automationexercise.com/")
     cy.url().should("include", "automationexercise.com");
     const register = new Registercheckoutbefore();
     register.clksignup();
     register.verifysignup();
     register.namesignup("Navneet")
     register.emailsignup("navneet313@gmail.com")
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
     register.Addtocart()
     register.Productadded()
     register.viewcart()
     register.cartverification()
     register.continuetoproceed()
     register.checkoutverification()
     register.clickplaceorder()
     register.paymentverification()
     register.nameoncard()
     register.cardnumber()
     register.cvc()
     register.expirymonth()
     register.expiryyear()
     register.payandconfirm()
     register.orderplaced()

     
    })

   



        
       


})