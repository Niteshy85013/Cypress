import { faker } from "@faker-js/faker";
import "cypress-file-upload";

const email = faker.internet.email();

describe("Employees section Testing", () => {
  beforeEach(() => {
    cy.login();
    cy.visit("/employees");
  });
  // Adding Employees with valid data
  it("Adding Employees", () => {
    cy.get(".button__blue").should("be.visible").click();
    cy.get('input[name="username"]').type("DemoAdmin");
    cy.get('input[name="designation"]').type("QA");
    cy.get(":nth-child(4) > .input-enabled").select("Music");

    cy.get('input[name="email"]').type(email);

    cy.get('input[name="phoneNumber"]').type("9852011112");

    cy.fixture("demo.jpg").then((fileContent) => {
      cy.get('input[type="file"]').attachFile("demo.jpg");
    });

    cy.wait(2000);
    cy.get(".user__profile--btn > .button__blue").should("be.visible").click();

    // Toast message assertion
    cy.get(".toast__paragraph").should("have.text", "Employee has been added");
  });

  // Adding Employees with Existing Data(Name and Phone Number)
  it("Adding Employees with Existing Data(Name and Phone Number)", () => {
    cy.get(".button__blue").should("be.visible").click();
    cy.get('input[name="username"]').type("DemoAdmin");
    cy.get('input[name="designation"]').type("QA");
    cy.get(":nth-child(4) > .input-enabled").select("Music");

    cy.get('input[name="email"]').type(email);

    cy.get('input[name="phoneNumber"]').type("9852011111");

    cy.fixture("demo.jpg").then((fileContent) => {
      cy.get('input[type="file"]').attachFile("demo.jpg");
    });

    cy.wait(2000);

    cy.get(".user__profile--btn > .button__blue").should("be.visible").click();

    // Toast Message Assertion
    cy.get(".toast__paragraph").should(
      "have.text",
      "Phone number already exists !!"
    );
  });

  // Adding  Employee without Image
  it("Adding  Employee without Image", () => {
    cy.get(".button__blue").should("be.visible").click();
    cy.get('input[name="username"]').type("DemoAdmin");
    cy.get('input[name="designation"]').type("QA");
    cy.get(":nth-child(4) > .input-enabled").select("Music");

    cy.get('input[name="email"]').type(email);

    cy.get('input[name="phoneNumber"]').type("9852011100");

    cy.wait(2000);

    cy.get(".user__profile--btn > .button__blue").should("be.visible").click();
    // Toast Message Assertion
    cy.get(".toast__paragraph").should("have.text", "Please Upload Image !!");
  });

  // Submitting the form without entering data
  it.only("Submitting the form without entering data", () => {
    cy.get(".button__blue").should("be.visible").click();

    cy.get(".user__profile--btn > .button__blue").should("be.visible").click();

    // Name Validation Error Message
    cy.get(":nth-child(1) > .input__field > .error-message").should(
      "have.text",
      "Please enter your name"
    );

    // Degination Validation Error Message
    cy.get(":nth-child(3) > .input__field > .error-message").should(
      "have.text",
      "Please enter your designation"
    );

    // Department Validation Error Message
    cy.get(":nth-child(4) > .error-message").should(
      "have.text",
      "Please select department"
    );

    // Email Validation Error Message
    cy.get(":nth-child(5) > .input__field > .error-message").should(
      "have.text",
      "Please enter your email address"
    );

    // Phone Number Validation Error Message
    cy.get(":nth-child(6) > .input__field > .error-message").should(
      "have.text",
      "Phone number must have +977 and 10 numbers."
    );
  });
});
