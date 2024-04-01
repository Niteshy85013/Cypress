import { faker } from "@faker-js/faker";
import 'cypress-file-upload'


const brand = faker.company.name()
const name = faker.commerce.productMaterial()

describe('Testing for Assets Section', () => {
    beforeEach(()=>{
        cy.loginsession("admin","Adminadmin1!")
    })

    // Add with valid data
    it('Assets Add with valid data', () => {
        cy.visit('/assets');
       
        cy.get('.button__blue').click();
        cy.get('input[name="productName"]').type(name);
        cy.get('input[name="brandCompany"]').type(name);

        cy.get('.form--content__right > :nth-child(2) > .select__enabled').select('Hardware');
            cy.wait(2000)
        // Select a random category from the dropdown
        cy.get('.form--content__right > :nth-child(3) > .select__enabled').then(dropdown => {
            const options = dropdown.find('option:not(:first)')
            
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
            const options = dropdown.find('option:not(:first)')
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
            const options = dropdown.find('option:not(:first)')
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

       // cy.wait(2000)
        // Image Upload
        cy.get('input[type="file"]').attachFile('faker.png')
        
        //cy.wait(5000)
         
        cy.get('.assets__form--btn > .button__blue').click()
    });

    // Add With Invalid Product Name
    it('Assets Add with valid data', () => {
        
          cy.visit('/assets');
         
          cy.get('.button__blue').click();
          cy.get('input[name="productName"]').type('DemoTest@123');
          cy.get('input[name="brandCompany"]').type(name);
  
          cy.get('.form--content__right > :nth-child(2) > .select__enabled').select('Hardware');
              cy.wait(2000)
          // Select a random category from the dropdown
          // cy.get('.form--content__right > :nth-child(3) > .select__enabled').then(dropdown => {
          //     const options = Cypress.$(dropdown).find('[value]');
              
          //     const firstOption = options.first();
          //     firstOption.remove();
          //     const numOptions = options.length;
          //     const randomIndex = Math.floor(Math.random() * numOptions);
          //     const randomOptionText = options.eq(randomIndex).text();
          //     cy.log(randomOptionText)
          //     cy.wrap(dropdown).select(randomOptionText);
          // });
          
  
          cy.get('.form--content__right').find(':nth-child(3) > .select__enabled').select('Electronics')
  
  
      
          // Select a random location from the dropdown
          // cy.get('.form--content__left > :nth-child(2) > .select__enabled').then(dropdown => {
          //     const options = Cypress.$(dropdown).find('[value]');
          //     const firstOption = options.first();
          //     firstOption.remove();
          //     const numOptions = options.length;
          //     const randomIndex = Math.floor(Math.random() * numOptions);
          //     const randomOptionText = options.eq(randomIndex).text();
              
          //     cy.wrap(dropdown).select(randomOptionText);
          // });
  
          cy.get('.form--content__left').find(':nth-child(2) > .select__enabled').select('Top Floor')
           
   
          // Select a random Assign To from the dropdown
          // cy.get('.form--content__left > :nth-child(3) > .select__enabled').then(dropdown => {
          //     const options = Cypress.$(dropdown).find('[value]');
          //     const firstOption = options.first();
          //     firstOption.remove();
          //     const numOptions = options.length;
          //     const randomIndex = Math.floor(Math.random() * numOptions);
          //     const randomOptionText = options.eq(randomIndex).text();
              
          //     cy.wrap(dropdown).select(randomOptionText);
          // });
          
  
          cy.get('.form--content__left').find(':nth-child(3) > .select__enabled').select('rahul')
           
      
  
          // // Assert that the button is initially in the inactive state
          // cy.get('.toggle-button-selector').should('have.class', 'inactive'); 
  
          // // Click on the toggle button to activate it
          // cy.get('.toggle-button-selector').click();
  
          // // Assert that the button is now in the active state
          // cy.get('.toggle-button-selector').should('have.class', 'active');  
  
         // cy.wait(2000)
          // Image Upload
          //cy.get('.upload__image--file > .button__blue').attachFile('faker.png')
          
          //cy.wait(5000)
           
          cy.get('.assets__form--btn > .button__blue').click()
      });

    // Add With Blank Product Name
    it('Assets Add with valid data', () => {
         
          cy.visit('/assets');
         
          cy.get('.button__blue').click();
          cy.get('input[name="productName"]').type(' ');
          cy.get('input[name="brandCompany"]').type(name);
  
          cy.get('.form--content__right > :nth-child(2) > .select__enabled').select('Software');
              cy.wait(2000)
          // Select a random category from the dropdown
          // cy.get('.form--content__right > :nth-child(3) > .select__enabled').then(dropdown => {
          //     const options = Cypress.$(dropdown).find('[value]');
              
          //     const firstOption = options.first();
          //     firstOption.remove();
          //     const numOptions = options.length;
          //     const randomIndex = Math.floor(Math.random() * numOptions);
          //     const randomOptionText = options.eq(randomIndex).text();
          //     cy.log(randomOptionText)
          //     cy.wrap(dropdown).select(randomOptionText);
          // });
          
  
          cy.get('.form--content__right').find(':nth-child(3) > .select__enabled').select('Electronics')
           

  
  
      
          // Select a random location from the dropdown
          // cy.get('.form--content__left > :nth-child(2) > .select__enabled').then(dropdown => {
          //     const options = Cypress.$(dropdown).find('[value]');
          //     const firstOption = options.first();
          //     firstOption.remove();
          //     const numOptions = options.length;
          //     const randomIndex = Math.floor(Math.random() * numOptions);
          //     const randomOptionText = options.eq(randomIndex).text();
              
          //     cy.wrap(dropdown).select(randomOptionText);
          // });
  
          cy.get('.form--content__left').find(':nth-child(2) > .select__enabled').select('Top Floor')
           
   
          // Select a random Assign To from the dropdown
          // cy.get('.form--content__left > :nth-child(3) > .select__enabled').then(dropdown => {
          //     const options = Cypress.$(dropdown).find('[value]');
          //     const firstOption = options.first();
          //     firstOption.remove();
          //     const numOptions = options.length;
          //     const randomIndex = Math.floor(Math.random() * numOptions);
          //     const randomOptionText = options.eq(randomIndex).text();
              
          //     cy.wrap(dropdown).select(randomOptionText);
          // });
          
  
          cy.get('.form--content__left').find(':nth-child(3) > .select__enabled').select('rahul')
           
      
  
          // // Assert that the button is initially in the inactive state
          // cy.get('.toggle-button-selector').should('have.class', 'inactive'); 
  
          // // Click on the toggle button to activate it
          // cy.get('.toggle-button-selector').click();
  
          // // Assert that the button is now in the active state
          // cy.get('.toggle-button-selector').should('have.class', 'active');  
  
         // cy.wait(2000)
          // Image Upload
          //cy.get('.upload__image--file > .button__blue').attachFile('faker.png')
          
          //cy.wait(5000)
           
          cy.get('.assets__form--btn > .button__blue').click()
      });

      // Attemp to save the data with all fields empty
      it('Attemp to save the data with all fields empty', () => {

          cy.visit('/assets');
          cy.get('.button__blue').click();
          cy.get('.assets__form--btn > .button__blue').click()
      });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// Update Assets

it.only('Updating with valid Data',()=>{
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
    it('Deleting the Asstes', ()=>{
      
        cy.visit('/assets')
        // cy.url().should('contains',"assets")
        // View Icon 
        cy.get(':nth-child(1) > .button-gap > .view__button').click()
        cy.wait(3000)

        // Cancle Detail Icon
        cy.get('.button__red').click()
    });
});


















