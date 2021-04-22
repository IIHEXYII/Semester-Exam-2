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
      <Banner title="Hotel Booking" subtitle="Find your dream hotel today!">
        <Link to="/Hotels" className="banner__btn">
          our Hotels
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