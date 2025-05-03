/// <reference types="cypress" />
import addcartproduct from '../PageObjects/addtocart.js';
describe("Add to cart",()=>{
  
    it("Add products into the cart",()=>{

     // Launch The browser

     cy.visit("https://www.automationexercise.com/")
     cy.url().should("include", "automationexercise");
     const addcart = new addcartproduct();
     addcart.clickonproduct()
     addcart.verifyproductpage()
     addcart.addtocartclick()
     addcart.addedproductconfirm()
     cy.wait(5000)
     addcart.clickonviewcartlink()
     cy.wait(5000)
     addcart.verifycartitem()
     
    })

    it.skip("Add Recommended items to the cart",()=>{

        // Launch The browser
   
        cy.visit("https://www.automationexercise.com/")
        cy.url().should("include", "automationexercise");
        const addcart = new addcartproduct();
        addcart.Scrolltorecommendeditems()
        addcart.slideraddtocart()
        addcart.modalverify()
        addcart.clickonviewcart()
        addcart.verifyshoppingcarttitle
        addcart.cartproductverify()
        
       })

    

})