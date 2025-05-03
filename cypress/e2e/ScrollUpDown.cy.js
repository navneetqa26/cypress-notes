describe("Scroll Up and Down",()=>{

    it('should scroll down and back up using arrow button', () => {
        // Visit the test cases page
        cy.visit('https://www.automationexercise.com/test_cases')
      
        // Step 1: Scroll to the bottom of the page
        cy.scrollTo('bottom')

        cy.get('.single-widget > h2').should("have.text","Subscription")
      
        // Step 2: Wait to ensure scroll-down completed
        cy.wait(1000)
      
        // Step 3: Click the scroll-up button (usually bottom-right arrow)
        cy.get('#scrollUp').should('be.visible').click()
      
        // Step 4: Wait for scroll-up animation to complete
        cy.wait(1000)
      
        // Step 5: Assert that the top element is visible again
        cy.contains('Test Cases').should('be.visible')
      })
      
})