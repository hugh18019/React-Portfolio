import React from 'react';
import Header from './components/Header';
import Stripe from './components/Stripe';
import AboutMe from './components/AboutMe';
import MainWork from './components/MainWork';
import OtherWork from './components/OtherWork';

import pokemonBattleImg from './assets/images/Pokemon-Battle.jpg';
import drinkLibraryImg from './assets/images/Drink-Library2.jpg';
import weatherDashboardImg from './assets/images/weather.png';

const otherWorks = [
  {
    name: 'Pokemon Battler',
    img: `${pokemonBattleImg}`,
  },
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
          {/* <div className='row justify-content-center'>
            <MainWork />
          </div> */}
          <div className='row justify-content-center d-grid gap-3'>
            {otherWorks.map((work) => (
              <OtherWork workName={work.name} img={work.img} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
