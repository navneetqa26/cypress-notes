/// <reference types="cypress" />
import productdetails from '../PageObjects/ProductDetails.js';
describe("Product Details verifications",()=>{
  
    it("Product Details verifications",()=>{

     // Launch The browser

     cy.visit("https://automationexercise.com")
     cy.url().should("include", "automationexercise");
     const detail = new productdetails();
     detail.gotoproduct()
     detail.verifytitle()
     detail.clickonviewproduct()
     detail.verifyproductname()
     detail.verifybrandname()
     
     
   
    })

   





})