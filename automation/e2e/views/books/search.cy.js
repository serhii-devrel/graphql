import { aliasQuery } from "../../utils/graphql";

describe("searching by book", () => {
  beforeEach(() => {
    cy.intercept("POST", "/graphql", (req) => {
      if (req.body.operationName === "AllBooks") {
        aliasQuery(req, "AllBooks");
      }
    });
    cy.visit("/");
    cy.get(".books > .loader").as("loader");
    cy.get(".books-content > .books__item").as("books");
    cy.get(".content__search").as("search");
  });

  it("should contain a loader during request", () => {
    cy.visit("/");
    cy.get("@loader").contains("loading content", {
      matchCase: false,
    });
  });

  it("should contain the search", () => {
    cy.get("@search").contains("search", { matchCase: false });
  });

  it("should render the base list of books", () => {
    cy.wait("@gqlAllBooksQuery").then(() => {
      cy.get("@loader").should("not.exist");
    });
  });

  it("should update the books list if ones exist", () => {
    cy.typeBook("gi")
      .get("@books")
      .then((books) => {
        const booksLength = Cypress.$(books).length;
        expect(books).to.have.length(booksLength);
      });
  });

  it("should render notification if there is nothing to show", () => {
    cy.typeBook("something that does not exist")
      .get(".empty-books-list")
      .contains("nothing to show", { matchCase: false });
  });
});
