describe('',()=>{
    beforeEach(()=>{
        cy.loginsession("admin","Adminadmin1!")
    })

    it('Filtering Data',()=>{
        cy.visit('/assets')
        cy.get('.filter--button').click()
        cy.get('.group__form > :nth-child(1) > .input-enabled').select('Cutleries')
        cy.get(':nth-child(2) > .input-enabled').select('Active')
        //cy.get(':nth-child(3) > .toggle__showHide--container > .input-enabled').click().type('2024/03/29')


        // Clear all filter Button
        //cy.get('.button__red').click()

        // Apply Button
        cy.get('.filter__button--flex > .button__blue').click()
         

    });

    it.only('',()=>{
        cy.visit('/assets')
        cy.get('.filter--button').should('be.visible').click()
        cy.get('.filter__hide').should('be.visible').click()
    })
});