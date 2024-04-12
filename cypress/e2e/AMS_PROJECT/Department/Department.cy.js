import { faker } from "@faker-js/faker";
const department = faker.commerce.department();
describe("Testing for Department Sections", () => {
  beforeEach(() => {
    cy.login();
    cy.visit("/departments");
  });
  it("Add Department", () => {
    cy.get(".content__header").should("have.text", "Department");
    cy.contains(".add__category--title p", "Add a Department").should(
      "be.visible"
    );
    cy.get(".add__category--title > span").should(
      "have.text",
      "Enter the department to list in the employees section."
    );
    cy.get('input[name="department"]').type(department);
    cy.get('button[type="submit"]').click();

    // Toast Message
    cy.get(".toast__paragraph").should(
      "be.visible",
      "Department has been added"
    );
  });

  it("Try to Add empty Department", () => {
    cy.get(".content__header").should("have.text", "Department");
    cy.contains(".add__category--title p", "Add a Department").should(
      "be.visible"
    );
    cy.get(".add__category--title > span").should(
      "have.text",
      "Enter the department to list in the employees section."
    );

    // Click Button
    cy.get('button[type="submit"]').click();

    // Validation Error Message
    cy.get(".error-message").should(
      "have.text",
      "Please enter a Department name"
    );
  });

  it("Try to Add Department with special character", () => {
    cy.get(".content__header").should("have.text", "Department");
    cy.contains(".add__category--title p", "Add a Department").should(
      "be.visible"
    );
    cy.get(".add__category--title > span").should(
      "have.text",
      "Enter the department to list in the employees section."
    );
    cy.get('input[name="department"]').type("HR@Management");
    cy.get('button[type="submit"]').click();

    // Validation Error Message
    cy.get(".error-message").should(
      "have.text",
      "Please enter valid alphabets."
    );
  });

  it("Try to Add Department with leading character", () => {
    cy.get(".content__header").should("have.text", "Department");
    cy.contains(".add__category--title p", "Add a Department").should(
      "be.visible"
    );
    cy.get(".add__category--title > span").should(
      "have.text",
      "Enter the department to list in the employees section."
    );
    cy.get('input[name="department"]').type(" HR Management");
    cy.get('button[type="submit"]').click();

    // Toast Error Message
    cy.get(".toast__paragraph").should(
      "have.text",
      "No spaces allowed in start and end."
    );
  });

  it("Try to Add Department with Duplicate value", () => {
    cy.get(".content__header").should("have.text", "Department");
    cy.contains(".add__category--title p", "Add a Department").should(
      "be.visible"
    );
    cy.get(".add__category--title > span").should(
      "have.text",
      "Enter the department to list in the employees section."
    );
    cy.get('input[name="department"]').type("Frontend");
    cy.get('button[type="submit"]').click();

    // Toast Error Message
    cy.get(".toast__paragraph").should(
      "have.text",
      "Department already exists"
    );
  });

  it("Deleting the Department", () => {
    // Delete Icon
    cy.get(":nth-child(1) > .button-gap > .delete__button").click();

    // Proceed Button
    cy.get(".delete__confirmation--button > .button__blue").click();
    // Toast Error Message
    cy.get(".toast__paragraph").should(
      "have.text",
      "Department has been deleted"
    );
  });

  it("Updating Department with valid data", () => {
    cy.get(":nth-child(1) > .button-gap > .edit__button").click();
    cy.get(".universal__td--border").type(department);

    // Save icon
    cy.get(".universal__FormButton button:first-child")
      .should("be.visible")
      .click();

    cy.get(".toast__paragraph").should(
      "have.text",
      "Department has been updated successfully"
    );

    // close icon
    //cy.get('[type="button"]').should('be.visible').click();
  });

  it("Updating Department with invalid (special character) data", () => {
    cy.get(":nth-child(1) > .button-gap > .edit__button").click();
    cy.get(".universal__td--border").type("demo@");

    // Save icon
    cy.get(".universal__FormButton button:first-child")
      .should("be.visible")
      .click();

    // validation Error Message
    cy.get(".error-message").should(
      "have.text",
      "Please enter valid alphabets."
    );

    // close icon
    //cy.get('[type="button"]').should('be.visible').click();
  });

  it.only("Updating Department with invalid (Blank) data", () => {
    // Edit icon
    cy.get(":nth-child(1) > .button-gap > .edit__button").click();
    cy.get(
      ".universal__input--container > .input__field > .toggle__showHide--container > .input-enabled"
    ).clear();
    // Save icon
    cy.get(".universal__FormButton button:first-child")
      .should("be.visible")
      .click();

    // validation Error Message
    cy.get(".error-message").should(
      "have.text",
      "Please enter a department name"
    );

    // close icon
    //cy.get('[type="button"]').should('be.visible').click();
  });
});
