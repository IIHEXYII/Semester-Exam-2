import {useState, useEffect} from 'react'
// import { BASE_URL } from '../utils/constants'
// import axios from 'axios'
import Item from './Item'
import { Link } from "react-router-dom"

function HotelList({list, loading, error}) {
    const Loading = require('react-loading-animation');
  
    if (loading) {
        return <>
                  <Loading />
                  <h1 className="loading">Loading</h1>
               </>;
    }
    
    if (error) {
        return <h1>An error occurred</h1>;
    };
    console.log(list);
    return (
      <>
        <div className="itemList">
           {list.map(product => {
                  return (
                    <div key={product.id} className="itemList__component">
                      <Item {...product} />
                       <Link className="btn__btn" to={`/hotel/${product.id}`} key={product.id}>
                          More               
                       </Link>
                    </div>
                  );
              })}
        </div>
      </>
    );
  }
  export default HotelList;

  