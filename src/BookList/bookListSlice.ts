import { createSlice } from "@reduxjs/toolkit";
import { Book } from "../types";
import { fetchBooks } from "./createAsyncThunk";

type AppStateType = {
    books: Book[],
    loading: boolean,
    error: boolean,
    term: string
}

const initialState: AppStateType = {
    books: [],
    loading: false,
    error: false,
    term: ""
}


export const bookListSlice = createSlice({
    name: "books",
    initialState: initialState,
    reducers: {
        setTerm: (state, action) => {
            state.term = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBooks.fulfilled, (state, action) => {
            state.books = action.payload;
            state.loading = false;
        })
        builder.addCase(fetchBooks.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchBooks.rejected, (state) => {
            state.error = true;
            state.loading = false;
        })
    }
})
export const { setTerm } = bookListSlice.actions;
export default bookListSlice.reducer;