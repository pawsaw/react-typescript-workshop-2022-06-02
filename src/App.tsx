import { Link, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { BooksScreen } from './screens/BooksScreen';
import { PlaygroundScreen } from './screens/PlaygroundScreen';

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/playground">Playground</Link>
        </li>
        <li>
          <Link to="/books">Books</Link>
        </li>
      </ul>
      <div>
        <Switch>
          <Route path="/playground" component={PlaygroundScreen} />
          <Route path="/books" component={BooksScreen} />
          <Redirect to="/books" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
