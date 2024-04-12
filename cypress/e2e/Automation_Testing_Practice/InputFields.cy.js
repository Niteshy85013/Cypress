import { faker } from "@faker-js/faker";
import "cypress-iframe";

describe("Input Fields", () => {
  beforeEach(() => {
    cy.visit("https://testautomationpractice.blogspot.com/");
  });

  it("Checking for Inputfields", () => {
    const name = faker.person.firstName();
    const email = faker.internet.email();
    const phone = faker.phone.number();

    cy.get("#name").type(name);
    cy.get("#email").type(email);
    cy.get("#phone").type(phone);
    cy.get("#textarea").type("This is a textarea field");

    // For Radio buttons
    cy.get('input[value="male"]').check();

    // Aassertion for checkbox
    cy.get('input[value="male"]').should("be.checked");

    // Multiple selection
    //cy.get('.form-check.form-check-inline input[type="checkbox"]').check();

    // Single selection
    cy.get('input[value="sunday"]').check();

    // Assertion
    cy.get('input[value="sunday"]').should("be.checked");

    // Dropdown  menu
    cy.get("#country").select("uk");

    // Assertion
    cy.get("#country").should("have.value", "uk");

    // Select the options
    cy.get("#colors").select("Green");
    // Assertion
    cy.get('[value="green"]').should("have.value", "green");

    // DatePicker
    //cy.get('#datepicker').type('2024-03-19')
    cy.get("#datepicker").click().type("03/26/2024");

    cy.wait(3000);

    //cy.get('.home-link').click()

    // Table Value Checked
    cy.get("#productTable").find('input[type="checkbox"]').eq(3).check();
    // Assertion
    cy.get("#productTable")
      .find('input[type="checkbox"]')
      .eq(3)
      .should("be.checked");
    cy.get("#productTable > tbody > :nth-child(4) > :nth-child(2)").should(
      "have.text",
      "Product 4"
    );
    cy.get("#productTable > tbody > :nth-child(4) > :nth-child(3)").should(
      "have.text",
      "$7.99"
    );

    // Search
    cy.get("#Wikipedia1_wikipedia-search-input").type("Menu");
    cy.get(".wikipedia-search-button").click();

    //Assertion
    cy.get("#HTML4 > .title").should("have.text", "New Browser Window");

    // Alerts
    cy.get('[onclick="myFunctionAlert()"]').click();
    cy.wait(3000);

    cy.get('[onclick="myFunctionConfirm()"]').click();
    cy.wait(5000);

    cy.get('[onclick="myFunctionPrompt()"]').click();
    cy.wait(5000);

    // dblclick
    cy.get("#HTML10 > .widget-content > button").dblclick();
  });

  it.only("iFrame Testing", () => {
    cy.get("#HTML6").scrollIntoView({ duration: 2000 });

    cy.frameLoaded("#frame-one796456169").then(($iframe) => {
      const $body = $iframe.contents().find("body");

      // Input Field
      cy.wrap($body).find("#RESULT_TextField-0").type("Dummy Text");

      // Radio button
      cy.wrap($body)
        .find('input[value="Radio-0"]')
        .invoke("prop", "checked", true)
        .should("be.checked");

      // Random Date (Getting from custom command)
      cy.wrap($body).find("#RESULT_TextField-2").type("04/11/2024");

      // Dropdown
      cy.wrap($body).find(".drop_down").select("QA Engineer");
      cy.wait(2000);

      // Submit Button
      //cy.wrap($body).find("#FSsubmit").should("be.visible").click();
    });
  });
});
