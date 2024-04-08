describe('Testing Search Functionality',()=>{
    beforeEach(()=>{
        cy.login()
    })


    // search with valid data
    it.only('search with valid data',()=>{
        cy.visit('/procurement')
        cy.get('.search__form').type('Furniture').click()

    })

    // Search with invalid data
    it('search with invalid data',()=>{
        cy.visit('/procurement')
        cy.get('.search__form').type('offFurniture')

    })
})