// src/App.jsx
import { BookContext } from './context/BookContext';
import { useBooks } from './hooks/useBooks';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import ReadBooks from './components/ReadBooks';
import Filter from './components/Filter';
import './index.css';

function App() {
  const bookActions = useBooks();

  return (
    <BookContext.Provider value={bookActions}>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Gestión de Libros</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <BookForm />
            <Filter />
          </div>
          
          <div className="md:col-span-2">
            <BookList />
            <ReadBooks />
          </div>
        </div>
      </div>
    </BookContext.Provider>
  );
}

export default App;