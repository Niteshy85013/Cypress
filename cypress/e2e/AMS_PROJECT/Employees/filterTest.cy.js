describe('Test for Filter section',()=>{
    beforeEach(()=>{
        cy.login()
    })

    it('Filtering Data',()=>{
        cy.visit('/employees')
        cy.get('.filter--button').click()

        // Selecting Departmeent name
        cy.get('.input-enabled').select('Backend')

        // Selecting Degination
        cy.get('.select__enabled').select('developer')

        // Clear all filter Button
        //cy.get('.button__red').click()

        // Apply Button
        cy.get('.filter__button--flex > .button__blue').click()
         

    });

    it.only('Filtering with Invalid Data',()=>{
        cy.visit('/employees')
        cy.get('.filter--button').click()

        // Selecting Departmeent name
        cy.get('.input-enabled').select('Backendss')

        // Clear all filter Button
        //cy.get('.button__red').click()

        // Apply Button
        cy.get('.filter__button--flex > .button__blue').click()
         

    });

    it('Checking Button Works',()=>{
        cy.visit('/employees')
        cy.get('.filter--button').should('be.visible').click()
        cy.get('.filter__hide').should('be.visible').click()
    })
});