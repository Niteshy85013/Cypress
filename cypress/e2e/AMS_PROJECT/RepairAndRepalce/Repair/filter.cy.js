describe("Filter section Testing", () => {
  beforeEach(() => {
    cy.login();
    cy.visit("/repair");
  });

  // Selecting the filter fields
  it.only("Filter Section", () => {
    cy.get(".filter--button").should("be.visible").click();
    cy.get(".group__form > :nth-child(1) > .input-enabled").select("Furniture");
    cy.get(":nth-child(2) > .input-enabled").select("pending");

    // Random Date Selection
    cy.generateRandomDates().then((dates) => {
      const randomDate1 = dates.randomDate1;
      const randomDate2 = dates.randomDate2;

      cy.get(
        ":nth-child(3) > .input__field > .toggle__showHide--container > .input-enabled"
      ).type(randomDate1);

      cy.get(
        ":nth-child(4) > .input__field > .toggle__showHide--container > .input-enabled"
      ).type(randomDate2);
    });

    // cy.get('.filter__button--flex > .button__blue').click()

    cy.get(".filter__hide").click();

    //cy.get('.button__red').click()
  });

  // Filter by Category
  it("Filter by category Section", () => {
    cy.get(".filter--button").should("be.visible").click();

    cy.get(".group__form > :nth-child(1) > .input-enabled").select("Furniture");

    cy.get(".filter__button--flex > .button__blue").click();
  });

  // Filter by Category
  it("Filter by category Section", () => {
    cy.get(".filter--button").should("be.visible").click();

    cy.get(".group__form > :nth-child(1) > .input-enabled").select("Computer");

    cy.get(".filter__button--flex > .button__blue").click();

    // Assertion
    cy.get(".empty-table-message > p").should("have.text", "No data available");
  });
});
