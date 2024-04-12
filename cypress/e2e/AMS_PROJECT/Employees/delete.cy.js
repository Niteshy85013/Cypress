import { faker } from "@faker-js/faker";
import "cypress-file-upload";

const email = faker.internet.email();

describe("Employees section Testing", () => {
  beforeEach(() => {
    cy.login();
    cy.visit("/employees");
  });

  // Deleting Employees
  it.only("Delete Employees", () => {
    // Delete icon
    cy.get(":nth-child(1) > .button-gap > .delete__button").click();

    // Proceed button
    cy.get(".delete__confirmation--button > .button__blue").click();

    // Toast Message Assertion
    cy.get(".toast__paragraph").should(
      "have.text",
      "Employee Deleted Successfully"
    );
  });
});
