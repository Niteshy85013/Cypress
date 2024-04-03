import { faker } from "@faker-js/faker";
import 'cypress-file-upload'

const email = faker.internet.email();

describe('Employees section Testing', () => {
    beforeEach(()=>{
        cy.login()
    });

    // Deleting Employees
    it.only('Delete Employees',()=>{

        cy.visit('/employees')

        // Delete icon
        cy.get(':nth-child(1) > .button-gap > .delete__button').click()

        // Proceed button
        cy.get('.delete__confirmation--button > .button__blue').click()
    });
});
