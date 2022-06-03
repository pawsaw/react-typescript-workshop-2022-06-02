import { Book } from '../../../domain/books/Book';

export interface OnBookSelected {
  (book: Book): void;
}
