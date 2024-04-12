// function getRandomDate(value) {
//   const randomOffset = Math.floor(Math.random() * 365);
//   const randomDate = new Date(
//     Date.now() + randomOffset * 24 * 60 * 60 * 1000 + value
//   )
//     .toISOString()
//     .split("T")[0];
//   return randomDate;
// }
// const randomDate1 = getRandomDate(1);
// const randomDate2 = getRandomDate(2);

describe("", () => {
  beforeEach(() => {
    cy.login();
  });

  it("Filtering Data", () => {
    cy.visit("/assets");
    cy.get(".filter--button").click();
    cy.get(".group__form > :nth-child(1) > .input-enabled").select("Cutleries");
    cy.get(":nth-child(2) > .input-enabled").select("Active");
    cy.get(
      ":nth-child(3) > .toggle__showHide--container > .input-enabled"
    ).type("2024-04-01");
    cy.get(
      ":nth-child(5) > .toggle__showHide--container > .input-enabled"
    ).type("2024-04-01");

    // Clear all filter Button
    //cy.get('.button__red').click()

    // Apply Button
    cy.get(".filter__button--flex > .button__blue").click();
  });

  it.only("Filtering with Invalid Data", () => {
    cy.visit("/assets");
    cy.get(".filter--button").click();
    cy.get(".group__form > :nth-child(1) > .input-enabled").select("Computer");
    cy.get(":nth-child(2) > .input-enabled").select("Inactive");

    // Random date
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

    // Clear all filter Button
    //cy.get('.button__red').click()

    // Apply Button
    cy.get(".filter__button--flex > .button__blue").click();
  });

  it("Checking Button Works", () => {
    cy.visit("/assets");
    cy.get(".filter--button").should("be.visible").click();
    cy.get(".filter__hide").should("be.visible").click();
  });
});
