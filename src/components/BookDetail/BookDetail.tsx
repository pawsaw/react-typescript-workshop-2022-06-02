import { Book } from '../../domain/Book';

export interface BookDetailProps {
  book: Book;
}

export const BookDetail: React.FC<BookDetailProps> = ({ book }) => {
  return (
    <div>
      <div>ISBN: {book.isbn}</div>
      <div>Title: {book.title}</div>
      <div>Subtitle: {book.subtitle}</div>
    </div>
  );
};
