/// <reference types="cypress" />
import productremove from '../PageObjects/RemoveproductsfromCart.js';
describe("Remove products from Cart",()=>{
  
    it("Remove products from Cart",()=>{

     // Launch The browser

     cy.visit("https://automationexercise.com")
     cy.url().should("include", "automationexercise");
     const remove = new productremove();
     remove.gotoproduct()
     remove.verifytitle()
     remove.clickonviewproduct()
     remove.quantity()
     remove.addtocartclick()
     remove.verifyproduct()
     remove.clickonviewcart()
     remove.Removeproduct()
     remove.verifyemptycart()
     
   
    })

   





})