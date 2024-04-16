describe("View Procurement Detail section Testing", () => {
  beforeEach(() => {
    cy.login();
    cy.visit("/procurement");
  });

  // View Procurement Detail
  it("Detail of Procurement", () => {
    cy.get(
      ':nth-child(1) > .button-gap > [href="/procurement/viewProcurement"] > .view__button'
    )
      .should("be.visible")
      .click();
  });

  it.only("Cancle button ", () => {
    // View Icon
    cy.get(
      ':nth-child(1) > .button-gap > [href="/procurement/viewProcurement"] > .view__button'
    )
      .should("be.visible")
      .click();

    cy.wait(5000);
    // Close button
    cy.get(".procurement__error--button").should("be.visible").click();

    // Assertion for URl
    cy.url().should("include", "/procurement");
  });
});
