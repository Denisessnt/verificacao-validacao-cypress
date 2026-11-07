describe('Ordenação de produtos não funciona', () => {
    
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com') 
        cy.get('[data-test="username"]').type('problem_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')        
    })

    it('Ordenar preço do menor para o maior', () => {
        cy.get('.product_sort_container').select('lohi')
        
        cy.get('.inventory_item_price').then(($prices) => {
            const precos_da_tabela = $prices.toArray().map(el => parseFloat(el.innerText.replace('$', '')))
            const precos_ordenados = [...precos_da_tabela].sort((a, b) => a - b)
            expect(precos_da_tabela).to.deep.equal(precos_ordenados)
        }) 
    })

    it('Ordenar por nome', () => {
        cy.get('.product_sort_container').select('za')
            cy.get('.inventory_item_name').then(($nomes) => {
            const nomes_da_tela = $nomes.toArray().map(el => el.innerText)
            const nomes_ordenados = [...nomes_da_tela].sort().reverse()
            expect(nomes_da_tela).to.deep.equal(nomes_ordenados)
        })
    })
    
})