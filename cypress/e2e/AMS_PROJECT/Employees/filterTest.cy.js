describe('Test for Filter section',()=>{
    beforeEach(()=>{
        cy.login()
        cy.visit("/employees");
    })

    it('Filtering Data',()=>{
        
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

    it('Only Department Filter selected',()=>{
        cy.get('.filter--button').click()

        // Selecting Departmeent name
        cy.get('.input-enabled').select('Backend')

        // Clear all filter Button
        //cy.get('.button__red').click()

        // Apply Button
        cy.get('.filter__button--flex > .button__blue').click()
         

    });

    it('Only Designation Filter selected',()=>{
     
        cy.get('.filter--button').click()
    
        cy.get('.select__enabled').select('hrtr')

        // Clear all filter Button
        //cy.get('.button__red').click()

        // Apply Button
        cy.get('.filter__button--flex > .button__blue').click()
         

    });

    it.only('Filtering department and designation with no employee',()=>{
       
        cy.get('.filter--button').click()

        // Selecting Departmeent name
        cy.get('.input-enabled').select('Management')

        // Selecting Degination
        cy.get('.select__enabled').select('designer')

        // Clear all filter Button
        //cy.get('.button__red').click()

        // Apply Button
        cy.get('.filter__button--flex > .button__blue').click()

        // Assertion
        cy.get('.empty-table-message > p').should('have.text','No data available')
         

    });

    it('Checking Button Works',()=>{
      
        cy.get('.filter--button').should('be.visible').click()
        cy.get('.filter__hide').should('be.visible').click()
    })
});