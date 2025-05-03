/// <reference types="cypress" />
import Contactusform from '../PageObjects/contactus.js';
describe("Contact us",()=>{
  
    it("Contact us Form",()=>{

     // Launch The browser

     cy.visit("https://www.automationexercise.com/contact_us")
     cy.url().should("include", "contact_us");
     const con = new Contactusform();
    
     con.namecontact("Navneet")
     con.emailcontact("navneet26oct@gmail.com")
     con.subcontact("testing subject")
     con.messagecon("hello this is demo testing")
     con.uploadfile()
     con.submitbtn()
     con.sucess()

    })

    

})