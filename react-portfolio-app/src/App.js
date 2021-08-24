import React from 'react';
import Header from './components/Header';
import Stripe from './components/Stripe';

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Stripe />
        {/* <AboutMe />
        <MainWork />
        {otherWorks.map((work) => (
          <OtherWork work />
        ))} */}
      </main>
    </div>
  );
}
