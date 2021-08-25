import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Works';
import Contact from './pages/Contact';

// import pokemonBattleImg from './assets/images/Pokemon-Battle.png';
// import drinkLibraryImg from './assets/images/Drink-Library.png';
// import weatherDashboardImg from './assets/images/Weather-Dashboard.png';
// import workdaySchedulerImg from './assets/images/Workday-Scheduler.png';

// const Works = [
//   {
//     name: 'Pokemon Battler',
//     img: `${pokemonBattleImg}`,
//   },
//   {
//     name: 'Drink Library',
//     img: `${drinkLibraryImg}`,
//   },
//   {
//     name: 'Weather Dashboard',
//     img: `${weatherDashboardImg}`,
//   },
//   {
//     name: 'Workday Scheduler',
//     img: `${workdaySchedulerImg}`,
//   },
// ];

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // TODO: Add a comment describing the functionality of this method
  const renderPage = () => {
    // if (currentPage === 'Home') {
    //   return <Home />;
    // }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Works') {
      return <Work />;
    }
    // if (currentPage === 'Contact') {
    //   return <Contact />;
    // }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* // TODO: Add a comment describing what we are passing as props */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* // TODO: Add a comment explaining what is happening on the following line */}
      {renderPage()}
    </div>
  );
}
