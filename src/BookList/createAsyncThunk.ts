import { createAsyncThunk } from "@reduxjs/toolkit";
import { Book } from "../types";
import axios from "axios";

export const fetchBooks = createAsyncThunk<Book[], string>(
    "books/search",
    async (term: string = "") => {
        const response = await axios.get(
            `http://localhost:8080/books?q=${term}&_sort=id`
        );
        return response.data;
    }
)

export const fetchBookDetails = createAsyncThunk<Book, string>(
    "bookDetails/fetch",
    async (id) => {
        const response = await axios.get(
            `http://localhost:8080/books/${id}`
        );
        return response.data;
    }
)