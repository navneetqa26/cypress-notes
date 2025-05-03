/// <reference types="cypress" />
import productverify from '../PageObjects/Verifyproductquantity.js';
describe("Verify product quantity",()=>{
  
    it("Verify product quantity",()=>{

     // Launch The browser

     cy.visit("https://automationexercise.com")
     cy.url().should("include", "automationexercise");
     const pro = new productverify();
     pro.gotoproduct()
     pro.verifytitle()
     pro.clickonviewproduct()
     pro.quantity()
     pro.addtocartclick()
     pro.verifyproduct()
     pro.clickonviewcart()
     pro.productquantity()
     
   
    })

   





})