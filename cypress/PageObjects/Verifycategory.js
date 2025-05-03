class categoryverify

{
   
   gotoproduct(){
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
   }
   verifytitle(){
    cy.get('.left-sidebar > :nth-child(1)').should("have.text","Category")
   }

   clickonplus(){
    cy.get(':nth-child(1) > .panel-heading > .panel-title > a > .badge').click()
   }
   clickonDress(){
    cy.get('#Women > .panel-body > ul > :nth-child(1) > a').click()
   }
   verifydresstitle(){
    cy.get('.title').should("have.text","Women - Dress Products")
   }
   clickonmenplus(){
    cy.get(':nth-child(2) > .panel-heading > .panel-title > a > .badge').click()
   }
   clickonjeans()
   {
    cy.get('#Men > .panel-body > ul > :nth-child(2) > a').click()
   }
   verifyjeanstitle()
   {
    cy.get('.title').should("have.text","Men - Jeans Products")
   }

   clickonkidsplus(){
    cy.get(':nth-child(3) > .panel-heading > .panel-title > a > .badge').click()
   }
   clickondress(){
    cy.get('#Kids > .panel-body > ul > :nth-child(1) > a').click()
   }
   verifykidstitle(){
    cy.get('.title').should("have.text","Kids - Dress Products")
   }
  
    
}

export default categoryverify
