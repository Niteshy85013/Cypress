describe('',()=>{
    beforeEach(()=>{
        cy.loginsession("admin","Adminadmin1!")
    })


    // search with valid data
    it('search with valid data',()=>{
        cy.visit('/assets')
        cy.get('.search__form').type('Furniture').click()

    })

    // Search with invalid data
    it.only('search with invalid data',()=>{
        cy.visit('/assets')
        cy.get('.search__form').type('offFurniture')

    })
})