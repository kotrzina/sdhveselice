const activeBgColor = 'rgb(238, 238, 238)';

function testNav(nav, active) {
    cy.get('.navbar-nav a').contains(nav).should(active ? 'have.css' : 'not.have.css', 'background-color', activeBgColor)
}

describe('navigation', () => {
    it('test all menu buttons', () => {
        cy.visit('/')
        const navs = [
            'Novinky',
            'Výbor',
            'Závody',
            'Kontakty',
            'SDH',
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
        testNav('SDH', false)
        testNav('Novinky', true)
        testNav('Výbor', false)
        testNav('Závody', false)
        testNav('Kontakty', false)
    })

})


