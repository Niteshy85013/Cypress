import { faker } from "@faker-js/faker";
import 'cypress-file-upload'

const email = faker.internet.email();
const name = faker.random.alpha({ count: 10 });
const maxLength = 5;
const designation = faker.name.jobTitle().substring(0, maxLength);
 
 

describe('Testing for Employees Update Functionality', () => {
    beforeEach(() => {
        // Login before each test case
        cy.login();
    });

    // Updating with valid Data
    it('Updating with valid data', () => {
        cy.visit('/employees');

        // Click on the edit button for the first employee
        cy.get(':nth-child(1) > .button-gap > .edit__button').click();

        // Update username
        cy.get('input[name="username"]').clear().type(name);

        // Check the "Temporary" option
        cy.get('[value="Temporary"]').check();

        // Verify that the "Temporary" option is checked
        cy.get('[value="Temporary"]').should('be.checked');

        // Update designation
        
        cy.get('input[name="designation"]').clear().type(designation);


        cy.get(':nth-child(4) > .input-enabled').select('QA')
        // Update email
        cy.get('input[name="email"]').clear().type(email);

        // Update phone number
        cy.get('input[name="phoneNumber"]').clear().type('+9779898989898');

        // Delete the previous image (if needed)
        cy.get('.profile__button--container > .button__red').click();

        // Upload a new image
        cy.fixture('profile.png').then((fileContent) => {
            cy.get('input[type="file"]').attachFile('profile.png');
        });

        // Click on the "Save Changes" button
        cy.get('.button__blue').click();
    });

    // Attempt to Updating without any changes in data
    it('Updating with no changes in data', () => {
        cy.visit('/employees');

        // Click on the edit button for the first employee
        cy.get(':nth-child(1) > .button-gap > .edit__button').click();

        // Click on the "Save Changes" button
        cy.get('.button__blue').click();
    });


    // Updating with invalid Username
    it('Updating with valid data', () => {
        cy.visit('/employees');

        // Click on the edit button for the first employee
        cy.get(':nth-child(1) > .button-gap > .edit__button').click();

        // Update username
        cy.get('input[name="username"]').clear().type('user123');

        // Check the "Temporary" option
        cy.get('[value="Temporary"]').check();

        // Verify that the "Temporary" option is checked
        cy.get('[value="Temporary"]').should('be.checked');

        // Update designation
        
        cy.get('input[name="designation"]').clear().type(designation);


        cy.get(':nth-child(4) > .input-enabled').select('QA')

        // Update email
        cy.get('input[name="email"]').clear().type(email);

        // Update phone number
        cy.get('input[name="phoneNumber"]').clear().type('+9779898989898');

        // Delete the previous image (if available)
        cy.get('.profile__button--container > .button__red').click();

        // Upload a new image
        cy.fixture('profile.png').then((fileContent) => {
            cy.get('input[type="file"]').attachFile('profile.png');
        });

        // Click on the "Save Changes" button
        cy.get('.button__blue').click();
    });

    // Updating without image 
    it.only('Updating with valid data', () => {
        cy.visit('/employees');

        // Click on the edit button for the first employee
        cy.get(':nth-child(1) > .button-gap > .edit__button').click();

        // Update username
        cy.get('input[name="username"]').clear().type(name);

        // Check the "Temporary" option
        cy.get('[value="Temporary"]').check();

        // Verify that the "Temporary" option is checked
        cy.get('[value="Temporary"]').should('be.checked');

        // Update designation
        
        cy.get('input[name="designation"]').clear().type(designation);


        cy.get(':nth-child(4) > .input-enabled').select('QA')

        // Update email
        cy.get('input[name="email"]').clear().type(email);

        // Update phone number
        cy.get('input[name="phoneNumber"]').clear().type('+9779898989898');

        // Delete the previous image (if available)
        cy.get('.profile__button--container > .button__red').click();

        // Upload a new image
        // cy.fixture('profile.png').then((fileContent) => {
        //     cy.get('input[type="file"]').attachFile('profile.png');
        // });

        // Click on the "Save Changes" button
        cy.get('.user__profile--btn > .button__blue').click();
    });
});

