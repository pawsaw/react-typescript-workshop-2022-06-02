import { useState, useCallback } from 'react';
import { BookList, OnBookSelected } from './BookList';
import { useBooks, useBook, Book } from '../../domain/books';
import { BookDetail } from '../BookDetailsScreen/BookDetail';

export const BooksScreen: React.FC = () => {
  const { books, reload } = useBooks();

  const onBookSelected: OnBookSelected = useCallback(({ isbn }: Book) => {}, []);

  return (
    <div>
      {books ? (
        <div>
          <BookList books={books} onBookSelected={onBookSelected} />
        </div>
      ) : (
        <span>Loading books...</span>
      )}
      <button onClick={reload}>Reload</button>
    </div>
  );
};
