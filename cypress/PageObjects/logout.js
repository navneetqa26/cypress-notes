class Logoutform

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
        cy.contains('Logout').should('be.visible');
    }
    btnlogout(logoutbtn){

        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    }
    verifylogout(logout){
        cy.contains(' Signup / Login').should('be.visible');
    }    
}

export default Logoutform
