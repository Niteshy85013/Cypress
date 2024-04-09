 
import '@4tw/cypress-drag-drop'

describe('Input Fields', ()=>{

    it.only('Drag and Drop',()=>{
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('#draggable').drag('#droppable')
    })

})







