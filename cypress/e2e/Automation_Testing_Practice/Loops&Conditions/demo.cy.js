describe("If Condition Practice", () => {
  beforeEach(() => {
    cy.visit("https://testautomationpractice.blogspot.com/");
  });

  it("If condition practice and heading assertion", () => {
    cy.get(".Header h1")
      .invoke("text")
      .then((text) => {
        if (text.includes("Automation Testing Practice")) {
          cy.log("Heading is Correct");
        } else {
          cy.log("Incorrect Heading");
        }
      });
  });

  it.only("Text Assertion", () => {
    cy.get("#HTML4 > .title").then((text) => {
      if (text.includes("New Browser Window")) {
        // Changed from 'text.include' to 'text.includes'
        cy.log("OK");
      } else {
        cy.log("NO");
      }
    });
  });
});
