describe("Testing for Sorting Function", () => {
  beforeEach(() => {
    cy.login();
    cy.visit("/repair");
  });

  it("Sorting with Name", () => {
    cy.get("thead > tr > :nth-child(2)").click();
  });
});
