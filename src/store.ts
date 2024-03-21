import { configureStore } from "@reduxjs/toolkit";
import bookListReducer from "./BookList/bookListSlice";
import bookDetailsReducer from "./BookDetail/bookDetailSlice";

const store = configureStore({
    reducer: {
        list: bookListReducer,
        detail:bookDetailsReducer
    }
})
export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch