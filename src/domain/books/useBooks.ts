import { useState, useEffect, useCallback } from 'react';
import { Book } from './Book';

export interface UseBooksResult {
  books: Book[] | null;
  reload: () => void;
}

export const useBooks = (): UseBooksResult => {
  const [books, setBooks] = useState<Book[] | null>(null);

  const fetchBooks = async () => {
    const response = await fetch('http://localhost:4730/books');
    const _books = await response.json();
    setBooks(_books);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const reload = useCallback(() => {
    setBooks(null);
    fetchBooks();
  }, []);

  return {
    books,
    reload,
  };
};
