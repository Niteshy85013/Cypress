describe('Testing for Sorting Function', () => {
    beforeEach(()=>{
        cy.login()
    })

    it('Sorting with Name', () => {
        cy.visit('/repair')

        cy.get('thead > tr > :nth-child(2)').click()
        
    });
    
});
