describe('Testing Slider',()=>{
      it('should move the slider to a specific position', () => {

        const targetPosition = 300;

        cy.visit('https://testautomationpractice.blogspot.com/');

        cy.get('.ui-slider-handle').invoke('attr', 'style', `left: ${targetPosition}px`);
      });
      
});

