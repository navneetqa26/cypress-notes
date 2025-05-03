class searchcart

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

    clickonallproducts(){
        cy.get('productinfo text-center > btn btn-default add-to-cart> .btn').each(($el) => {
            cy.wrap($el).click();
          });
    }
    
}

export default searchcart
