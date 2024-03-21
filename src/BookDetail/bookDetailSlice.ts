import { createSlice } from "@reduxjs/toolkit"
import { Book } from "../types"
import { fetchBookDetails } from "../BookList/createAsyncThunk"

type BookDetailType = {
    book: Book,
    loading: boolean,
    error: boolean
}
const initialState: BookDetailType = {
    book: { id: 0, name: "" },
    loading: false,
    error: false
}

export const bookDetailsSlice = createSlice({
    name: "bookDetails",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBookDetails.pending, (state) => {
                state.loading = true;
                state.error = false
            })
            .addCase(fetchBookDetails.fulfilled, (state, action) => {
                state.book = action.payload
                state.loading = true;
            })
            .addCase(fetchBookDetails.rejected, (state) => {
                state.loading = false;
                state.error = true;
            })
    }
})
export default bookDetailsSlice.reducer;