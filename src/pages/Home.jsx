import React from 'react';
import Book from '../components/Book';
import FormBook from '../components/FormBook';
import { useSelector } from 'react-redux';

const Home = () => {
  const books = useSelector((state) => state.books);

  return (
    <div>
      {books.map((book) => {
        return <Book key={book.id} bookData={book} />;
      })}

      <FormBook />
    </div>
  );
};

export default Home;
