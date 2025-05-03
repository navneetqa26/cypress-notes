class searchproduct

{
         
   clkproduct()
   {
    cy.get('.nav > :nth-child(2) > a').click()
    cy.get('.title').should("have.text","All Products")    
   }

    clksearchbar(){
        cy.get('#search_product').type("Jeans")
    }
    clksearchicon(){
        cy.get('#submit_search').click()
    }

    verifyproduct(){
        cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > p').invoke('text').should("include","Jeans")
    }
    
}

export default searchproduct
