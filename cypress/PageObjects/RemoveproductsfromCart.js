class productverify

{
   
   gotoproduct(){
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
   }
   verifytitle(){
    cy.get('.title').should("have.text","All Products")
   }
   clickonviewproduct(){
    cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click()
   }
   quantity(){
    cy.get('#quantity').clear().type(5)
   }
   addtocartclick(){
    cy.get(':nth-child(5) > .btn').click()
   }
   verifyproduct(){
    cy.get('.modal-body > :nth-child(1)').should("have.text","Your product has been added to cart.")
   }
   clickonviewcart(){
    cy.get('u').click()
   }
   Removeproduct(){
    cy.get('.cart_quantity_delete').click()
   }
   verifyemptycart(){
    cy.get('b').should("have.text","Cart is empty!")
   }
    
}

export default productverify
