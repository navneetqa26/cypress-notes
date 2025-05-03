class Contactusform

{
      
     
    namecontact(contactname) 
    {
        cy.get("input[data-qa='name']").type(contactname)
    }

    emailcontact(contactemail){

        cy.get('[data-qa="email"]').type(contactemail)
    }
    subcontact(contactsub) 
    {
        cy.get('[data-qa="subject"]').type(contactsub)  
    }
    messagecon(messagecontact){

        cy.get('[data-qa="message"]').type(messagecontact)   
    }

    uploadfile(fileupload){

        cy.get(':nth-child(6) > .form-control').attachFile("My resume.pdf")
    }

    submitbtn(){
        cy.get('[data-qa="submit-button"]').click({ force: true });
    }
     sucess(){
        cy.get('.status').should("have.text","Success! Your details have been submitted successfully.")
     }
    
}

export default Contactusform
