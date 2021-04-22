import {useState, useEffect} from 'react'
import { BASE_URL } from '../utils/constants'
import axios from 'axios'
import Item from './Item'
import { Link } from "react-router-dom"

function HotelList() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [products, setProducts] = useState(null);
    const Loading = require('react-loading-animation');
 
    useEffect(() => {
      const fetchData = async() => {
        try {
          const response = await axios.get(`${BASE_URL}/products`);
            console.log(response);
          if (response.status === 200) {
            setProducts(response.data);
          } else {
            setError('An error occured');
          }
        } catch (error) {
          setError(error.toString());
        } finally {
          setLoading(false);
        }
      }
      fetchData();
    }, []);
  
    if (loading) {
        return <>
                <Loading />
                <h1 className="loading">Loading</h1>
                </>;
    }
    
    if (error) {
        return <h1>An error occurred</h1>;
    } 

    return (
      <>
        <div className="itemList">
           {products.map(product => {
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

  