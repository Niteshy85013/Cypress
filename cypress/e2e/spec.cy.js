describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://asset-management-system-one.vercel.app/')
    cy.get('')
  })
})

describe('My Test', () => {
  it('example test', () => {
    // Visit the webpage
    cy.visit('login');

    // Use cy.get() to select an element and make multiple assertions using 'and'
    cy.get('button').should('be.visible').and('have.class', 'btn-primary');

    // You can also use 'and' with other commands, not just assertions
    cy.get('input[type="text"]').type('Hello').and('have.value', 'Hello');
  });
});














