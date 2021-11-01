describe('homepage', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('test homepage', () => {
        cy.get('h1').should('contain.text', 'Domů')
    })
})
