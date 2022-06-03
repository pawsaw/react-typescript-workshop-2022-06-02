import { useState, useCallback } from 'react';
import { BookList, OnBookSelected } from './BookList';
import { useBooks, useBook, Book } from '../../domain/books';
import { BookDetail } from '../../components/BookDetail';

export const BooksScreen: React.FC = () => {
  const { books, reload } = useBooks();
  const [selectedIsbn, setSelectedIsbn] = useState<string | null>(null);
  const { book: selectedBook } = useBook(selectedIsbn);

  const onBookSelected: OnBookSelected = useCallback(({ isbn }: Book) => {
    setSelectedIsbn(isbn);
  }, []);
  return (
    <div>
      {books ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
          }}
        >
          <BookList books={books} onBookSelected={onBookSelected} />
          {selectedBook ? <BookDetail book={selectedBook} /> : <span>No book selected</span>}
        </div>
      ) : (
        <span>Loading books...</span>
      )}
      <button onClick={reload}>Reload</button>
    </div>
  );
};
