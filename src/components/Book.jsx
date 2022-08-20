import React from 'react';
import './book.style.css';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import Circle from './Circle';

const Book = (props) => {
  return (
    <section className="book-component">
      <BookMain bookData={props.bookData} />
      <Circle />
      <div className="Line large"></div>
      <BookChapter />
    </section>
  );
};

function BookMain(props) {
  const dispatch = useDispatch();
  const { author, title, item_id, category } = props.bookData;

  const deleteHandler = (id) => {
    if (!id) return;

    dispatch(removeBook(id));
  };

  return (
    <div className="book">
      <div className="book-info__header">
        <p className="book__genre">{category}</p>
        <h2 className="book__title">{title}</h2>
        <p className="book__author">{author}</p>
      </div>

      <div className="book__footer">
        <button className="btn btn--secondary" type="button">
          Comment
        </button>

        <div className="Line line--small"></div>

        <button
          className="btn btn--secondary"
          onClick={() => deleteHandler(item_id)}
          type="button">
          Remove
        </button>

        <div className="Line line--small"></div>

        <button className="btn btn--secondary" type="button">
          Edit
        </button>
      </div>
    </div>
  );
}

function BookChapter() {
  return (
    <div className="book-chapter">
      <div>
        <p className="current__chapter">current chapter</p>
        <h2 className="chapter__number">chapter 18</h2>
      </div>

      <button className="btn btn--primary" type="button">
        update progress
      </button>
    </div>
  );
}

export default Book;
