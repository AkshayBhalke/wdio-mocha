it("TC-02 Add to cart & Checkout the product",async function () {
    let price = []
    browser.url("https://www.saucedemo.com/")

    await $("#user-name").setValue("standard_user");
    await $("#password").setValue("secret_sauce");
    await $("#login-button").click();

    await $$(".inventory_item_price").forEach(async function (el) {
        //get all the price and store in array
     await price.push(el.getText())
     let k = price.join("")
     let z = []
     price.forEach(async function (el, index) {
         if (index > 0) {
             z.push(Number(el))

             
         }
     })





    })
    
        
        
      
      
    .then(function(el){
        cy.get(".inventory_item").each(function(dv){
            if(dv.text().includes(el)){
                cy.wrap(dv).find(".btn.btn_primary.btn_small.btn_inventory").click()
                //assert the cart 
               cy.get(".shopping_cart_badge").should('have.text',1)
               .click()
            //assert the cart page
               cy.url().should('contain',"https://www.saucedemo.com/cart.html")
               cy.get('.inventory_item_price').should('have.text',el)
               cy.get("#checkout").click()
            //    providing below user data from fixture file
               cy.get("#first-name").type(user.fName)
               cy.get("#last-name").type(user.lName)
               cy.get("#postal-code").type(user.pin)
               cy.get("#continue").click()
               cy.get("#finish").click()
            //    assert at the end
               cy.get('.pony_express').should("be.visible")
               cy.get('.complete-header').should('be.visible')
               cy.get('.complete-text').should('contain',"Your order has been dispatched, and will arrive just as fast as the pony can get there!")
            }
        })
    })
})