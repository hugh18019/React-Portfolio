import React from 'react';
import stripe from '../assets/images/Strip.png';

export default function Stripe() {
  const imgSrc = '../assets/images/Strip.png';

  return (
    <div>
      {/* <img src={`${imgSrc}`} alt='Stripe cap' /> */}
      <img src={`${stripe}`} alt='Stripe cap' />
    </div>
  );
}
