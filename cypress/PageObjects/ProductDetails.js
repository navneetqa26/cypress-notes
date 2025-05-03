class productdetails

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
   verifyproductname(){
      cy.get('.product-information > h2').should("have.text","Blue Top")
   }
   verifybrandname(){
      cy.get('.product-information > :nth-child(8)').invoke('text').should("include","Polo")
   }
   
}

export default productdetails
