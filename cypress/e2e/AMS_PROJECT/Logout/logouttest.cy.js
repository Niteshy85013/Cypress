describe('Testing for logout Functionality', () => {
    beforeEach(()=>{
        cy.login()
    })

    it('logout', () => {
        cy.logout()
    });
    
});
