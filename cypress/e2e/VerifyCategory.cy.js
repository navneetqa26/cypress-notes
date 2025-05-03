/// <reference types="cypress" />
import categoryverify from '../PageObjects/Verifycategory.js';
describe("Verify product category",()=>{
  
    it("Verify product category",()=>{

     // Launch The browser

     cy.visit("https://automationexercise.com")
     cy.url().should("include", "automationexercise");
     const category = new categoryverify();
     category.gotoproduct()
     category.verifytitle()
     category.clickonplus()
     category.clickonDress()
     category.verifydresstitle()
     category.clickonmenplus()
     category.clickonjeans()
     category.verifyjeanstitle()
     category.clickonkidsplus()
     category.clickondress()
     category.verifykidstitle()
   
    })

   





})