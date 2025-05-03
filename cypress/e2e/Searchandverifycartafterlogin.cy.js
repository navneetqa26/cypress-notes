/// <reference types="cypress" />
import searchcart from '../PageObjects/searchverifycartafterlogin.js';
describe("Search and verify cart after login",()=>{
  
    it("Search and verify cart after login",()=>{

     // Launch The browser

     cy.visit("https://automationexercise.com/login")
     cy.url().should("include", "login");
     const search = new searchcart();
     
     
     search.clkproduct()
     search.clksearchbar()
     search.clksearchicon()
     search.verifyproduct()
     search.clickonallproducts()

    })

   





})