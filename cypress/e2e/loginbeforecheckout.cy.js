/// <reference types="cypress" />
import Loginbeforecheckout from '../PageObjects/loginbeforecheckout.js';
describe("Login before checkout",()=>{
  
    it("Login user",()=>{

     // Launch The browser

     cy.visit("https://automationexercise.com/login")
     cy.url().should("include", "login");
     const login = new Loginbeforecheckout();
     
     login.loginemail("navneet101@gmail.com")
     login.loginpassword("Test@123")
     login.btnlogin()
     login.verifylogin();
     login.visitproducts()
     login.verifyproducts()
     login.clickaddtocart()
     login.addedproductverify()
     login.clickonviewcart()
     login.cartverify()
     login.proceedtocheckout()
     login.checkoutverify()

    
     login.clickplaceorder()
     login.paymentverification()
     login.nameoncard()
     login.cardnumber()
     login.cvc()
     login.expirymonth()
     login.expiryyear()
     login.payandconfirm()
     login.orderplaced()



    })

   





})