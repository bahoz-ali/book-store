const ADD = 'bookstore/books/ADD_BOOK';
const REMOVE = 'bookstore/books/REMOVE_BOOK';

const initialState = [
  {
    title: 'never give up',
    author: 'bahoz',
    id: 1,
  },
  {
    title: 'Try it now, Get it later',
    author: 'Doni kard',
    id: 2,
  },
  {
    title: 'Thing like a real man',
    author: 'hilali',
    id: 3,
  },
];

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
