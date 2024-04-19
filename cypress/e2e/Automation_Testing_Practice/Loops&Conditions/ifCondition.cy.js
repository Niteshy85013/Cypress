describe("If Condition Practice", () => {
  beforeEach(() => {
    cy.visit("https://testautomationpractice.blogspot.com/");
  });
  it("test", () => {
    const text = "Hello, world!";
    if (text.includes("world")) {
      cy.log('Text contains the word "world"');
    } else {
      cy.log('Text does not contain the word "world"');
    }
  });

  it.only("Text Assertion using If condition", () => {
    cy.get(".Header h1")
      .invoke("text")
      .then((textss) => {
        if (textss.includes("Automation Testing Practice")) {
          cy.log("Text Exists");
        } else {
          cy.log("Text doesn't Exists");
        }
      });
  });

  it("Checking if a checkbox is checked", () => {
    cy.get("#male")
      .check()
      .then(($checkbox) => {
        if ($checkbox.prop("checked")) {
          cy.log("Checkbox is checked");
        } else {
          cy.log("Checkbox is not checked");
        }
      });
  });

  it("Checking if a dropdown is checked", () => {
    cy.get("#country")
      .select("uk")
      .then(() => {
        const selectedOption = Cypress.$("#country").val();
        if (selectedOption === "uk") {
          cy.log("UK is selected");
        } else {
          cy.log("No option is selected");
        }
      });
  });

  it("Checking if a title is visibe", () => {
    cy.get(".Header h1").then(($element) => {
      if ($element.is(":visible")) {
        cy.log("Element is visible");
      } else {
        cy.log("Element is not visible");
      }
    });
  });
});
