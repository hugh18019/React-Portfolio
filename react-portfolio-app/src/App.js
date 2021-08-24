import React from 'react';
import Header from './components/Header';
import Stripe from './components/Stripe';
import AboutMe from './components/AboutMe';
import MainWork from './components/MainWork';
import OtherWork from './components/OtherWork';

import drinkLibraryImg from './assets/images/Drink-Library.jpg';
import weatherDashboardImg from './assets/images/weather-dashboard.jpg';

const otherWorks = [
  {
    name: 'Drink Library',
    img: `${drinkLibraryImg}`,
  },
  {
    name: 'Weather Dashboard',
    img: `${weatherDashboardImg}`,
  },
];

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Stripe />
        <AboutMe />
        <div className='container d-flex flex-column justify-content-center'>
          <div className='row justify-content-center'>
            <MainWork />
          </div>
          <div className='row justify-content-center'>
            {otherWorks.map((work) => (
              <OtherWork workName={work.name} img={work.img} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
