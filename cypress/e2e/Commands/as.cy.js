describe('Login Button', () => {
    it('should be clickable', () => {
      cy.visit('login');

      // Select the "user__auth--button button__style" button and alias it as "LoginButton"
      //cy.get('.user__auth--button button__style')
      cy.get('.user__auth--button, .button__style').as('loginButton');

      // Click on the "LoginButton" button
      cy.get('@loginButton').click();

    });
  });
  

  // Note Login button class name is not acceptable according to the error message.