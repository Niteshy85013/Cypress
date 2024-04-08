describe('Testing for Filter section',()=>{
    beforeEach(()=>{
        cy.login()
    })

    it('Searching with all data',()=>{
        cy.visit('/procurement')

        // Filter Button
        cy.get('.filter--button').click()

        cy.wait(3000)
        // Requested By
        cy.get(':nth-child(1) > select').then(dropdown => {
            const options = dropdown.find('option:not(:first)')
            // const firstOption = options.first();
            // firstOption.remove();
            const numOptions = options.length;
            const randomIndex = Math.floor(Math.random() * numOptions);
            const randomOptionText = options.eq(randomIndex).text();
            cy.log(randomOptionText)
            cy.wrap(dropdown).select(randomOptionText);
        });

        cy.wait(3000)
        // Verfified By
        cy.get(':nth-child(2) > select').then(dropdown => {
            const options = dropdown.find('option:not(:first)')
            
            // const firstOption = options.first();
            // firstOption.remove();
            const numOptions = options.length;
            const randomIndex = Math.floor(Math.random() * numOptions);
            const randomOptionText = options.eq(randomIndex).text();
            cy.log(randomOptionText)
            cy.wrap(dropdown).select(randomOptionText);
        });

        cy.wait(3000)
        // Status
        cy.get(':nth-child(3) > .input-enabled').then(dropdown => {
            const options = dropdown.find('option:not(:first)')
            
            // const firstOption = options.first();
            // firstOption.remove();
            const numOptions = options.length;
            const randomIndex = Math.floor(Math.random() * numOptions);
            const randomOptionText = options.eq(randomIndex).text();
            cy.log(randomOptionText)
            cy.wrap(dropdown).select(randomOptionText);
        });

        // Assign Date: From
        cy.get(':nth-child(4) > .input__field > .toggle__showHide--container > .input-enabled').type('2024-04-05')

        // Assign Date: To
        cy.get(':nth-child(5) > .input__field > .toggle__showHide--container > .input-enabled').type('2024-04-08')

        // Apply Filter Button
        //cy.get('.filter__button--flex > .button__blue').should('be.visible').click()

        // Clear Filter Button
        cy.get('.button__red').should('be.visible').click()


    });

});