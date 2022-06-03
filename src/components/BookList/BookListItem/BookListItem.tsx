import { Book } from '../../../domain/books/Book';
import { noop } from '../../../util/noop';
import { OnBookSelected } from '../OnBookSelected';

export interface BookListItemProps {
  book: Book;
  onBookSelected?: OnBookSelected;
}

export const BookListItem: React.FC<BookListItemProps> = ({ book, onBookSelected = noop }) => {
  return <div onClick={() => onBookSelected(book)}>{book.title}</div>;
};
