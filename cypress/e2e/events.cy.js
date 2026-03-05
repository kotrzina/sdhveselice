describe('events', () => {
    it('homepage EventsPanel shows events', () => {
        cy.visit('/')
        cy.contains('Kalendář akcí 2026')
        cy.contains('Valná hromada SDH Veselice')
        cy.contains('Lesempolem')
    })

    it('events page lists all events', () => {
        cy.visit('/akce/')
        cy.get('h1').should('contain.text', 'Kalendář akcí 2026')
        cy.contains('3. 1.').parent().should('contain.text', 'Valná hromada SDH Veselice')
        cy.contains('14. 2.').parent().should('contain.text', 'Ostatky')
        cy.contains('16. 5.').parent().should('contain.text', 'Lesempolem')
        cy.contains('13. - 14. 6.').parent().should('contain.text', 'Pouť ve Veselici')
    })

    it('events page links work', () => {
        cy.visit('/akce/')
        cy.contains('Valná hromada SDH Veselice').click()
        cy.url().should('include', '/clanek/')
        cy.get('h1').should('exist')
    })

    it('navigates from homepage EventsPanel to events page', () => {
        cy.visit('/')
        cy.contains('Kalendář akcí 2026').click()
        cy.url().should('include', '/akce/')
        cy.get('h1').should('contain.text', 'Kalendář akcí 2026')
    })
})
