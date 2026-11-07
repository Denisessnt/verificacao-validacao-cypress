describe('Remover produto', () => {
    it('Remover produto sem sucesso', () => {
        //passo 1:
        cy.visit('https://www.saucedemo.com') 
        cy.get('[data-test="username"]').type('problem_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
        .should('be.visible')
        .and('have.text', 'Add to cart')
    })
})