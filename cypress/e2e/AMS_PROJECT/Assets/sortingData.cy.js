
describe('Sorting', () => {
    beforeEach(()=>{
        cy.loginsession("admin","Adminadmin1!")
    })

    it('sorting by name',()=>{

        cy.visit('/assets')
        cy.get(':nth-child(2) > span').click()
        
    });
    
});
















 