describe('Falha ao adicionar produtos ao carrinho', () => {
    it('Bloqueio ao tentar adicionar o quarto produto da vitrine', () => {
        cy.visit('https://www.saucedemo.com')
        cy.get('[data-test="username"]').type('error_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
        cy.get('.shopping_cart_badge').should('have.text', '1')
    })

})