import { faker } from "@faker-js/faker"


describe('Input Fields', ()=>{
    it.only('Checking for Inputfields',()=>{
        cy.visit('https://testautomationpractice.blogspot.com/')

        const name = faker.person.firstName()
         const email = faker.internet.email()
         const phone = faker.phone.number()

        cy.get('#name').type(name)
        cy.get('#email').type(email)
        cy.get('#phone').type(phone)
        cy.get('#textarea').type('This is a textarea field')

        // Assertion Title
        //cy.get('.title').should('have.text', 'Automation Testing Practice');
        //cy.get(':nth-child(45) > [data-layer="Content"]').should('have.text', 'Automation Testing Practice');
        //cy.contains(':nth-child(45) > [data-layer="Content"]','Automation Testing Practice').should('be.visible')


        // For Radio buttons
        cy.get('input[value="male"]').check();

        // Aassertion for checkbox
        cy.get('input[value="male"]').should('be.checked');


        // Multiple selection
        //cy.get('.form-check.form-check-inline input[type="checkbox"]').check();

        // Single selection
        cy.get('input[value="sunday"]').check();

        // Assertion
        cy.get('input[value="sunday"]').should('be.checked')

        // Dropdown  menu 
        cy.get('#country').select('uk')

        // Assertion
        cy.get('#country').should('have.value', 'uk');


        // Select the options
        cy.get('#colors').select('Green')
        // Assertion
        cy.get('[value="green"]').should('have.value', 'green');


        // DatePicker
        //cy.get('#datepicker').type('2024-03-19')
        cy.get('#datepicker').click().type('03/26/2024')

        cy.wait(3000)

        //cy.get('.home-link').click()

        // Table Value Checked
        cy.get('#productTable').find('input[type="checkbox"]').eq(3).check();
        // Assertion 
        cy.get('#productTable').find('input[type="checkbox"]').eq(3).should('be.checked');
        cy.get('#productTable > tbody > :nth-child(4) > :nth-child(2)').should('have.text','Product 4')
        cy.get('#productTable > tbody > :nth-child(4) > :nth-child(3)').should('have.text','$7.99')


        // Search 
        cy.get('#Wikipedia1_wikipedia-search-input').type('Menu')
        cy.get('.wikipedia-search-button').click()

        //Assertion
        cy.get('#HTML4 > .title').should('have.text','New Browser Window')


    })

    it('checking the total class with the same name',()=>{
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('.title')
    })
})







