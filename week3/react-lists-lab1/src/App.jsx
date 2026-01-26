import Book from './books';
import booksData from './booksData';
import './book.css';


function App() {
  return (
    <div className="App">
      <h1>Book List</h1>
      <div className="book-list">
        {booksData.map((book) => (
  <Book key={book.id} book={book} />
))}
      </div>
    </div>
  );
}

export default App;