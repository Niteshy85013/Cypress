describe('Filter section Testing', () => {
    beforeEach(()=>{
        cy.login()
    })

    // Selecting the filter fields
    it('Filter Section', () => {
        cy.visit('/repair')
        cy.get('.filter--button').should('be.visible').click()

        cy.get('.group__form > :nth-child(1) > .input-enabled').select('Furniture')
        cy.get(':nth-child(2) > .input-enabled').select('pending')
        cy.get(':nth-child(3) > .input__field > .toggle__showHide--container > .input-enabled').type('2024-04-01')
        cy.get(':nth-child(4) > .input__field > .toggle__showHide--container > .input-enabled').type('2024-04-01')
       // cy.get('.filter__button--flex > .button__blue').click()


       cy.get('.filter__hide').click()

        //cy.get('.button__red').click()

        
    });

// Filter by Category
    it.only('Filter by category Section', () => {
        cy.visit('/repair')
        cy.get('.filter--button').should('be.visible').click()
        
        cy.get('.group__form > :nth-child(1) > .input-enabled').select('Furniture')
        
       // cy.get('.filter__button--flex > .button__blue').click()

    });
    
});
