import React from 'react';
import './book.style.css';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import Circle from './Circle';

const Book = (props) => {
  const dispatch = useDispatch();
  const { author, title, item_id } = props.bookData;

  const deleteHandler = (id) => {
    if (!id) return;

    dispatch(removeBook(id));
  };

  return (
    <section className="book-component">
      <h3>{title}</h3>
      <p>{author}</p>
      <button
        className="btn btn--primary"
        onClick={() => deleteHandler(item_id)}
        type="button">
        Delete
      </button>

      <Circle />
    </section>
  );
};





export default Book;
