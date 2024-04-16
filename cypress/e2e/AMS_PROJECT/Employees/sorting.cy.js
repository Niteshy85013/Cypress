describe('Testing for sorting in Employees sections', () => {
    beforeEach(()=>{
        cy.login()
         cy.visit("/employees");
    })

    it('Sort by user in ascending order', () => {
      
        // Click on the user column header to sort in ascending order
        cy.get('.selected-tablehead').click();
        
    });

    it.only('Sort by user in descending order', () => {
        
        // Click on the user column header to sort in ascending order
        cy.get('thead > :nth-child(2)').click();
    });

});
