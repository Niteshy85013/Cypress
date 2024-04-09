describe('Sorting', () => {
    beforeEach(()=>{
        cy.login()
    });

    it('sorting by name', () => {
        cy.visit('/assets');
    
        // Ascending order
        cy.get('thead > :nth-child(2)').click();
        cy.wait(3000);
    
        // Retrieve the names from the table in ascending order
        cy.get('tbody > tr > td:nth-child(2)').then(names => {
            const sortedNames = names.slice().sort();
            expect(names).to.deep.equal(sortedNames, 'Names are in ascending order');
        });
    });

    // it.only('sorting by name', () => {
    //     cy.visit('/assets');
    
    //     // Click to sort in descending order
    //     cy.get('thead > :nth-child(2)').dblclick();
    //     cy.get('tbody > tr > td:nth-child(2)').should('have.length.gt', 1);
    //     cy.get('tbody > tr > td:nth-child(2)').then(namess => {
    //         const sortedNamess = namess.slice().sort().reverse;
    //         expect(namess).to.deep.equal(sortedNamess, 'Names are in descending order');
             
    //     });
    // });
    
    
    
    
});


 














 