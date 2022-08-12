import React from 'react';
import Book from '../components/Book';
import FormBook from '../components/FormBook';

const Home = () => {
  return (
    <div>
      <Book author="xyz" title="Happy life" />
      <Book author="marvi" title="Try not to cry" />
      <FormBook />
    </div>
  );
};

export default Home;
