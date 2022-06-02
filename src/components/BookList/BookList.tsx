import { Book } from '../../domain/Book'
import { BookListItem } from './BookListItem/BookListItem';
import { OnBookSelected } from './OnBookSelected';

export interface BookListProps {
    books: Book[];
    onBookSelected?: OnBookSelected;
}

export const BookList: React.FC<BookListProps> = ({ books, onBookSelected }) => {
    return <div>
        {
            books.map(book => <BookListItem book={book} key={book.title} onBookSelected={onBookSelected} />)
        }
    </div>
}
