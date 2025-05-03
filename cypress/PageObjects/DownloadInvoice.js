class DownloadInvoice

{
    clksignup(signupsignin) 
    {
        cy.get("a[href='/login']").first().click({force: true});
    }

    verifysignup(vrfsignupsignin) 
    {
        cy.get("div[class='signup-form'] h2").should("have.text","New User Signup!")
    }

   namesignup(signupname) 
    {
        cy.get("input[placeholder='Name']").type(signupname)
    }
    
    emailsignup(signupemail)
     {
        cy.get("input[data-qa='signup-email']").first().type(signupemail);
      }
      

   btnsignup(signupbtn) 
   {
    cy.get("button[data-qa='signup-button']").first().click();
    }
    
    
    titlesignup(signuptitle) 
    {
        cy.get(':nth-child(1) > b').should("have.text","Enter Account Information")
    }

    radiotitle(titleradio){
        cy.get('#id_gender1').check().should('be.checked');
    }
    alreadyname(){
        cy.get('[data-qa="name"]').should("have.value","Navneet")
    }

    alreadyemail(){
        cy.get('[data-qa="email"]').should("have.value","navneet225@gmail.com")
    }

    registerpass(pass){
        cy.get('[data-qa="password"]').type(pass)
    }

    registerdays()
    {
        cy.get('#days').select("5")
    }
    registermonths()
    {
        cy.get('#months').select("May")
    }
    registeryears()
    {
        cy.get('#years').select("2001")
    }
    newsletter(){
        cy.get('#newsletter').check().should('be.checked')
    }

    offers(){
        cy.get('#optin').check().should('be.checked')
    }

    fname(){
        cy.get('[data-qa="first_name"]').type("Navneet")
    }
    lname(){
        cy.get('[data-qa="last_name"]').type("Kumar")
    }
    company(){
        cy.get('[data-qa="company"]').type("TCS")
    }
    address(){
        cy.get('[data-qa="address"]').type("123 local street")
    }
    country(){
        cy.get('[data-qa="country"]').should('have.value', 'India');
    }
    state(){
        cy.get('[data-qa="state"]').type("Punjab")
    }
    city(){
        cy.get('[data-qa="city"]').type("Hoshiarpur")
    }
    zipcode(){
        cy.get('[data-qa="zipcode"]').type("12345")
    }
    mobile(){
        cy.get('[data-qa="mobile_number"]').type("+9876543210")
    }
    createaccount(){
        cy.get('[data-qa="create-account"]').click()
    }
    accountcreated(){
        cy.get('.col-sm-9 > :nth-child(2)').should("have.text","Congratulations! Your new account has been successfully created!")
    }
    clickcontinue(){
        cy.get('[data-qa="continue-button"]').click()
    }
    Accountcreatedverify(){
        cy.get('.shop-menu > .nav > :nth-child(4) > a').should("have.text"," Logout")
    }


    Addtocart(){
        cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
        
    }
   Productadded(){
    cy.get('.modal-body > :nth-child(1)').should("have.text","Your product has been added to cart.")
   }
    
   viewcart(){
    cy.get('u').click()
   }

   cartverification(){
    cy.get('.active').should("have.text","Shopping Cart")
   }

   continuetoproceed(){
    cy.get('.col-sm-6 > .btn').click()
   }
   checkoutverification(){
    cy.get('.active').should("have.text","Checkout")

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
   clickondownloadinvoice(){
    cy.get('a.btn.btn-default.check_out').click()
    .should('have.attr', 'href')
    .and('include', '/download_invoice/');
   }
   

  
}

export default DownloadInvoice