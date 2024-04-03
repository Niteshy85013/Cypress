import { faker } from "@faker-js/faker";
import 'cypress-file-upload'

const email = faker.internet.email();

describe('Employees section Testing', () => {
    beforeEach(()=>{
        cy.login()
        
    });

    // Adding Employees with valid data
    it('Adding Employees',()=>{

        cy.visit('/employees')
        cy.get('.button__blue').should('be.visible').click()
        cy.get('input[name="username"]').type('DemoAdmin')
        cy.get('input[name="designation"]').type('QA')
        cy.get(':nth-child(4) > .input-enabled').select('Books')
      
        cy.get('input[name="email"]').type(email)

        cy.get('input[name="phoneNumber"]').type('9852011111')

        cy.fixture('demo.jpg').then((fileContent) => {
            cy.get('input[type="file"]').attachFile('demo.jpg');
          });

          cy.wait(2000)

        cy.get('.user__profile--btn > .button__blue').should('be.visible').click()
    });

    // Adding Employees with Existing Data
    it('Adding Employees',()=>{

        cy.visit('/employees')
        cy.get('.button__blue').should('be.visible').click()
        cy.get('input[name="username"]').type('DemoAdmin')
        cy.get('input[name="designation"]').type('QA')
        cy.get(':nth-child(4) > .input-enabled').select('Books')
      
        cy.get('input[name="email"]').type(email)

        cy.get('input[name="phoneNumber"]').type('9852011111')

        cy.fixture('demo.jpg').then((fileContent) => {
            cy.get('input[type="file"]').attachFile('demo.jpg');
          });

          cy.wait(2000)

        cy.get('.user__profile--btn > .button__blue').should('be.visible').click()
    });


    // Adding  Employee without Image 
    it('Adding Employees',()=>{

        cy.visit('/employees')
        cy.get('.button__blue').should('be.visible').click()
        cy.get('input[name="username"]').type('DemoAdmin')
        cy.get('input[name="designation"]').type('QA')
        cy.get(':nth-child(4) > .input-enabled').select('Books')
      
        cy.get('input[name="email"]').type(email)

        cy.get('input[name="phoneNumber"]').type('9852011111')

          cy.wait(2000)

        cy.get('.user__profile--btn > .button__blue').should('be.visible').click()
    });

    // Submitting the form without entering data
    it.only('Adding Employees',()=>{

        cy.visit('/employees')
        cy.get('.button__blue').should('be.visible').click()
        

        cy.get('.user__profile--btn > .button__blue').should('be.visible').click()
    });
    
});
