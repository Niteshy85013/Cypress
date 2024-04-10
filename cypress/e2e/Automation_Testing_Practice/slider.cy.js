describe('Testing Slider',()=>{

    it('should move the slider to a specific position with mouse pointer', () => {
        const targetPosition = 100;
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('.ui-slider-handle')
          .trigger('mousedown', { which: 1 })
          .trigger('mousemove', { clientX: targetPosition, force: true })
      });


      it.only('should move the slider to a specific position', () => {
        const targetPosition = 300;
        cy.visit('https://testautomationpractice.blogspot.com/');
      
        // Set the value of the slider handle to the target position
        cy.get('.ui-slider-handle').invoke('attr', 'style', `left: ${targetPosition}px`);
      });
      
})