import React, { useState } from "react";
import { Review } from "../types";
import { Button, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { UpdateReview } from "../BookList/createAsyncThunk";

const ReviewItem = ({ review }: { review: Review }) => {
  const [editing, setEditing] = useState(false);
  const [content, setContent] = useState<string>(review.content);
  const dispatch = useDispatch<AppDispatch>();

  const updateReviewContent = () => {
    if (editing) {
      dispatch(
        UpdateReview({ reviewId: review.id, bookId: review.bookId, content })
      );
    }
    setEditing((editing) => !editing);
  };

  return (
    <div data-testid="review" className="review" key={review.id}>
      <div data-testid="name">{review.name}</div>
      <p data-testid="review-content">{review.content}</p>
      <Button onClick={updateReviewContent}>
        {!editing ? "Edit" : "Submit"}
      </Button>
      {!editing ? (
        <p>{review.content}</p>
      ) : (
        <TextField
          name="content"
          label="Content"
          margin="normal"
          variant="outlined"
          multiline
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      )}
    </div>
  );
};

export default ReviewItem;
