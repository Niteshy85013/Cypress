
describe('Sorting', () => {
    beforeEach(()=>{
        cy.login()
    })

    it('sorting by name', () => {
        cy.visit('/assets');
    
        // Ascending order
        cy.get('thead > :nth-child(2)').click();
        cy.wait(3000);
    
        // Retrieve the names from the table in ascending order
        cy.get('tbody > tr > td:nth-child(2)').invoke('text').then(names => {
            const sortedNames = names.slice().sort();
            expect(names).to.deep.equal(sortedNames, 'Names are not in ascending order');
        });
    });
    
    
    
});


// Descending order
// cy.get('thead > :nth-child(2)').click();
// cy.wait(5000);

// // Retrieve the names from the table in descending order
// cy.get('tbody > tr > td:nth-child(2)').invoke('text').then(names => {
//     const sortedNames = names.slice().sort().reverse();
//     expect(names).to.deep.equal(sortedNames, 'Names are not in descending order');
// });















 