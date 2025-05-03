/// <reference types="cypress" />
import Logoutform from '../PageObjects/logout.js';
describe("Logout User",()=>{
  
    it("Logout user",()=>{

     // Launch The browser

     cy.visit("https://automationexercise.com/login")
     cy.url().should("include", "login");
     const logout = new Logoutform();
     
     logout.loginemail("navneet101@gmail.com")
     logout.loginpassword("Test@123")
     logout.btnlogin()
     logout.btnlogout();
     logout.verifylogout()


    })

    

})