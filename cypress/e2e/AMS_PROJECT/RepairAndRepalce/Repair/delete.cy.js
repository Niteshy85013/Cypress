describe('Testing Delete Section', () => {
    beforeEach(()=>{
        cy.login()
          cy.visit("/repair");
    })

    // Deleting the second item of the list.
    it('Deleting the second Item', () => {
      
        cy.get('.delete__button').eq(1).click()
        cy.get('.delete__confirmation--button > .button__blue').click()
    });
    
});
