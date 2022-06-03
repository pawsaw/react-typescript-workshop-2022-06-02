import { Book } from '../../../domain/books/Book';
import { BookListItem } from './BookListItem/BookListItem';
import { OnBookSelected } from './OnBookSelected';

export interface BookListProps {
  books: Book[];
  onBookSelected?: OnBookSelected;
}

export const BookList: React.FC<BookListProps> = ({ books, onBookSelected }) => {
  return (
    <div>
      {books.map((book) => (
        <BookListItem book={book} key={book.isbn} onBookSelected={onBookSelected} />
      ))}
    </div>
  );
};
