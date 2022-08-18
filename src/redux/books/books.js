import { createSlice } from '@reduxjs/toolkit';

const state = [];
export const bookSlice = createSlice({
  name: 'book',
  initialState: state,
  reducers: {
    addBook: (state, action) => {
      state.concat(action.payload);
    },
    removeBook: (state, action) => {
      const id = action.id;

      state = state.filter((book) => {
        if (book.id !== id) return book;
      });
    },
  },
});
