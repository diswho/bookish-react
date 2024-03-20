import { render } from "@testing-library/react";

it("displays the book name when no description was given", () => {
  cy.visit("http://localhost:3000/");
  const props = {
    book: {
      id: 1,
      name: "Refactoring",
    },
  };
  render(<BookDetail {...props} />);
  // const description = screen.getByTestId("book-description");
  // expect(description).toHaveTextContent(props.book.name);
});
