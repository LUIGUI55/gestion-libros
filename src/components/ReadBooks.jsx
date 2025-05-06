// src/components/ReadBooks.jsx
import { useContext } from 'react';
import { BookContext } from '../context/BookContext';

const ReadBooks = () => {
  const { books, readBooks, toggleRead } = useContext(BookContext);

  const readBooksList = books.filter(book => readBooks.includes(book.id));

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Libros Leídos</h2>
      {readBooksList.length === 0 ? (
        <p>No has marcado ningún libro como leído</p>
      ) : (
        <ul className="space-y-3">
          {readBooksList.map(book => (
            <li key={book.id} className="border-b pb-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">{book.title}</h3>
                  <p className="text-sm text-gray-600">Autor: {book.author}</p>
                  <p className="text-sm text-gray-600">Género: {book.genre}</p>
                  <p className="text-sm text-gray-600">Año: {book.year}</p>
                </div>
                <button
                  onClick={() => toggleRead(book.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded text-sm"
                >
                  Marcar como no leído
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReadBooks;