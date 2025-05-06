// src/hooks/useBooks.js
import { useState, useEffect } from 'react';

export const useBooks = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [readBooks, setReadBooks] = useState([]);
  const [filters, setFilters] = useState({
    title: '',
    author: '',
    genre: ''
  });

  // Cargar datos del localStorage al iniciar
  useEffect(() => {
    const savedBooks = JSON.parse(localStorage.getItem('books')) || [];
    const savedReadBooks = JSON.parse(localStorage.getItem('readBooks')) || [];
    setBooks(savedBooks);
    setReadBooks(savedReadBooks);
    setFilteredBooks(savedBooks);
  }, []);

  // Guardar en localStorage cuando cambian los datos
  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  useEffect(() => {
    localStorage.setItem('readBooks', JSON.stringify(readBooks));
  }, [readBooks]);

  // Filtrar libros
  useEffect(() => {
    let result = books;
    if (filters.title) {
      result = result.filter(book => 
        book.title.toLowerCase().includes(filters.title.toLowerCase())
      );
    }
    if (filters.author) {
      result = result.filter(book => 
        book.author.toLowerCase().includes(filters.author.toLowerCase())
      );
    }
    if (filters.genre) {
      result = result.filter(book => 
        book.genre.toLowerCase().includes(filters.genre.toLowerCase())
      );
    }
    setFilteredBooks(result);
  }, [filters, books]);

  const addBook = (book) => {
    setBooks([...books, { ...book, id: Date.now() }]);
  };

  const editBook = (id, updatedBook) => {
    setBooks(books.map(book => book.id === id ? { ...updatedBook, id } : book));
  };

  const deleteBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
    setReadBooks(readBooks.filter(bookId => bookId !== id));
  };

  const toggleRead = (id) => {
    if (readBooks.includes(id)) {
      setReadBooks(readBooks.filter(bookId => bookId !== id));
    } else {
      setReadBooks([...readBooks, id]);
    }
  };

  const updateFilters = (newFilters) => {
    setFilters({ ...filters, ...newFilters });
  };

  return {
    books: filteredBooks,
    readBooks,
    addBook,
    editBook,
    deleteBook,
    toggleRead,
    updateFilters,
    filters
  };
};