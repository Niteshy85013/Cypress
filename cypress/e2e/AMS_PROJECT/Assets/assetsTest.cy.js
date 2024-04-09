import { faker } from "@faker-js/faker";
import 'cypress-file-upload'

const name = faker.commerce.productMaterial()

describe('Testing for Assets Section', () => {
    beforeEach(()=>{
        cy.login()
    })
    // Add with valid data
    it.only('Assets Add with valid data', () => {
        cy.visit('/assets');
        cy.get('.button__blue').click();
        cy.get('input[name="productName"]').type(name);
        cy.get('input[name="brandCompany"]').type(name);

        cy.get('.form--content__right > :nth-child(2) > .select__enabled').select('Hardware');
            cy.wait(2000)
        // Select a random category from the dropdown
        cy.get('.form--content__right > :nth-child(3) > .select__enabled').then(dropdown => {
            const options = dropdown.find('option:not(:first)')
            const numOptions = options.length;
            const randomIndex = Math.floor(Math.random() * numOptions);
            const randomOptionText = options.eq(randomIndex).text();
            cy.log(randomOptionText)
            cy.wrap(dropdown).select(randomOptionText);
        });

        cy.wait(2000)
        // Select a random location from the dropdown
        cy.get('.form--content__left > :nth-child(2) > .select__enabled').then(dropdown => {
            const options1 = dropdown.find('option:not(:first)')
            const numOptions1 = options1.length;
            const randomIndex = Math.floor(Math.random() * numOptions1);
            const randomOptionText = options1.eq(randomIndex).text();
            cy.wrap(dropdown).select(randomOptionText);
        });

        cy.wait(2000)
        // Select a random Assign To from the dropdown
        cy.get('.form--content__left > :nth-child(3) > .select__enabled').then(dropdown => {
            const options2 = dropdown.find('option:not(:first)')
            const numOptions2 = options2.length;
            const randomIndex = Math.floor(Math.random() * numOptions2);
            const randomOptionText = options2.eq(randomIndex).text();
            cy.wrap(dropdown).select(randomOptionText);
        });

        // // Click on the toggle button to activate it
        cy.get('.status').click();

        // Image Upload
        cy.fixture('faker.png').then((fileContent) => {
            cy.get('input[type="file"]').attachFile('faker.png');
          });

        
        cy.get('.assets__form--btn > .button__blue').click()

        // Asserting Toast message
        cy.get('.toast__paragraph').should('have.text', 'Assets has been added');

    });

    // Add With Invalid Product Name
    it('Assets Add with invalid Product Name', () => {
          cy.visit('/assets');
          cy.get('.button__blue').click();
          cy.get('input[name="productName"]').type('DemoTest@123');
          cy.get('input[name="brandCompany"]').type(name);
  
          cy.get('.form--content__right > :nth-child(2) > .select__enabled').select('Hardware');
          cy.wait(2000)
          cy.get('.form--content__right').find(':nth-child(3) > .select__enabled').select('Electronics')
  
          cy.get('.form--content__left').find(':nth-child(2) > .select__enabled').select('Top Floor')
  
          cy.get('.form--content__left').find(':nth-child(3) > .select__enabled').select('rahul') 
          cy.get('.assets__form--btn > .button__blue').click()
      });

    // Add With Blank Product Name
    it('Add With Blank Product Name', () => {
         
          cy.visit('/assets');
         
          cy.get('.button__blue').click();
          cy.get('input[name="productName"]').type(' ');
          cy.get('input[name="brandCompany"]').type(name);
          cy.get('.form--content__right > :nth-child(2) > .select__enabled').select('Software');
          cy.wait(2000)
          cy.get('.form--content__right').find(':nth-child(3) > .select__enabled').select('Electronics')
          cy.get('.form--content__left').find(':nth-child(2) > .select__enabled').select('Top Floor')
          cy.get('.form--content__left').find(':nth-child(3) > .select__enabled').select('rahul')
          cy.get('.assets__form--btn > .button__blue').click()
      });

      // Attemp to save the data with all fields empty
      it('Attemp to save the data with all fields empty', () => {
          cy.visit('/assets');
          cy.get('.button__blue').click();
          cy.get('.assets__form--btn > .button__blue').click()
      });

// Update Assets

it('Updating with valid Data',()=>{
    cy.visit('/assets')
    cy.get(':nth-child(1) > .button-gap > .edit__button').click()
    cy.get('input[name="productName"]').type(name);
    cy.wait(3000)

    // Selecting category
    cy.get('.form--content__right').find(':nth-child(3) > .select__enabled').select('Electronics')
    cy.wait(3000)
    cy.get('.status').click()
    cy.get('.assets__form--btn > .button__blue').click()



})

    //Deleting the Assets
    it('Deleting the Assets', ()=>{
        cy.visit('/assets')
        cy.url().should('contains',"assets")
        // Delete Icon 
        cy.get(':nth-child(1) > .button-gap > .delete__button').click()

        // Proceed Button
        cy.get('.delete__confirmation--button > .button__blue').click()
    });

    //View Detail of Asstes
    it('View Detail of Asstes', ()=>{
      
        cy.visit('/assets')
        cy.url().should('contains',"/assets")
        // View Icon 
        cy.get(':nth-child(1) > .button-gap > .view__button').click()
        cy.wait(3000)

        // Cancle Detail Icon
        cy.get('.button__red').click()
    });
});


















