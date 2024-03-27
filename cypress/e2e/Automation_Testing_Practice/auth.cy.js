 

describe('Login Test Suite', () => {
    it('Logs in successfully and starts a session', () => {
       cy.loginsession('admin','Adminadmin1!')
       .visit('location')
    });
    // it('updated',()=>{
    //     cy.visit('departments')
    // })
  });








  