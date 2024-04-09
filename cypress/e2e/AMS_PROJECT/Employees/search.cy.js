describe('Testing search functionality',()=>{
    beforeEach(()=>{
        cy.login()
    })


    it('search with invalid data',()=>{
        cy.visit('/employees')
        cy.get('.search__form').type('Furniture').click()
    });


    it.only('search with invalid data',()=>{
        cy.visit('/employees')
        cy.get('.search__form').type('QAs') 
        // Assertion
        cy.get('.empty-table-message > p').should('have.text','No data available')
    });
})