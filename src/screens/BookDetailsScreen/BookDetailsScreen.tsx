import { useParams } from 'react-router-dom';
import { useBook } from '../../domain/books';
import { BookDetail } from './BookDetail';

export interface BookDetailsScreenParams {
  isbn: string;
}

export const BookDetailsScreen: React.FC = () => {
  const { isbn } = useParams<BookDetailsScreenParams>();
  const { book } = useBook(isbn);

  return book ? <BookDetail book={book} /> : <span>No book selected</span>;
};
