describe('Login', () =>{
    it('Login is successfully', ()=>{
        // Visit login Page
        cy.visit('https://asset-management-system-one.vercel.app/login')

        // Locate the username input  field and type a valid username
        cy.get('input[name ="username"]').type("admin");

        // Locate the password  input field and type password
        cy.get('input[name= "password"]').type("Adminadmin1!");


        // Locate the submit button and click it
        cy.get('button').click();


        cy.get('a[href= "/dashboard"]').should( 'be.visible');

    
    });
});