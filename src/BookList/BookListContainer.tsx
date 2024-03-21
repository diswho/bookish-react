import BookList from "./BookList";
import SearchBox from "./SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { useEffect } from "react";
import { fetchBooks } from "./createAsyncThunk";

const BookListContainer = () => {
  // const { term, setTerm } = useBooks();

  const { books } = useSelector((state: RootState) => ({
    books: state.list.books,
  }))

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchBooks(""))
  }, [dispatch])

  return (
    <>      
      {/* <SearchBox term={term} onSearch={setTerm} /> */}
      <SearchBox />
      <BookList books={books} />
    </>
  );
};

export default BookListContainer;
