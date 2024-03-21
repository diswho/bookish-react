it("Searchs for a title", () => {
  cy.visit("http://localhost:3000/");
  cy.get("div.book-item").should("have.length", 4);
  cy.get('[data-test="search"] input').type("design");
  cy.get("div.book-item").should("have.length", 1);
  cy.get("div.book-item").eq(0).contains("design");
});
