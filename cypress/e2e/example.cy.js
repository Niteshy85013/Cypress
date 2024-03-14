describe('choose_departure_and_designation', () => {
    it('selection_of_departure', () => {
      cy.visit('https://blazedemo.com/')
      cy.contains('h1', 'Welcome to the Simple Travel Agency!').should('be.visible')
      cy.get('select[name="fromPort"]').select('Paris').should('have.value', 'Paris')
    })
})












