describe("Testing Search Functionality", () => {
  beforeEach(() => {
    cy.login();
    cy.visit("/procurement");
  });

  // search with valid data
  it.only("search with valid data", () => {
    cy.get(".search__form").type("Furniture").click();
  });

  // Search with invalid data
  it("search with invalid data", () => {
    cy.get(".search__form").type("offFurniture");
  });
});
