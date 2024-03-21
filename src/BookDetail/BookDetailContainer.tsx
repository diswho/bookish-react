import { useParams } from "react-router";
import BookDetail from "./BookDetail";
import { useBook } from "./useBook";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { useEffect } from "react";
import { fetchBookDetails } from "../BookList/createAsyncThunk";

const BookDetailContainer = () => {
  // const { book } = useBook();
  const { id = "" } = useParams<string>()
  const { book } = useSelector((state: RootState) => ({
    book: state.detail.book,
  }))
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(fetchBookDetails(id))
  }, [dispatch])
  return <BookDetail book={book} />;
};

export default BookDetailContainer;
