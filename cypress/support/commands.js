// Session
Cypress.Commands.add("loginsession", (username, password) => {
  cy.session([username, password], () => {
    cy.visit("/login");
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').should("be.visible").click();
    cy.wait(3000);
  });
});

Cypress.Commands.add("login", () => {
  cy.loginsession("admin", "Adminadmin1!");
});

// Viewport
Cypress.Commands.add("viewViewport", () => {
  cy.viewport(390, 844);
});

// Logout
Cypress.Commands.add("getLocalStorage", (key) => {
  cy.window().then((window) => {
    return window.localStorage.getItem(key);
  });
});
Cypress.Commands.add("logout", () => {
  // Clear authentication token from local storage
  cy.clearLocalStorage("Token");
  // Check local storage to ensure authToken is null after clearing
  cy.getLocalStorage("Token").should("be.null");
  // Redirect user to login page
  cy.visit("/login");
  cy.url().should("include", "/login");
});

// Random Date Picker
Cypress.Commands.add("generateRandomDates", () => {
  const getRandomDate = (value) => {
    const randomOffset = Math.floor(Math.random() * 365);
    const randomDate = new Date(
      Date.now() + randomOffset * 24 * 60 * 60 * 1000 + value
    )
      .toISOString()
      .split("T")[0];
    return randomDate;
  };
  const randomDate1 = getRandomDate(1);
  const randomDate2 = getRandomDate(2);

  return { randomDate1, randomDate2 };
});

// Cypress.on("uncaught:exception", (err, runnable) => {
//   return false;
// });
