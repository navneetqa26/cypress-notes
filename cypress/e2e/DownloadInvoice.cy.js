/// <reference types="cypress" />
import DownloadInvoice from '../PageObjects/DownloadInvoice.js';
describe("Download Invoice after checkout",()=>{
  
    it("Download Invoice after checkout",()=>{

     // Launch The browser

     cy.visit("https://automationexercise.com/")
     cy.url().should("include", "automationexercise.com");
     const Invoice = new DownloadInvoice();
     Invoice.clksignup();
     Invoice.verifysignup();
     Invoice.namesignup("Navneet")
     Invoice.emailsignup("navneet225@gmail.com")
     Invoice.btnsignup();
     Invoice.titlesignup();
     Invoice.radiotitle();
     Invoice.alreadyname()
     Invoice.alreadyemail();
     Invoice.registerpass("Test@123")
     Invoice.registerdays()
     Invoice.registermonths()
     Invoice.registeryears()
     Invoice.newsletter()
     Invoice.offers()
     Invoice.fname()
     Invoice.lname()
     Invoice.company()
     Invoice.address()
     Invoice.country()
     Invoice.state()
     Invoice.city()
     Invoice.zipcode()
     Invoice.mobile()
     Invoice.createaccount()
     Invoice.accountcreated()
     Invoice.clickcontinue()
     Invoice.Accountcreatedverify()
     Invoice.Addtocart()
     Invoice.Productadded()
     Invoice.viewcart()
     Invoice.cartverification()
     Invoice.continuetoproceed()
     Invoice.checkoutverification()
     Invoice.clickplaceorder()
     Invoice.paymentverification()
     Invoice.nameoncard()
     Invoice.cardnumber()
     Invoice.cvc()
     Invoice.expirymonth()
     Invoice.expiryyear()
     Invoice.payandconfirm()
     Invoice.orderplaced()
     Invoice.clickondownloadinvoice()

     
    })

   



        
       


})