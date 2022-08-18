import React from 'react';

const Book = (props) => {
  const { author, title } = props.bookData;

  return (
    <section className="book-component">
      <h2>{title}</h2>
      <p>{author}</p>
      <button type="button">delete</button>
    </section>
  );
};

export default Book;
