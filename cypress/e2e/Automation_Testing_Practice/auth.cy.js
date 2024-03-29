 

describe('Login Test Suite', () => {
   
    it('Logs in successfully and starts a session', () => {
       cy.loginsession('admin','Adminadmin1!')

       .visit('location')
       cy.visit('assets')
    });
    // it('updated',()=>{
    //     cy.visit('departments')
    // })
  });








  