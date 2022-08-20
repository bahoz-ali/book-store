import React, { useEffect } from 'react';
import Book from '../components/Book';
import FormBook from '../components/FormBook';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../redux/books/books';

const Home = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <div>
      {books.map((book) => {
        return <Book key={book.item_id} bookData={book} />;
      })}

      <FormBook />
    </div>
  );
};

export default Home;
