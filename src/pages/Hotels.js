import React, {useState, useEffect} from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import HotelList from '../components/HotelList';
import SearchBar from '../components/Search';
import { BASE_URL } from '../utils/constants'
import axios from 'axios';
// import AutoComplete from '../components/AutoComplete';


function Hotels() {
    const [originalData, setOriginalData] = useState([]);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async() => {
            console.log("fuck you");
          try {
            const response = await axios.get(`${BASE_URL}/products`);
            if (response.status === 200) {
                setOriginalData(response.data);
                setData(response.data);
                setLoading(false);
            }
          } catch (error) {
            setError(error.toString());
          }
        }
        fetchData();
      }, []);

    function setSearchedResults(newData) {
        setData(newData);
    }
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
            <SearchBar originalList={originalData} list={data} setSearchedResults={setSearchedResults}/>
            <HotelList list={data} loading={loading} error={error}/>
            
        </div>
        </>
    )
}

export default Hotels
