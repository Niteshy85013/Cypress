describe('My Test', () => {
    it('example test', () => {
      // Visit the webpage
      cy.visit('login');
  
      // Use cy.get() to select an element and make multiple assertions using 'and'
      cy.get('button').should('be.visible').and('have.class', 'user__auth--button button__style');
  
      // You can also use 'and' with other commands, not just assertions
      cy.get('input[name="username"]').type('Nitesh').and('have.value', 'Nitesh');
    });
  });
  