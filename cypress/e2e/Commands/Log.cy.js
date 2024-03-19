 
describe('Example Test', () => {
    it('Logs messages during test execution', () => {
      // Log a message to the Cypress command log
      cy.log('Starting the test...');
  
      // Perform some actions
      cy.visit('login');
      cy.get('input[name="username"]').type('example_user');
      cy.get('input[name="password"]').type('password123');
      cy.get('button[type="submit"]').click();
  
      // Log another message after performing actions
      cy.log('Form submitted successfully...');
    });
  });
  

  