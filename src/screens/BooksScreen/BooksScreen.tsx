import { useCallback } from 'react';
import { BookList, OnBookSelected } from './BookList';
import { useBooks, Book } from '../../domain/books';
import { useHistory } from 'react-router-dom';

export const BooksScreen: React.FC = () => {
  const { books, reload } = useBooks();
  const router = useHistory();

  const onBookSelected: OnBookSelected = useCallback(({ isbn }: Book) => {
    router.push(`/books/${isbn}`);
  }, []);

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
