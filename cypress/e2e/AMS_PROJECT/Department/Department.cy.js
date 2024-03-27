import { faker } from "@faker-js/faker";
const department = faker.commerce.department();
describe('Testing for Department Sections', () => {
    
    it('Add Department', () => {
        cy.login()

        cy.wait(4000)

        cy.visit('departments');
        
        cy.get('.content__header').should('have.text', 'Department');
        cy.contains('.add__category--title p', 'Add a Department').should('be.visible');
        cy.get('.add__category--title > span').should('have.text', 'Enter the department to list in the employees section.');
        cy.get('input[name="department"]').type(department);
        cy.get('button[type="submit"]').click();
    });

    // Invalid empty Tests
    it('Try to Add empty Department', () => {
        cy.login()

        cy.wait(4000)

        cy.visit('departments');
        
        cy.get('.content__header').should('have.text', 'Department');
        cy.contains('.add__category--title p', 'Add a Department').should('be.visible');
        cy.get('.add__category--title > span').should('have.text', 'Enter the department to list in the employees section.');
        cy.get('input[name="department"]').type('');
        cy.get('button[type="submit"]').click();
    });

    // Invalid special character Tests Data
    it('Try to Add Department with special character', () => {
        cy.login()

        cy.wait(4000)

        cy.visit('departments');
        
        cy.get('.content__header').should('have.text', 'Department');
        cy.contains('.add__category--title p', 'Add a Department').should('be.visible');
        cy.get('.add__category--title > span').should('have.text', 'Enter the department to list in the employees section.');
        cy.get('input[name="department"]').type('HR@Management');
        cy.get('button[type="submit"]').click();
    });

    // Invalid leading character Tests Data
    it('Try to Add Department with special character', () => {
        cy.login()

        cy.wait(4000)

        cy.visit('departments');
        
        cy.get('.content__header').should('have.text', 'Department');
        cy.contains('.add__category--title p', 'Add a Department').should('be.visible');
        cy.get('.add__category--title > span').should('have.text', 'Enter the department to list in the employees section.');
        cy.get('input[name="department"]').type(' HR Management');
        cy.get('button[type="submit"]').click();
    });

    // Duplicate Value
    it('Try to Add Department with Duplicate value', () => {
        cy.login()

        cy.wait(4000)

        cy.visit('departments');
        
        cy.get('.content__header').should('have.text', 'Department');
        cy.contains('.add__category--title p', 'Add a Department').should('be.visible');
        cy.get('.add__category--title > span').should('have.text', 'Enter the department to list in the employees section.');
        cy.get('input[name="department"]').type('Frontend');
        cy.get('button[type="submit"]').click();
    });


    //Deleting the Department
    it('Deleting the Department', ()=>{
        cy.login()
        cy.wait(3000)
        cy.visit('departments')
        cy.get(':nth-child(1) > .button-gap > .delete__button').click()
        cy.get('.delete__confirmation--button > .button__blue').click()
    });

    // Updating department
    it('Updating Department with valid data',()=>{
        cy.login()
        cy.wait(3000)
        cy.visit('departments')
        cy.get(':nth-child(1) > .button-gap > .edit__button').click()
        cy.get('.universal__td--border').type(department)
     
         
       // Save icon
        cy.get('.universal__FormButton button:first-child').should('be.visible').click()
        // close icon
        //cy.get('[type="button"]').should('be.visible').click();

    });


     // Updating department with invalid data
     it('Updating Department with invalid data',()=>{
        cy.login()
        cy.wait(3000)
        cy.visit('departments')
        cy.get(':nth-child(1) > .button-gap > .edit__button').click()
        cy.get('.universal__td--border').type('demo@')
    
       // Save icon
        cy.get('.universal__FormButton button:first-child').should('be.visible').click()

        // close icon
        //cy.get('[type="button"]').should('be.visible').click();
    });

    // Updating department with blank data
    it.only('Updating Department with invalid data',()=>{
        cy.login()
        cy.wait(3000)
        cy.visit('departments')
        cy.get(':nth-child(1) > .button-gap > .edit__button').click()
        cy.get('.universal__td--border').type(' ')
    
       // Save icon
        cy.get('.universal__FormButton button:first-child').should('be.visible').click()

        // close icon
        //cy.get('[type="button"]').should('be.visible').click();
    });
});
