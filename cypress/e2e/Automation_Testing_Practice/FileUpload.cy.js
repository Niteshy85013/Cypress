import 'cypress-file-upload'
describe("File Upload",()=>{
    it("Single file upload",()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")

        // If input type is file the we can use attachFile
        cy.get('#file-upload').attachFile('sample.pdf')
        cy.get("#file-submit").click()
        cy.wait(4000)
        cy.get('h3').should('have.text',"File Uploaded!")
    });

    // Gif file
    it("Single file upload",()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")

        // If input type is file then we can use attachFile module
        cy.get('#file-upload').attachFile('demo.gif')
        cy.get("#file-submit").click()
        cy.wait(4000)
        cy.get('h3').should('have.text',"File Uploaded!")
    });

    // Picture png
    it.only("Single file upload",()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")

        // If input type is file then we can use attachFile module
        cy.get('#file-upload').attachFile('faker.png')
        cy.get("#file-submit").click()
        cy.wait(4000)
        cy.get('h3').should('have.text',"File Uploaded!")
    });

});





