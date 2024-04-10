describe('Testing Resizable',()=>{
    it('Resizable', () => {
      const targetWidth = 300;
      const targetHeight = 300;
    
      cy.visit('https://testautomationpractice.blogspot.com/');
    
      cy.get('.ui-resizable').invoke('attr', 'style', `width: ${targetWidth}px; height: ${targetHeight}px;`);
    });
    
});

