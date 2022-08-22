import { createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../service';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const FETCH_BOOKS = 'bookstore/books/FETCH_BOOKS';

const initialState = [];

// book reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case `${FETCH_BOOKS}/fulfilled`:
      return [...action.payload];

    case `${ADD_BOOK}/fulfilled`:
      return [...state, action.payload];

    case `${REMOVE_BOOK}/fulfilled`:
      return state.filter((book) => book.item_id !== action.payload);

    default:
      return state;
  }
};

// action creators

export const getBooks = createAsyncThunk(FETCH_BOOKS, async () => {
  const response = await fetch(API.booksEndPoint);
  const data = await response.json();

  const books = Object.keys(data).map((key) => ({
    item_id: key,
    title: data[key][0].title,
    author: data[key][0].author,
    category: data[key][0].category,
  }));

  return books;
});

export const addBook = createAsyncThunk(ADD_BOOK, async (book) => {
  await fetch(API.booksEndPoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(book),
  });

  return book;
});

export const removeBook = createAsyncThunk(REMOVE_BOOK, async (id) => {
  const endPoint = `${API.booksEndPoint}/${id}`;

  await fetch(endPoint, {
    method: 'DELETE',
    body: JSON.stringify({ item_id: id }),
  });

  return id;
});
