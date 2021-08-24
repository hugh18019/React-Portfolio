import React from 'react';
import './style.css';

export default function OtherWork(props) {
  return (
    <div
      className='p-2 float-start head-text justify-content-center'
      style={{ width: '35%' }}
    >
      <img
        src={props.img}
        className='rounded img-fluid'
        alt='otherwork cap'
        style={{ width: '100%' }}
      />
      <div className='text-on-image justify-content-center'>
        <h3>text</h3>
      </div>
    </div>
  );
}
