class testcases

{
         
   clicktestcases()
   {
    cy.get(':nth-child(5) > a').click()
   }

   titletest()
   {
    cy.get('b').should("have.text","Test Cases")
   }
    
}

export default testcases
