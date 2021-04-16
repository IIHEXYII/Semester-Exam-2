import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Service from '../components/Services';
import Featured from '../components/Featured';

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
    <Service />
    <Featured />
    </div>
    </>
  );
};

export default HomePage;