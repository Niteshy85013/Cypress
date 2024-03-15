describe('My First Test', () => {
  it('input value', () => {
    cy.visit('https://www.w3schools.com/')

    //cy.get('.example').type('Python')
    //cy.get('#search2').should('be.visible').and('be.enabled').type('python');
    cy.get('button[type="submit"]').click()

    //cy.get('.search2').type('hello')
    
  })
})