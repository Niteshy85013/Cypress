import { faker } from "@faker-js/faker";
import 'cypress-file-upload'


const brand = faker.company.name()
const name = faker.commerce.productMaterial()

describe('Testing for Assets Section', () => {
    it('Assets Add form ', () => {
        cy.login();
        cy.wait(3000);
        cy.visit('assets');

        cy.get('.button__blue').click();
        cy.get('input[name="productName"]').type(name);
        cy.get('input[name="brandCompany"]').type(name);

        cy.get('.form--content__right > :nth-child(2) > .select__enabled').select('Hardware');
            cy.wait(2000)
        // Select a random category from the dropdown
        cy.get('.form--content__right > :nth-child(3) > .select__enabled').then(dropdown => {
            const options = Cypress.$(dropdown).find('[value]');
            
            const firstOption = options.first();
            firstOption.remove();
            const numOptions = options.length;
            const randomIndex = Math.floor(Math.random() * numOptions);
            const randomOptionText = options.eq(randomIndex).text();
            cy.log(randomOptionText)
            cy.wrap(dropdown).select(randomOptionText);
        });
        

        //cy.get('.form--content__right').find(':nth-child(3) > .select__enabled').select('Furniture')


        cy.wait(2000)
        // Select a random location from the dropdown
        cy.get('.form--content__left > :nth-child(2) > .select__enabled').then(dropdown => {
            const options = Cypress.$(dropdown).find('[value]');
            const firstOption = options.first();
            firstOption.remove();
            const numOptions = options.length;
            const randomIndex = Math.floor(Math.random() * numOptions);
            const randomOptionText = options.eq(randomIndex).text();
            
            cy.wrap(dropdown).select(randomOptionText);
        });

        //cy.get('.form--content__left').find(':nth-child(2) > .select__enabled').select('Top Floor')
         
cy.wait(2000)
        // Select a random Assign To from the dropdown
        cy.get('.form--content__left > :nth-child(3) > .select__enabled').then(dropdown => {
            const options = Cypress.$(dropdown).find('[value]');
            const firstOption = options.first();
            firstOption.remove();
            const numOptions = options.length;
            const randomIndex = Math.floor(Math.random() * numOptions);
            const randomOptionText = options.eq(randomIndex).text();
            
            cy.wrap(dropdown).select(randomOptionText);
        });
        

        //cy.get('.form--content__left').find(':nth-child(3) > .select__enabled').select('rahul')
         
        


        // // Assert that the button is initially in the inactive state
        // cy.get('.toggle-button-selector').should('have.class', 'inactive'); 

        // // Click on the toggle button to activate it
        // cy.get('.toggle-button-selector').click();

        // // Assert that the button is now in the active state
        // cy.get('.toggle-button-selector').should('have.class', 'active');  

        cy.wait(2000)
        // Image Upload
        cy.get('.upload__image--file > .button__blue').attachFile('faker.png')
        
        //cy.wait(5000)
         
        //cy.get('.assets__form--btn > .button__blue').click()
    });
});



// const options = Cypress.$(dropdown).find('option');
            // const randomIndex = Cypress._.random(options.length - 1);
            // const randomCategory = options.eq(randomIndex).text();
            // // Select the randomly picked category














