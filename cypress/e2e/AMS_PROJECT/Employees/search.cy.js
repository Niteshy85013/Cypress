describe('Testing search functionality',()=>{
    beforeEach(()=>{
        cy.login()
    })

    // search with valid data
    it('search with invalid data',()=>{
        cy.visit('/employees')
        cy.get('.search__form').type('Furniture').click()
    });

    // Search with valid data
    it.only('search with invalid data',()=>{
        cy.visit('/employees')
        cy.get('.search__form').type('QA')
    });
})