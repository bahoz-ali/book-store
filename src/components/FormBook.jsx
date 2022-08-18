import React from 'react';

const FormBook = () => {
  return (
    <section className="form-section">
      <div className="form__header">
        <h1>ADD NEW BOOK</h1>
      </div>

      <form className="from">
        <input
          type="text"
          placeholder="Book title"
          name="book_title"
          id="book_title"
        />
        
        <input
          type="text"
          placeholder="Book Author"
          name="book_author"
          id="book_author"
        />
      </form>
    </section>
  );
};

export default FormBook;
