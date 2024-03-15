describe('Invalid Login', ()=>{
    it('Invalid Username and password', ()=>{
        cy.visit('login')
        cy.get('input[name= "username"]').type("Admin1")
        cy.get('input[name="password"]').type("Adminadmin")
        cy.get('button[type="submit"]').click()
    
    })
})