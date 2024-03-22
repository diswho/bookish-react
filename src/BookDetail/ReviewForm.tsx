import React, { useState } from "react";
import { Book } from "../types";
import { Button, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { addReview } from "../BookList/createAsyncThunk";

const ReviewForm = ({ book }: { book: Book }) => {
  const [name, setName] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const dispath = useDispatch<AppDispatch>();
  const handleSubmit = () => {
    dispath(addReview({ id: book.id, name, content }));
    // dispath(fetchBookDetails(book.id));
  };
  return (
    <form noValidate autoComplete="off">
      <TextField value={name} onChange={(e) => setName(e.target.value)} />
      <TextField
        data-testid="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        data-testid="submit"
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </form>
  );
};
export default ReviewForm;
