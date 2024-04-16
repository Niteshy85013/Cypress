describe("Testing Search Functionality", () => {
  beforeEach(() => {
    cy.login();
  });

  // search with valid category
  it.only("search with valid category", () => {
    cy.visit("/assets");
    cy.get(".search__form").type("Furniture").click();

    // Asserting the Data
    //  cy.get('.main__table tbody').contains('td','Furniture').should()

    cy.contains(':nth-child(1) > [data-cell="category"]', "Furniture").should(
      "be.visible"
    );
  });

  // Search with invalid data
  it("search with invalid data", () => {
    cy.visit("/assets");
    cy.get(".search__form").type("offFurniture");

    // Assertion
    cy.get(".empty-table-message > p").should("have.text", "No data available");
  });
});
