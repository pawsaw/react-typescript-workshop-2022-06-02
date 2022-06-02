import { useCallback } from 'react';
import './App.css';
import { BookList, OnBookSelected } from './components/BookList';
import { Book } from './domain/Book';
import { useBooks } from './domain/useBooks';

function App() {
  const { books, reload } = useBooks();

  const onBookSelected: OnBookSelected = useCallback((book: Book) => {
    alert(book.price);
  }, []);

  // ...

  return (
    <div className="App">
      {books ? (
        <BookList books={books} onBookSelected={onBookSelected} />
      ) : (
        <span>Loading books...</span>
      )}
      <button onClick={reload}>Reload</button>
    </div>
  );
}

export default App;
