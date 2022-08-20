import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Circle() {
  const percentage = Math.floor(Math.random() * 101);

  return (
    <div style={{ width: 100, height: 100 }}>
      <CircularProgressbar value={percentage} text={`${percentage}%`} />
    </div>
  );
}

export default Circle;
