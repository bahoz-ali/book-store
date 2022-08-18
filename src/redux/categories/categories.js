const CHECK = 'bookstore/categories/CHECK';

const initialState = [];

// category reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case CHECK:
      return 'Under construction';
    default:
      return state;
  }
};

// action creators
export const checkStatus = () => ({ type: CHECK });
