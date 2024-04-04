describe('login check', () => {
    beforeEach(()=>{
        cy.loginAndStartSession()
    })

    it('check', () => {
        cy.visit('/assets')
        
    });
    
});





