class subcriptionuser

{
    
    
    inputsubs(){
        cy.get('#susbscribe_email').type("navneet26@gmail.com")
    }

    subarrow(){
        cy.get('#subscribe').click()
        cy.contains("You have been successfully subscribed!").should("be.visible")
    }
    gotocartpage(){
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
    }
    cartverify(){
        cy.get('.active').should("have.text","Shopping Cart")
    }
   clickonemail(){
    cy.get('#susbscribe_email').type("test@gmail.com")
   }
   clickonarrow(){
    cy.get('#subscribe').click()
    cy.contains("You have been successfully subscribed!").should("be.visible")

   }


}

export default subcriptionuser