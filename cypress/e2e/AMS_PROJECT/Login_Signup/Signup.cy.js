describe('Signup Functionality', ()=>{
    it('', ()=>{
        cy.visit('signup')
        cy.get('input[name="name"]').type('Testing Data')
        cy.get('input[name="username"]').type('testingdata')
        cy.get('input[name="email"]').type('testing@gmail.com')
        cy.get('input[name= "password"]').type("Password@1234")
        cy.get('input[name="RetypePassword"]').type('Password@1234')

        // Assertion
        //cy.contains('user__auth--ques','Already have an account?').should('be.visible')
        cy.contains('.user__auth--ques p', 'Already have an account?').should('be.visible')
        // Wait for 5 sec
        cy.wait(5000)

    
        cy.get('.user__auth--button, .button__style').click()
    })

})