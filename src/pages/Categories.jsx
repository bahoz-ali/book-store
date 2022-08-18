import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => {
    return state.categories;
  });

  const handleCheckStatus = () => {
    dispatch(checkStatus());
  };

  return (
    <div>
      <button onClick={handleCheckStatus}>Check status</button>
      <p>{status}</p>
    </div>
  );
};

export default Categories;
