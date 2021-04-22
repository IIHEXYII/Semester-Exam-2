import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import HotelList from '../components/HotelList';
// import AutoComplete from '../components/AutoComplete';

function Hotels() {
    return (
        <>
      <div className="pageContent">
            <Hero hero="HotelsHero">
                <Banner title="Our Hotels">
                    <Link to="/" className="banner__btn">
                        Return Home
                    </Link>
                </Banner>
            </Hero>
            {/* <AutoComplete /> */}
            <HotelList />
        </div>
        </>
    )
}

export default Hotels
