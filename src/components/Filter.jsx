// src/components/Filter.jsx
import { useContext } from 'react';
import { BookContext } from '../context/BookContext';

const Filter = () => {
  const { updateFilters, filters } = useContext(BookContext);

  const handleFilterChange = (e) => {
    updateFilters({
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow mb-6">
      <h2 className="text-xl font-semibold mb-4">Filtrar Libros</h2>
      <div className="space-y-3">
        <div>
          <label className="block text-gray-700 mb-1">Título</label>
          <input
            type="text"
            name="title"
            value={filters.title}
            onChange={handleFilterChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Autor</label>
          <input
            type="text"
            name="author"
            value={filters.author}
            onChange={handleFilterChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Género</label>
          <input
            type="text"
            name="genre"
            value={filters.genre}
            onChange={handleFilterChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          onClick={() => updateFilters({ title: '', author: '', genre: '' })}
          className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
        >
          Limpiar filtros
        </button>
      </div>
    </div>
  );
};

export default Filter;
