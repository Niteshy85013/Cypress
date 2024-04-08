import { faker } from '@faker-js/faker';

const productname = faker.commerce.productName();
 
function RandomBrand() {
    const brandNames = ['Apple', 'Samsung', 'Google', 'Microsoft', 'Sony', 'LG'];
    const randomIndex = Math.floor(Math.random() * brandNames.length);
    return brandNames[randomIndex];
}
// Call Function
const randomBrandName = RandomBrand();

describe('Update Procurement',()=>{
    beforeEach(()=>{
        cy.login()
    });

    it.only('Update procurement which have one product',()=>{
        cy.visit('/procurement')

        // Edit Button
        cy.get(':nth-child(1) > .button-gap > [href="/procurement/editProcurement"] > .edit__button').click()

        // Product Line Item
        cy.get('.edit__button').click()

        //Product name
        cy.get('[data-cell="Product Name"] > .input__field > .toggle__showHide--container > .input-enabled').clear().type(productname)

        cy.wait(3000)
        // Category
        cy.get('[data-cell="Category"] > div > .input-enabled').then(dropdown => {
            const options = dropdown.find('option:not(:first)')
            
            // const firstOption = options.first();
            // firstOption.remove();
            const numOptions = options.length;
            const randomIndex = Math.floor(Math.random() * numOptions);
            const randomOptionText = options.eq(randomIndex).text();
            cy.log(randomOptionText)
            cy.wrap(dropdown).select(randomOptionText);
        });

        // Brand Name
        cy.get('[data-cell="Brand"] > .input__field > .toggle__showHide--container > .input-enabled').clear().type(randomBrandName)

        // Estimated Price
        cy.get('[data-cell="Estimated Price"] > .input__field > .toggle__showHide--container > .input-enabled').clear().type('$500')

        // Product Link
        cy.get('[data-cell="Link"] > .input__field > .toggle__showHide--container > .input-enabled').clear().type('www.demo.com')

        // Save Product Line Button
        cy.get('.edit__button').should('be.visible').click()

        cy.wait(4000)
        // Update Procurement Button
        cy.get('.procurement--button').should('be.visible').click()
    });
});







































