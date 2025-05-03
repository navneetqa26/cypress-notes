class Loginuserform

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
        cy.contains('Logged in as').should('exist');

    }
    //Incorrect email and password
    Incemail(emailinc) 
    {
        cy.get("input[data-qa='login-email']").type(emailinc)

    }
    incpassword(passwordinc) 
    {
        cy.get("input[data-qa='login-password']").type(passwordinc)

    }
    incloginbtn(btninclogin) 
    {
        cy.get('[data-qa="login-button"]').click();
    }

    inerror(errorinc) 
    {
        cy.get('.login-form').contains('p','Your email or password is incorrect!')
    }

    emptyclick(){
        cy.get("[data-qa='login-button']").click()
        cy.wait(5000)
        cy.get("[data-qa='login-email']").should('have.attr', 'required');
    }

      
}

export default Loginuserform