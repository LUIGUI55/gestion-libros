// src/components/BookList.jsx
import { useContext } from 'react';
import { BookContext } from '../context/BookContext';

const BookList = () => {
  const { books, deleteBook, toggleRead, editBook, readBooks } = useContext(BookContext);

  const handleEdit = (book) => {
    editBook(book.id, book);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow mb-6">
      <h2 className="text-xl font-semibold mb-4">Todos los Libros</h2>
      {books.length === 0 ? (
        <p>No hay libros registrados</p>
      ) : (
        <ul className="space-y-3">
          {books.map(book => (
            <li key={book.id} className="border-b pb-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">{book.title}</h3>
                  <p className="text-sm text-gray-600">Autor: {book.author}</p>
                  <p className="text-sm text-gray-600">Género: {book.genre}</p>
                  <p className="text-sm text-gray-600">Año: {book.year}</p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => toggleRead(book.id)}
                    className={`px-3 py-1 rounded text-sm ${
                      readBooks.includes(book.id) 
                        ? 'bg-green-500 text-white' 
                        : 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    {readBooks.includes(book.id) ? 'Leído' : 'Marcar como leído'}
                  </button>
                  <button
                    onClick={() => handleEdit(book)}
                    className="px-3 py-1 bg-yellow-500 text-white rounded text-sm"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => deleteBook(book.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded text-sm"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;