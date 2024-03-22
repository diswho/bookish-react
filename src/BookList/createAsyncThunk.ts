import { createAsyncThunk } from "@reduxjs/toolkit";
import { AddReviewRequest, Book, Review, UpdateReviewRequest } from "../types";
import axios from "axios";

export const fetchBooks = createAsyncThunk<Book[], string>(
  "books/search",
  async (term: string = "") => {
    const response = await axios.get(
      `http://localhost:8080/books?q=${term}&_sort=id`
    );
    return response.data;
  }
);

export const fetchBookDetails = createAsyncThunk<Book, string>(
  "bookDetails/fetch",
  async (id) => {
    const response = await axios.get(`http://localhost:8080/books/${id}`);
    return response.data;
  }
);
export const addReview = createAsyncThunk<Review, AddReviewRequest>(
  "reviews/addReview",
  async ({ id, name, content }: AddReviewRequest) => {
    try {
      const response = await axios.post(
        `http://localhost:8080/books/${id}/reviews`,
        { name, content }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const UpdateReview = createAsyncThunk<Review, UpdateReviewRequest>(
  "reviews/updateReview",
  async ({ bookId, reviewId,  content }: UpdateReviewRequest) => {
    try {
      const response = await axios.put(
        `http://localhost:8080/books/${bookId}/reviews/${reviewId}`,
        {  content }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
