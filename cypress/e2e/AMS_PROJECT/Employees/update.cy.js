import { faker } from "@faker-js/faker";
import 'cypress-file-upload'

const email = faker.internet.email();
const name = faker.internet.userName();
const designation = faker.name.jobTitle();


describe('Testing for Employees Update Functionality', () => {
    beforeEach(()=>{
        cy.login()

    })

    it.only('Updating with valid data',()=>{
        cy.visit('/employees')
        cy.get(':nth-child(1) > .button-gap > .edit__button').click()
        cy.get('input[name="username"]').type(name)
        cy.get('[value="Temporary"]').check()

        // Assertion
        cy.get('[value="Temporary"]').should('be.checked')
        cy.get('input[name="designation"]').type(designation)
        cy.get('input[name="email"]').type(email)
        cy.get('input[name="phoneNumber"]').type('9898989898')

        // Image Upload
        cy.fixture('profile.png').then((fileContent) => {
            cy.get('input[type="file"]').attachFile('profile.png');
          });


        cy.get('.button__blue').click()
        

    })

});
