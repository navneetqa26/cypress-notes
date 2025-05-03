/// <reference types="cypress" />
import searchproduct from '../PageObjects/search.js';
describe("Search Product",()=>{
  
    it("Search Product",()=>{

     // Launch The browser

     cy.visit("https://automationexercise.com/login")
     cy.url().should("include", "login");
     const search = new searchproduct();
     
     
     search.clkproduct()
     search.clksearchbar()
     search.clksearchicon()
     search.verifyproduct()

    })

   





})