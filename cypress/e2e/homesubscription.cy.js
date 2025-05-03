/// <reference types="cypress" />
import subcriptionuser from '../PageObjects/homesubsciption.js';
describe("Subscription user",()=>{
  
    it("Subsciption",()=>{

     // Launch The browser

     cy.visit("https://www.automationexercise.com/")
     cy.scrollTo('bottom');
      const sub = new subcriptionuser();
      sub.inputsubs();
      sub.subarrow();
      sub.gotocartpage()
      sub.cartverify()
      sub.clickonemail()
      sub.clickonarrow()
      
     

    })

    

})