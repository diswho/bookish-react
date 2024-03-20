import axios from "axios";
import { useEffect, useState } from "react";

const [books, setBooks] = useState([]);
const [error, setError] = useState<boolean>(false);
const [loading, setLoading] = useState<boolean>(false);
const [term, setTerm] = useState("");
useEffect(() => {
  const fetchBooks = async (term: string) => {
    setError(false);
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:8080/books?q=${term}&_sort=id`
      );
      setBooks(response.data);
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  fetchBooks(term);
}, [term]);
