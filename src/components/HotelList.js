import {useState, useEffect} from 'react';
import { BASE_URL } from '../utils/constants';
import axios from 'axios';
import Item from './Item';

function HotelList() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [products, setProducts] = useState(null);
    // const product = 
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
        return <h1>Loading...</h1>;
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
                    </div>
                  );
              })}
        </div>
      </>
    );
  }
  export default HotelList;