import { useState, useEffect } from 'react';
import { Book } from './Book';

export type UseBooksResult = Book[] | null;

export const useBooks = (): UseBooksResult => {
  const [books, setBooks] = useState<Book[] | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch('http://localhost:4730/books');
      const _books = await response.json();
      setBooks(_books);
    };
    fetchBooks();
  }, []);

  return books;
};
