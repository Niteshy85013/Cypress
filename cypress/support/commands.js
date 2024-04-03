// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


// Cypress.Commands.add('login', () => {
//     // Visit the login page
//     cy.visit('login');
  
//     // Fill in the username and password fields
//     cy.get('input[name="username"]').type('admin');
//     cy.get('input[name="password"]').type('Adminadmin1!');
  
//     // Click on the login button
//     cy.get('button[type="submit"]').click();
//   });

 
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
    cy.loginsession("admin","Adminadmin1!")
  });



  // Viewport
  Cypress.Commands.add('viewViewport', () => {
    cy.viewport(390, 844)
  });






// Cypress.Commands.add('loginAndStartSession', () => {
//   cy.visit('login');
//   cy.get('input[name="username"]').type('admin');
//   cy.get('input[name="password"]').type('Adminadmin1!');
//   cy.get('button[type="submit"]').click();

//   cy.wait(3000);
  
//   // Retrieve the authentication token from local storage
//   cy.window().then(win => {
//     const authToken = win.localStorage.getItem('authToken');
//     if (!authToken) {
//       throw new Error('Authentication token not found in local storage');
//     }
//     // Store the authentication token in the Cypress environment
//     Cypress.env('authToken', authToken);
//   });
// });





// Cypress.Commands.add('loginAndStartSession', () => {
//   cy.request({
//     method: 'POST',
//     url: 'login',  
//     body: {
//       username: 'admin',
//       password: 'Adminadmin1!'
//     }
//   }).then((response) => {
//     if (response.status !== 200) {
//       throw new Error('Failed to login. Status: ' + response.status);
//     }
//     // Retrieve the authentication token from the response body
//     const authToken = response.body.authToken;

//     // Check if the authentication token exists
//     if (!authToken) {
//       throw new Error('Authentication token not found in response body');
//     }
//     // Store the authentication token in local storage
//     cy.window().then(win => {
//       win.localStorage.setItem('authToken', authToken);
//     });

//     cy.window().then(win => {
//       win.localStorage.getItem('authToken', authToken);
//     });
//     // Store the authentication token in the Cypress environment
//     Cypress.env('authToken', authToken);
//   });
// });

 
  