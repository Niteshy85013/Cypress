import { faker } from "@faker-js/faker";
const location = faker.location.city();

describe("Testing for Location Section", () => {
  beforeEach(()=>{
  cy.login();
     cy.visit("/location");
  })
  it("Adding location with valid data", () => {
    cy.get('input[name="location"]').type(location);
    cy.get('button[type="submit"]').should("be.visible").click();

    // Assert Message
    cy.get(".toast__paragraph").should("have.text", "Location has been added");
  });

  it.only("Adding location with invalid data (Special Character)", () => {
    cy.get('input[name="location"]').type("location@home");
    cy.get('button[type="submit"]').should("be.visible").click();
  });

  it("Adding location with blank data", () => {
    cy.get('input[name="location"]').type(" ");
    cy.get('button[type="submit"]').should("be.visible").click();
  });

  it("Update location with valid data", () => {
    cy.get(":nth-child(1) > .button-gap > .edit__button")
      .should("be.visible")
      .click();
    cy.get(".universal__td--border").type(location);

    // Save Icon
    cy.get(".universal__FormButton button:first-child")
      .should("be.visible")
      .click();

    // close icon
    //cy.get('[type="button"]').should('be.visible').click();
  });

  // Update location with Invalid data
  it("Update location with invalid data", () => {
    cy.get(":nth-child(1) > .button-gap > .edit__button")
      .should("be.visible")
      .click();
    cy.get(".universal__td--border").type("location@demo");

    // Save Icon
    cy.get(".universal__FormButton button:first-child")
      .should("be.visible")
      .click();

    // close icon
    //cy.get('[type="button"]').should('be.visible').click();
  });

  // Update location with Invalid space data
  it("Update location with space data", () => {
    cy.get(":nth-child(1) > .button-gap > .edit__button").click();
    cy.get(".universal__td--border").type(" ");

    // Save Icon
    cy.get(".universal__FormButton button:first-child")
      .should("be.visible")
      .click();

    // close icon
    //cy.get('[type="button"]').should('be.visible').click();
  });

  // Delete particular Location
  it("Delete the particular location", () => {

    // Delete Icon
    cy.get(":nth-child(1) > .button-gap > .delete__button").click();

    // Proceed Button
    //cy.get('.delete__confirmation--button > .button__blue').click()

    // Cancle Confirmation
    cy.get(".button__red").should("be.visible").click();
  });

  // Assertion for Heading
  it("Heading Assertion", () => {
    // Heading Assertion
    cy.contains(".add__category--title p", "Add a Location").should(
      "be.visible"
    );

    // Paragraph text assertion
    cy.get(".add__category--title > span").should(
      "have.text",
      "Add a location name of the asset to determine where it is located."
    );
  });
});
