const ADD = 'bookstore/books/ADD_BOOK';
const REMOVE = 'bookstore/books/REMOVE_BOOK';

const initialState = [];

// book reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.book];
    case REMOVE:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

// action creators
export const addBook = (book) => ({ type: ADD, book });
export const removeBook = (id) => ({ type: REMOVE, id });
