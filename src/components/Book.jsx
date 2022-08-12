import React from 'react';

const Book = (props) => {
  const { author, title } = props;

  return (
    <section className="book-component">
      <h2>{title}</h2>
      <p>{author}</p>
    </section>
  );
};

export default Book;
