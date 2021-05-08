import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Service from '../components/Services';
import Featured from '../components/Featured';
// import Contact from '../components/Contact';
import Footer from '../components/Footer';

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
    <Featured/>
      {/* <Hero hero="ContactHero">
        <div className="banner-box">
        <Banner title="Contact us" subtitle="we are here for you if you need anything.">
          <Contact />
        </Banner>
        </div>
      </Hero> */}
   <Footer />
    </div>
    </>
  );
};

export default HomePage;