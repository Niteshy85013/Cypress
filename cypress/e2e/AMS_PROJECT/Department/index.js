describe('Testing for Department Sections',()=>{
    it.only('Add Department', ()=>{
        cy.visit('departments')
        cy.get('.content__header').should('have.text', 'Department')
        cy.contains('.add__category--title p','Add a Department').should('be.visible')
        cy.get('..add__category span').should('have.text','Enter the department to list in the employees section.')


        cy.get('input[name="department"]').type('HRs')
        cy.get('button[type="submit"]').click()

    })
})