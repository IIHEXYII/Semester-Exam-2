import React from 'react';
import Hero from '../components/Hero';

const HomePage = () => {
  return (
    <>
    <div className="pageContent">
    <Hero />
        <h1 className="hero__title">Welcome</h1>
        <h2 className="hero__underTitle">This is the Home page.</h2>
    </div>

    </>
  );
};

export default HomePage;