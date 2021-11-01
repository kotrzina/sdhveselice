describe('walk', () => {

    it('test #1', () => {
        cy.visit('/')
        cy.get('h1').should('contain.text', 'Domů')
        cy.get('h2 a').click()
        cy.get('h1').should('contain.text', 'Novinky')
        cy.get('h2').first().click()
        cy.get('.navbar-nav a').contains('Kontakty').click()
        cy.get('h1').should('contain.text', 'Kontakty')
    })
})
