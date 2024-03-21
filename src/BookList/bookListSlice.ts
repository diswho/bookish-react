import { createSlice } from "@reduxjs/toolkit";
import { Book } from "../types";

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
    }
})
export const { setTerm } = bookListSlice.actions;
export default bookListSlice.reducer;