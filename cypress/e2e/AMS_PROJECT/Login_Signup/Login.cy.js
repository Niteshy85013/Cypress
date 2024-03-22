
describe('Login', () => {
    it('should login successfully with valid credentials', () => {
        cy.visit('login');
        cy.get('input[name="username"]').type('admin');
        cy.get('input[name="password"]').type('Adminadmin1!');
        // Assertion
        cy.contains('.user__auth--ques', 'Already have an account?').should('be.visible')
        cy.get('button[type="submit"]').click();
        //cy.get('a[href="/"]').should('be.visible');
         
        
    });

    // Invalid username and password 
    it('Invalid Username and password', ()=>{
        cy.visit('login')
        cy.get('input[name= "username"]').type("Admin1")
        cy.get('input[name="password"]').type("Adminadmin")
        cy.get('button[type="submit"]').click()


        // Assertion
        cy.contains('.user__auth--ques, .login__ques', 'Dont have an account?').should('be.visible');
    
    });
});











