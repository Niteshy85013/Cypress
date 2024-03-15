describe('Checkbox Test', () => {
    it('should check the checkbox', () => {
        // Visit the webpage
        cy.visit('http://www.automationpractice.pl/index.php?id_category=3&controller=category');

        // Use cy.get() to select the checkbox and check it
        cy.get('#layered_category_4').check();

        // Verify that the checkbox is checked
        cy.get('#layered_category_4').should('be.checked');
    });
});
