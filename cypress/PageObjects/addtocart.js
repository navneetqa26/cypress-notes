class addcartproduct

{
   clickonproduct(){
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
   }
   verifyproductpage(){
    cy.get('.title').should("have.text",'All Products')
   }
   addtocartclick(){
    cy.get("[data-product-id='2']").first().click()
   }
   addedproductconfirm(){
    cy.get("div[id='cartModal'] p:nth-child(1)").should("have.text","Your product has been added to cart.")
   }
   clickonviewcartlink(){
      cy.get("u").click({force: true});

   }
   verifyshoppingcarttitle(){
      cy.get('.active').should("have.text","Shopping Cart")
   }
   verifycartitem(){
      cy.get('.cart_description > h4').should('be.visible')

   }
   

     //Add to cart on recommended items
   Scrolltorecommendeditems(){
      
   cy.get('.recommended_items')
   .scrollIntoView()
    .should('be.visible');
   }

   slideraddtocart(){
      cy.get('.active > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
   }

   modalverify(){
      cy.get(".modal-body")
   .invoke('text')
   .then((text) => {
     const cleaned = text.replace(/\s+/g, ' ').trim();
     expect(cleaned).to.include('Your product has been added to cart.');
   });
   }
   clickonviewcart(){
      cy.get('u').click()
   }
   verifyshoppingcarttitle(){
      cy.get('.active').should("have.text","Shopping Cart")
   }
   cartproductverify(){
      cy.get('.cart_description > h4').should("have.text","Summer White Top")
   }
    
}

export default addcartproduct
