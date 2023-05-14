Cypress.Commands.add("typeBook", (value) => {
  cy.get("@search").find("input").type(value);
});
