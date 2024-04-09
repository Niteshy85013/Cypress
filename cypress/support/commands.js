

 
// Session
Cypress.Commands.add('loginsession', (username, password) => {
  cy.session([username, password], () => {
    cy.visit('login')
    cy.get('input[name="username"]').type(username)
    cy.get('input[name="password"]').type(password)
    cy.get('button[type="submit"]').click();
    cy.wait(3000)
  })
})

Cypress.Commands.add('login', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
    cy.loginsession("admin","Adminadmin1!")
  });


  // Viewport
  Cypress.Commands.add('viewViewport', () => {
    cy.viewport(390, 844)
  });


// Logout
  Cypress.Commands.add('getLocalStorage', (key) => {
    cy.window().then((window) => {
        return window.localStorage.getItem(key);
    });
  });
Cypress.Commands.add('logout', () => {
  // Clear authentication token from local storage
  cy.clearLocalStorage('Token');
  // Check local storage to ensure authToken is null after clearing
  cy.getLocalStorage('Token').should('be.null');
  // Redirect user to login page
  cy.visit('/login');
  cy.url().should('include', '/login');
});


  
  
  


  


 

 





 

 
  