import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Circle() {
  const percentage = Math.floor(Math.random() * 101);

  return (
    <div className="circle-component">
      <div style={{ width: 50, height: 50 }}>
        <CircularProgressbar value={percentage} />
      </div>

      <div>
        <h2>{percentage}%</h2>
        <p>{percentage == 100 ? 'Completed' : 'Not completed'}</p>
      </div>
    </div>
  );
}

export default Circle;
