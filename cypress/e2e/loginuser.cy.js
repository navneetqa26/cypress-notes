/// <reference types="cypress" />
import Loginuserform from '../PageObjects/loginuser.js';
describe("Login User",()=>{

    
  
    it("Login user",()=>{
   
     
     // Launch The browser

     cy.visit("https://automationexercise.com/login")
     cy.url().should("include", "login");
     const login = new Loginuserform();
        login.loginemail("navneet101@gmail.com")
        login.loginpassword("Test@123")
        login.btnlogin()
        login.verifylogin();
    
     


    })

    it("Login user with incorrect email and password",()=>{

        // Launch The browser
        cy.visit("https://automationexercise.com/login")
        cy.url().should("include", "login");
        const incorrectlogin = new Loginuserform();
        incorrectlogin.Incemail("test500@gmail.com")
        incorrectlogin.incpassword("pass")
        incorrectlogin.incloginbtn()
        incorrectlogin.inerror()
        
   
       })

       it("Login user with incorrect email and password",()=>{

        cy.visit("https://automationexercise.com/login")
        cy.url().should("include", "login");
        const empty = new Loginuserform();
        empty.emptyclick()

       })
   





})