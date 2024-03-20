import Typography from "@mui/material/Typography";
import BookListContainer from "./BookList/BookListContainer";
import { Route, Routes } from "react-router";
import BookDetailContainer from "./BookDetail/BookDetailContainer";

function App() {
  return (
    <div>
      <Typography variant="h2" component="h2" data-test="heading">
        <a href="/">Bookish</a>
      </Typography>
      <Routes>
        <Route path="/" element={<BookListContainer />} />
        <Route path="/books/:id" element={<BookDetailContainer />} />
      </Routes>
    </div>
  );
}

export default App;
