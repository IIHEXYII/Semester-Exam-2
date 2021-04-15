import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
const HomePage = () => {
  return (
    <>
    <div className="pageContent">
    <Hero>
      <Banner title="luxurious Rooms" subtitle="deluxe rooms starting at $299">
        <Link to="/rooms" className="banner__btn">
          our rooms
        </Link>
      </Banner>
    </Hero>
        <h1 className="hero__title">Welcome</h1>
        <h2 className="hero__underTitle">This is the Home page.</h2>
    </div>

    </>
  );
};

export default HomePage;