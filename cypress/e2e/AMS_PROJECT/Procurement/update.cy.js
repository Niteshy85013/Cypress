describe('Update Procurement',()=>{
    beforeEach(()=>{
        cy.login()
    })

    it.only('Update procurement which have one product',()=>{
        cy.visit('/procurement')

        // Edit Button
        cy.get(':nth-child(1) > .button-gap > [href="/procurement/editProcurement"] > .edit__button').click()
    })
})