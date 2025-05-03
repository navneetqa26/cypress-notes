/// <reference types="cypress" />
import testcases from '../PageObjects/testcasespage.js';
describe("Verify test cases page",()=>{
  
    it("Test Cases page Verification",()=>{

     // Launch The browser

     cy.visit("https://automationexercise.com/login")
     cy.url().should("include", "login");
     const testcase = new testcases();
     testcase.clicktestcases()
     testcase.titletest()
     
   
    })

   





})