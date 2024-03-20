import { TextField } from "@mui/material";
import BookList from "./BookList";
import { useBooks } from "./useBooks";
import { useEffect, useState } from "react";

const BookListContainer = () => {
  const { books } = useBooks();
  const [term, setTerm] = useState("");
  // useEffect(() => {
  //   perforSearch(`http://localhost:8080/books?q=${term}`);
  // }, [term]);
  return (
    <>
      <TextField
        label="Search"
        value={term}
        data-test="search"
        onChange={(e) => {
          setTerm(e.target.value);
        }}
        margin="normal"
        variant="outlined"
      />
      <BookList books={books} />
    </>
  );
};

export default BookListContainer;
