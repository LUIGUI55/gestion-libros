// src/components/BookForm.jsx
import { useContext, useState } from 'react';
import { BookContext } from '../context/BookContext';

const BookForm = () => {
  const { addBook, editBook } = useContext(BookContext);
  const [book, setBook] = useState({
    title: '',
    author: '',
    genre: '',
    year: ''
  });
  const [editingId, setEditingId] = useState(null);

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      editBook(editingId, book);
      setEditingId(null);
    } else {
      addBook(book);
    }
    setBook({
      title: '',
      author: '',
      genre: '',
      year: ''
    });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow mb-6">
      <h2 className="text-xl font-semibold mb-4">
        {editingId ? 'Editar Libro' : 'Agregar Libro'}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Título</label>
          <input
            type="text"
            name="title"
            value={book.title}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Autor</label>
          <input
            type="text"
            name="author"
            value={book.author}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Género</label>
          <input
            type="text"
            name="genre"
            value={book.genre}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Año de publicación</label>
          <input
            type="number"
            name="year"
            value={book.year}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          {editingId ? 'Actualizar' : 'Agregar'}
        </button>
        {editingId && (
          <button
            type="button"
            onClick={() => {
              setEditingId(null);
              setBook({
                title: '',
                author: '',
                genre: '',
                year: ''
              });
            }}
            className="ml-2 bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
          >
            Cancelar
          </button>
        )}
      </form>
    </div>
  );
};

export default BookForm;