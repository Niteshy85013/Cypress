describe('', ()=>{
  it('',()=>{
    cy.visit('http://www.automationpractice.pl/index.php?id_category=3&controller=category');

    cy.get('#layered_category_4').as('nitesh')

    cy.get('@nitesh').check()
  })
})
