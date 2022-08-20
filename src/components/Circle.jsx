import React from 'react';
import './circle.style';

function Circle() {
  return (
    <div class="circle-wrap">
      <div class="circle">
        <div class="mask full-1">
          <div class="fill-1"></div>
        </div>
        <div class="mask half">
          <div class="fill-1"></div>
        </div>
        <div class="inside-circle">85%</div>
      </div>
    </div>
  );
}

export default Circle;
