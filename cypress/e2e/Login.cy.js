describe('Login', () => {
    it('should login successfully with valid credentials', () => {
        // Visit the login page
        cy.visit('https://asset-management-system-one.vercel.app/login');

        // Type a valid username into the username input field
        cy.get('input[name="username"]').type('admin');

        // Type a valid password into the password input field
        cy.get('input[name="password"]').type('Adminadmin1!');

        // Click the submit button to login
        cy.get('button[type="submit"]').click();

        // Verify that the dashboard link is visible after successful login
        cy.get('a[href="/"]').should('be.visible');
    });
});











