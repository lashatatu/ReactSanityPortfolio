import React from 'react';
import { Navbar } from '../components';
import { About, Awards, Footer, Header, Skills, Work } from '../container';

const LtRoutes = () => {
  return (
    <div className={'app'}>
      <Navbar/>
      <Header/>
      <About/>
      <Work/>
      <Skills/>
      <Awards/>
      <Footer/>
    </div>
  );
};

export default LtRoutes;