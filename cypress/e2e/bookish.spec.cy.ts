describe("Bookish application", () => {
  it("Visit the bookish", () => {
    cy.visit("http://localhost:3000/");
    cy.get('div[data-test="book-list"]').should("exist");
    cy.get("div.book-item").should("have.length", 4);
  });
});
