describe('Testing for sorting in Employees sections', () => {
    beforeEach(()=>{
        cy.login()
    })

    it('Sort by user in ascending order', () => {
        cy.visit('/employees')
        // Click on the user column header to sort in ascending order
        cy.get('thead > :nth-child(2)').click();
    });

    it.only('Sort by user in descending order', () => {
        cy.visit('/employees')
        // Click on the user column header to sort in ascending order
        cy.get('thead > :nth-child(2)').click();
    });

});
