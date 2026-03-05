function testNav(nav, active) {
    cy.get('.navbar-nav a').contains(nav).should(active ? 'have.class' : 'not.have.class', 'active')
}

describe('navigation', () => {
    it('test all menu buttons', () => {
        cy.visit('/')
        const navs = [
            'Novinky',
            'Výbor',
            'Závody',
            'Kontakty',
            'Kalendář',
        ]

        navs.map(nav => {
            cy.get('.navbar-nav a').contains(nav).click()
            navs.map(button => {
                testNav(button, nav === button)
            })
        })
    })

    it('test article', () => {
        cy.visit('/clanek/beh-na-historickych-lyzich-2018/')
        testNav('Novinky', true)
        testNav('Výbor', false)
        testNav('Závody', false)
        testNav('Kontakty', false)
        testNav('Kalendář', false)
    })

    it('test brand link', () => {
        cy.visit('/novinky/1/')
        cy.get('.navbar-brand').contains('SDH').click()
        cy.url().should('eq', Cypress.config().baseUrl + '/')
    })
})
