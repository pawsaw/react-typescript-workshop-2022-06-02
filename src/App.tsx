import { useCallback, useState } from 'react';
import './App.css';
import { BookDetail } from './components/BookDetail';
import { BookList, OnBookSelected } from './components/BookList';
import { useBooks, useBook, Book } from './domain/books';

function App() {
  const { books, reload } = useBooks();
  const [selectedIsbn, setSelectedIsbn] = useState<string | null>(null);
  const { book: selectedBook } = useBook(selectedIsbn);

  const onBookSelected: OnBookSelected = useCallback(({ isbn }: Book) => {
    setSelectedIsbn(isbn);
  }, []);

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
