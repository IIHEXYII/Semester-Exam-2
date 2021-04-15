import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
function Rooms() {
    return (
        <>
      <div className="pageContent">
            <Hero hero="roomsHero">
                <Banner title="Our Rooms">
                    <Link to="/rooms" className="banner__btn">
                        Return Home
                    </Link>
                </Banner>
            </Hero>
            <h1 className="hero__title">Rooms</h1>
            <h2 className="hero__underTitle">there are a lot of rooms here</h2>
        </div>
        </>
    )
}

export default Rooms
