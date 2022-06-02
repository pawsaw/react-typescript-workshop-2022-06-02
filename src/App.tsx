import { useCallback } from 'react';
import './App.css';
import { BookList, OnBookSelected } from './components/BookList';
import { books } from './data/books';
import { Book } from './domain/Book';

function App() {
  const onBookSelected: OnBookSelected = useCallback((book: Book) => {
    alert(book.price);
  }, []);

  return (
    <div className="App">
      <BookList books={books} onBookSelected={onBookSelected} />
    </div>
  );
}

export default App;
