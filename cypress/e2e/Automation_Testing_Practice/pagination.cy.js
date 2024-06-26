describe("Pagination Testing", () => {
  it("Should navigate through pages", () => {
    cy.visit("https://testautomationpractice.blogspot.com/");

    cy.get("#pagination").click();
    //   cy.url().should('include', '/page=2');

    cy.wait(3000);

    // Go back to the first page
    cy.get("#pagination").contains("3").click();

    cy.contains("Product 13").should("be.visible");
    cy.get(":nth-child(3) > :nth-child(4) > input").check();
    cy.get(":nth-child(3) > :nth-child(4) > input").should("be.checked");
    cy.get("#productTable > tbody > :nth-child(3) > :nth-child(3)").should(
      "have.text",
      "$30.99"
    );
    //cy.get('input[type="checked"]').check()
  });

  it.only("Selecting all item listed in page 3", () => {
    cy.visit("https://testautomationpractice.blogspot.com/");

    cy.get("#pagination").click();
    cy.wait(3000);
    // Go back to the first page
    cy.get("#pagination").contains("3").click();

    cy.contains("Product 13").should("be.visible");
    // Select all checkboxes
    cy.get('input[type="checkbox"]').check();
    cy.get('input[type="checkbox"]').should("be.checked");
    cy.get("#HTML8 > .title").should("have.text", "Pagination Table");
  });
});
