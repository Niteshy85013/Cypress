import 'cypress-file-upload'
import { faker } from '@faker-js/faker';

const Productname = faker.commerce.productName();

describe('Testing for Repair Section', () => {
    beforeEach(()=>{
        cy.login()
    })
    
    // Attempt to update with all fileds
    it('updating Data for repair', () => {
        cy.visit('/repair')
    
        cy.get('.edit__button').click()
        cy.wait(2000)

        // Selecting Product Owner
        cy.get(':nth-child(1) > select').then(dropdown => {
            const options = dropdown.find('option:not(:first)')
            const numOptions = options.length;
            const randomIndex = Math.floor(Math.random() * numOptions);
            const randomOptionText = options.eq(randomIndex).text();
            cy.log(randomOptionText)
            cy.wrap(dropdown).select(randomOptionText);
        });

        // Product Code
        cy.get(':nth-child(2) > .input__field > .toggle__showHide--container > .input-enabled').clear().type('508')

        // Product Name
        cy.get(':nth-child(3) > .input__field > .toggle__showHide--container > .input-enabled').clear().type(Productname)

    
        // Category
       cy.get(':nth-child(4) > .input-enabled').select('Furniture')

        // Selecting Repair or Replace
        cy.get('[value="Replace"]').check();

        //Assertion
        cy.get('[value="Replace"]').should('be.checked');

        // Reason for repair or replace
        cy.get(':nth-child(6) > .input__field > .toggle__showHide--container > .input-enabled').clear().type('Reason')

        cy.wait(2000)

        // Deleting Existing Image
        cy.get(':nth-child(1) > .button__red').click()

        // Image Upload
        cy.fixture('profile.png').then((fileContent)=>{
            cy.get('input[type="file"]').attachFile('profile.png')
        })

        cy.get('.user__profile--btn-right > .button__blue').should('be.visible').click()
        // cy.get('.toast__paragraph').should('have.text','Device has been listed to Repair')

    });


    // Attempt to update without product owner
    it.only('Adding Data without product owner', () => {
        cy.visit('/repair')
    
        cy.get('.edit__button').click()
        cy.wait(2000)

        // Product Code
        cy.get(':nth-child(2) > .input__field > .toggle__showHide--container > .input-enabled').clear().type('503')

        // Product Name
        cy.get(':nth-child(3) > .input__field > .toggle__showHide--container > .input-enabled').clear().type('mac book pro')

    
        // Category
       cy.get(':nth-child(4) > .input-enabled').select('Furniture')

        // Selecting Repair or Replace
        cy.get('[value="Repair"]').check();

        //Assertion
        cy.get('[value="Repair"]').should('be.checked');

        // Reason for repair or replace
        cy.get(':nth-child(6) > .input__field > .toggle__showHide--container > .input-enabled').clear().type('Reason')

     

        // Deleting Existing Image
        cy.get(':nth-child(1) > .button__red').click()
        // Image Upload
        cy.fixture('profile.png').then((fileContent)=>{
            cy.get('input[type="file"]').attachFile('profile.png')
        })
        cy.wait(2000)

        cy.get('.user__profile--btn-right > .button__blue').should('be.visible').click()
        // cy.get('.toast__paragraph').should('have.text','Device has been listed to Repair')

    });


});
