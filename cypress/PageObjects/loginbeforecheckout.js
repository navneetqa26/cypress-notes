class Loginbeforecheckout

{
    
    
    loginemail(emaillogin) 
    {
        cy.get("input[data-qa='login-email']").type(emaillogin)
    }

     
    loginpassword(passwordlogin) 
    {
        cy.get("input[data-qa='login-password']").type(passwordlogin)
    }

    btnlogin(loginbtn){

        cy.get('[data-qa="login-button"]').click()
    }
    verifylogin(loginverify) 
    {
        cy.contains('Logged in as').should('exist');

    }
    
    visitproducts(){
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
    }
    verifyproducts(){
        cy.get('.title').should("have.text","All Products")
    }
    
    clickaddtocart(){
        cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
    }

    addedproductverify(){
        cy.get('.modal-body > :nth-child(1)').should("have.text","Your product has been added to cart.")
    }
    clickonviewcart(){
        cy.get('u').click()
    }
    cartverify()
    {
        cy.get(".active").should("have.text","Shopping Cart")
    }
    proceedtocheckout(){
        cy.get('.col-sm-6 > .btn').click()
    }
    
    checkoutverify(){
        cy.get(".active").should("have.text",'Checkout')

    }
    clickplaceorder(){
        cy.get(':nth-child(7) > .btn').click();
       }
    
       paymentverification(){
        cy.get('.active').should("have.text","Payment")
    
       }
       nameoncard(){
        cy.get('[data-qa="name-on-card"]').type("Navneet Singh")
       }
       cardnumber(){
        cy.get('[data-qa="card-number"]').type("4242 4242 4242 4242")
       }
       cvc(){
        cy.get('[data-qa="cvc"]').type("123")
       }
       expirymonth(){
        cy.get('[data-qa="expiry-month"]').type("02")
       }
       expiryyear(){
        cy.get("[data-qa='expiry-year']").type(2026)
       }
       payandconfirm(){
        cy.get("#submit").click()
       }
       orderplaced(){
        cy.get('.col-sm-9 > p').should("have.text","Congratulations! Your order has been confirmed!")
       }
    

      
}

export default Loginbeforecheckout