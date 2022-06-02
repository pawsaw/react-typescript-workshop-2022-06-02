import { noop } from 'rxjs';
import { Book } from '../../../domain/Book';
import { OnBookSelected } from '../OnBookSelected';

export interface BookListItemProps {
  book: Book;
  onBookSelected?: OnBookSelected;
}

export const BookListItem: React.FC<BookListItemProps> = ({ book, onBookSelected = noop }) => {
  return <div onClick={() => onBookSelected(book)}>{book.title}</div>;
};
