describe('Testing search functionality',()=>{
    beforeEach(()=>{
        cy.login()
         cy.visit("/employees");
    })


    it('search with invalid data',()=>{
        
        cy.get('.search__form').type('Furniture').click()
    });


    it.only('search with invalid data',()=>{
       
        cy.get('.search__form').type('QAs') 
        // Assertion
        cy.get('.empty-table-message > p').should('have.text','No data available')
    });
})