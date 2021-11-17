function testRace(linkName) {
    cy.contains(linkName).click()
    cy.wait(250)
    cy.get('h1').then(($h1) => {
        const t = $h1.text();
        expect(t.length).to.be.at.least(10)

    })
    cy.contains('1.') // all pages contain first place
    cy.go('back')
}

describe('walk', () => {

    it('test #1', () => {
        cy.visit('/')
        cy.get('h1').should('contain.text', 'Domů')
        cy.get('h2 a').click()
        cy.get('h1').should('contain.text', 'Novinky')
        cy.get('h2').first().click()

        // Races in Veselice
        cy.get('.navbar-nav a').contains('Závody ve Veselici').click()
        testRace("Závody ve Veselici 2010")
        testRace("Závody ve Veselici 2009")
        testRace("Závody ve Veselici 2008")
        testRace("Závody ve Veselici 2007")
        testRace("Závody ve Veselici 2006")
        testRace("Závody ve Veselici 2005")
        testRace("Závody ve Veselici 2004")
        testRace("Závody ve Veselici 2003")
        testRace("Závody ve Veselici 2002")
        testRace("Závody ve Veselici 2001")
        testRace("Závody ve Veselici 1996 - 2000")

        // Contacts
        cy.get('.navbar-nav a').contains('Kontakty').click()
        cy.get('h1').should('contain.text', 'Kontakty')
        cy.contains("65339851")
    })

    it('test #2 - articles', () => {
        cy.visit('/novinky/1/')
        cy.get('.page-link').last().then(($a => {
            const pages = parseInt($a.text())
            for (let i = 1; i <= pages; i++) {
                cy.visit('/novinky/' + i + '/')
                cy.get('.articleList .col-lg-4 a').each(link => {
                    cy.visit(link.attr('href'))
                    cy.get('h1').then(($h1) => {
                        const t = $h1.text();
                        expect(t.length).to.be.at.least(8)
                    })
                })
            }
        }))
    })
})
