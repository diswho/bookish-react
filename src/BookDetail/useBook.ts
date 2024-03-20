import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export const useBook = () => {
  const { id } = useParams<string>();
  const [book, setBook] = useState({ id: 0, name: "" });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchBooks = async () => {
      setError(false);
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:8080/books/${id}`);
        setBook(response.data);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, [id]);
  return { loading, error, book };
};

