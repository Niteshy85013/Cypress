import "cypress-real-events";
describe("Mouse Hover",()=>{
    beforeEach(()=>{
        cy.visit("https://www.yatra.com/");
    })
    it("Mouse Hover using cypress real event",()=>{
        cy.get('.more-arr').realHover();
    })
})