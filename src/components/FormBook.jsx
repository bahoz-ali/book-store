import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const FormBook = () => {
  const dispatch = useDispatch();

  const [bookData, setBookData] = useState({
    title: '',
    author: '',
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setBookData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const { title, author } = bookData;

    if (!title.trim() || !author.trim()) return;

    const newBook = {
      title,
      author,
      id: uuidv4(),
    };

    dispatch(addBook(newBook));
  };

  return (
    <section className="form-section">
      <div className="form__header">
        <h1>ADD NEW BOOK</h1>
      </div>

      <form className="from" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Book title"
          name="title"
          value={bookData.title}
          onChange={changeHandler}
          id="title"
        />

        <input
          type="text"
          placeholder="Book Author"
          name="author"
          id="author"
          onChange={changeHandler}
          value={bookData.author}
        />

        <button type="submit">Add Book</button>
      </form>
    </section>
  );
};

export default FormBook;
