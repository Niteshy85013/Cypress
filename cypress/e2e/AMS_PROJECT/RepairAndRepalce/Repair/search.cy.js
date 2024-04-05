describe('Search Functionality test for Repair Section',()=>{

    beforeEach(()=>{
        cy.login()
    })

    // Search Valid Data or existing data
    it('searching valid data', () => {
        cy.visit('/repair')
        cy.get('.search-input').type('mac')
    });


    // Search InValid Data or non-existing data
    it.only('searching invalid data', () => {
        cy.visit('/repair')
        cy.get('.search-input').type('maco')
    });

})