import { faker } from "@faker-js/faker";

const category = faker.commerce.department();

describe("Testing for Categories", () => {
  beforeEach(() => cy.login());

  it("adding Parent category ", () => {
    cy.viewViewport();
    cy.visit("/categories");

    // Selecting Parent Category
    cy.get(".input-enabled").type(category);
    // Add Category button
    cy.get(".button__blue").should("be.visible").click();

    // Asserting Toast Message
    cy.get(".toast__paragraph").should("have.text", "Category has been added");
  });

  it("Creating Child Category", () => {
    cy.visit("/categories");
    cy.wait(3000);

    // Selecting parent Category
    cy.get("select").then((dropdown) => {
      const options = dropdown.find("option:not(:first)");
      const firstOption = options.first();
      firstOption.remove();
      const numOptions = options.length;
      const randomIndex = Math.floor(Math.random() * numOptions);
      const randomOptionText = options.eq(randomIndex).text();

      cy.wrap(dropdown).select(randomOptionText);
    });

    // Entering Child Category
    cy.get(".input-enabled").type(category);

    // Add Category button
    cy.get(".button__blue").should("be.visible").click();

    //Toast Message Assertion
    cy.get(".toast__paragraph").should(
      "have.text",
      "Sub Category has been added"
    );
  });

  it("Attempt to add blank data", () => {
    cy.visit("/categories");

    // Add Category button
    cy.get(".button__blue").should("be.visible").click();

    // validation Error Message
    cy.get(".error-message").should(
      "have.text",
      "Please enter a Category name"
    );
  });

  it("Adding invalid Parent Category", () => {
    cy.visit("/categories");
    cy.get(".input-enabled").type("Parent@category");
    // Add Category button
    cy.get(".button__blue").should("be.visible").click();

    // Validation Error Message
    cy.get(".error-message").should(
      "have.text",
      "Please enter valid alphanumeric string."
    );
  });

  it("Adding invalid Parent Category (leading space)", () => {
    cy.visit("/categories");
    cy.get(".input-enabled").type(" Parentcategory");
    // Add Category button
    cy.get(".button__blue").should("be.visible").click();

    // Toast Message
    cy.get(".toast__paragraph").should(
      "have.text",
      " No spaces allowed in start and end."
    );
  });

  it.only("Creating invalid child Category", () => {
    cy.visit("/categories");

    // Entering Child Category
    cy.get(".input-enabled").type("alpha1");

    cy.wait(3000);
    // Selecting parent Category
    cy.get("select").then((dropdown) => {
      const options = dropdown.find("option:not(:first)");
      const firstOption = options.first();
      firstOption.remove();
      const numOptions = options.length;
      const randomIndex = Math.floor(Math.random() * numOptions);
      const randomOptionText = options.eq(randomIndex).text();

      cy.wrap(dropdown).select(randomOptionText);
    });

    // Add Category button
    cy.get(".button__blue").should("be.visible").click();

    // Toast Message Assertion
    cy.get(".toast__paragraph").should(
      "have.text",
      "Child category should contain only alphabets."
    );
  });
});
