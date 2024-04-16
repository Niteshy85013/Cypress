describe('Testing for Delete Function', () => {
    beforeEach(()=>{
        cy.login()
         cy.visit("/procurement");
    })

    it.only('Delete Functionality',()=>{
       

        // Delete Icon
        cy.get(':nth-child(1) > .button-gap > .delete__button').should('be.visible').click()

        // Proceed Button
        cy.get('.delete__confirmation--button > .button__blue').should('be.visible').click()

        // Toast Message assertion
        cy.get('.toast__paragraph').should('have.text','Procurement Data has been deleted successfully')

    })
    
});
