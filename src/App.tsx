import { useCallback, useState } from 'react';
import './App.css';
import { BookDetail } from './components/BookDetail';
import { BookList, OnBookSelected } from './components/BookList';
import { Book } from './domain/Book';
import { useBooks } from './domain/useBooks';

function App() {
  const { books, reload } = useBooks();
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const onBookSelected: OnBookSelected = useCallback((book: Book) => {
    setSelectedBook(book);
  }, []);

  // ...

  return (
    <div className="App">
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
}

export default App;
