import { useState, useEffect, useCallback } from 'react';
import { useBaseUrl } from '../../api/BaseUrlContext';
import { Book } from './Book';

export interface UseBookResult {
  book: Book | null;
  reload: () => void;
}

export const useBook = (isbn: string | null): UseBookResult => {
  const [book, setBook] = useState<Book | null>(null);
  const baseUrl = useBaseUrl();

  const fetchBook = async (isbn: string, baseUrl: string) => {
    const response = await fetch(`${baseUrl}/books/${isbn}`);
    const _books = await response.json();
    setBook(_books);
  };

  useEffect(() => {
    if (isbn) {
      fetchBook(isbn, baseUrl);
    }
  }, [isbn, baseUrl]);

  const reload = useCallback(() => {
    setBook(null);
    fetchBook(isbn!, baseUrl);
  }, [isbn, baseUrl]);

  return {
    book,
    reload,
  };
};
