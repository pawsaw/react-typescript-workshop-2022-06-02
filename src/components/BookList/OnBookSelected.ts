import { Book } from '../../domain/Book';

export interface OnBookSelected {
    (book: Book): void;
}
