import { combineReducers, configureStore,applyMiddleware } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';
import {logger} from 'redux-logger'

const rootReducer = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [logger]
  
});

export default store;
