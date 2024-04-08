 
describe("File Upload",()=>{
    it("Single file upload",()=>{
        cy.visit("https://the-internet.herokuapp.com/windows")

        // //Button to open new window
        cy.get('.example > a').invoke('removeAttr','target').click()

        // // Asserting URL
        cy.url().should('include','/new')
    });
});





