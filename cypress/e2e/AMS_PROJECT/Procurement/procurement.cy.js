import { faker } from "@faker-js/faker";

const productname = faker.commerce.productName();

function RandomBrand() {
  const brandNames = ["Apple", "Samsung", "Google", "Microsoft", "Sony", "LG"];
  const randomIndex = Math.floor(Math.random() * brandNames.length);
  return brandNames[randomIndex];
}
// Call Function
const randomBrandName = RandomBrand();

describe("Testing for procurement Section", () => {
  beforeEach(() => {
    cy.login();
    cy.visit("/procurement");
  });

  // Adding with valid datas
  it.only("Adding valid data", () => {
    cy.get(".button__blue").click();

    cy.wait(3000);

    // Requested By
    cy.get(".procurement__employee--dets > :nth-child(1) > select").then(
      (dropdown) => {
        const options = dropdown.find("option:not(:first)");

        // const firstOption = options.first();
        // firstOption.remove();
        const numOptions = options.length;
        const randomIndex = Math.floor(Math.random() * numOptions);
        const randomOptionText = options.eq(randomIndex).text();
        cy.log(randomOptionText);
        cy.wrap(dropdown).select(randomOptionText);
      }
    );

    cy.wait(3000);
    // Request urgency
    cy.get(":nth-child(2) > .input-enabled").then((dropdown) => {
      const options = dropdown.find("option:not(:first)");

      // const firstOption = options.first();
      // firstOption.remove();
      const numOptions = options.length;
      const randomIndex = Math.floor(Math.random() * numOptions);
      const randomOptionText = options.eq(randomIndex).text();
      cy.log(randomOptionText);
      cy.wrap(dropdown).select(randomOptionText);
    });

    // Product Name
    cy.get(
      '[data-cell="Product Name"] > .input__field > .toggle__showHide--container > .input-enabled'
    ).type(productname);

    cy.wait(3000);
    // Selecting Category
    cy.get('[data-cell="Category"] > div > .input-enabled').then((dropdown) => {
      const options = dropdown.find("option:not(:first)");

      // const firstOption = options.first();
      // firstOption.remove();
      const numOptions = options.length;
      const randomIndex = Math.floor(Math.random() * numOptions);
      const randomOptionText = options.eq(randomIndex).text();
      cy.log(randomOptionText);
      cy.wrap(dropdown).select(randomOptionText);
    });

    // Brand Name

    cy.get(
      '[data-cell="Brand"] > .input__field > .toggle__showHide--container > .input-enabled'
    ).type(randomBrandName);

    // Price
    cy.get(
      '[data-cell="Estimated Price"] > .input__field > .toggle__showHide--container > .input-enabled'
    ).type("$1000");

    // Product Link
    cy.get(
      '[data-cell="Link"] > .input__field > .toggle__showHide--container > .input-enabled'
    ).type("www.google.com");

    // Save Product Button
    cy.get(".edit__button").click();

    //Fill procurement Button
    cy.get(".procurement__bottom--buttons > .procurement--button")
      .should("be.visible")
      .click();
    cy.wait(2000);

    // Toast Message assertion
    cy.get(".toast__paragraph").should(
      "have.text",
      "Procurement email has been sent to admin"
    );
  });

  // Creating multiple product in table line
  it("Adding valid data", () => {
    cy.get(".button__blue").click();

    cy.wait(3000);

    // Requested By
    cy.get(".procurement__employee--dets > :nth-child(1) > select").then(
      (dropdown) => {
        const options = dropdown.find("option:not(:first)");

        // const firstOption = options.first();
        // firstOption.remove();
        const numOptions = options.length;
        const randomIndex = Math.floor(Math.random() * numOptions);
        const randomOptionText = options.eq(randomIndex).text();
        cy.log(randomOptionText);
        cy.wrap(dropdown).select(randomOptionText);
      }
    );

    cy.wait(3000);
    // Request urgency
    cy.get(":nth-child(2) > .input-enabled").then((dropdown) => {
      const options = dropdown.find("option:not(:first)");

      // const firstOption = options.first();
      // firstOption.remove();
      const numOptions = options.length;
      const randomIndex = Math.floor(Math.random() * numOptions);
      const randomOptionText = options.eq(randomIndex).text();
      cy.log(randomOptionText);
      cy.wrap(dropdown).select(randomOptionText);
    });

    // Product Name
    cy.get(
      '[data-cell="Product Name"] > .input__field > .toggle__showHide--container > .input-enabled'
    ).type(productname);

    cy.wait(3000);
    // Selecting Category
    cy.get('[data-cell="Category"] > div > .input-enabled').then((dropdown) => {
      const options = dropdown.find("option:not(:first)");

      // const firstOption = options.first();
      // firstOption.remove();
      const numOptions = options.length;
      const randomIndex = Math.floor(Math.random() * numOptions);
      const randomOptionText = options.eq(randomIndex).text();
      cy.log(randomOptionText);
      cy.wrap(dropdown).select(randomOptionText);
    });

    // Brand Name
    cy.get(
      '[data-cell="Brand"] > .input__field > .toggle__showHide--container > .input-enabled'
    ).type(brandname);

    // Price
    cy.get(
      '[data-cell="Estimated Price"] > .input__field > .toggle__showHide--container > .input-enabled'
    ).type("$1000");

    // Product Link
    cy.get(
      '[data-cell="Link"] > .input__field > .toggle__showHide--container > .input-enabled'
    ).type("www.google.com");

    // Save Product Button
    cy.get(".edit__button").click();

    // Add Product line button
    cy.get(".procurement__product--list > .procurement--button")
      .should("be.visible")
      .click();

    cy.wait(2000);
    // Product Name
    cy.get(
      ':nth-child(2) > [data-cell="Product Name"] > .input__field > .toggle__showHide--container > .input-enabled'
    ).type(productname);

    cy.wait(3000);
    // Selecting Category
    cy.get(
      ':nth-child(2) > [data-cell="Category"] > div > .input-enabled'
    ).then((dropdown) => {
      const options = dropdown.find("option:not(:first)");

      // const firstOption = options.first();
      // firstOption.remove();
      const numOptions = options.length;
      const randomIndex = Math.floor(Math.random() * numOptions);
      const randomOptionText = options.eq(randomIndex).text();
      cy.log(randomOptionText);
      cy.wrap(dropdown).select(randomOptionText);
    });

    // Brand Name
    cy.get(
      ':nth-child(2) > [data-cell="Brand"] > .input__field > .toggle__showHide--container > .input-enabled'
    ).type(brandname);

    // Price
    cy.get(
      ':nth-child(2) > [data-cell="Estimated Price"] > .input__field > .toggle__showHide--container > .input-enabled'
    ).type("$1000");

    // Product Link
    cy.get(
      ':nth-child(2) > [data-cell="Link"] > .input__field > .toggle__showHide--container > .input-enabled'
    ).type("www.google.com");

    // Save Product Button
    cy.get(":nth-child(2) > .button-gap > .edit__button").click();

    //Fill procurement Button
    cy.get(".procurement__bottom--buttons > .procurement--button")
      .should("be.visible")
      .click();
    cy.wait(2000);

    // // Toast Message assertion
    cy.get(".toast__paragraph").should(
      "have.text",
      "Procurement email has been sent to admin"
    );
  });
});
