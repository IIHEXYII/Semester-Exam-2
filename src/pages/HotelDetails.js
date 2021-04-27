import {useState, useEffect} from 'react'
import { BASE_URL } from '../utils/constants'
import axios from 'axios'
import ItemDetails from '../components/ItemDetails'
import { useParams } from "react-router-dom"
import AddEnquiry from '../components/AddEnquiry'

function SingleHotels() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [products, setProducts] = useState(null);
    const Loading = require('react-loading-animation');
    const { id } = useParams();
    const UNIQUE_URL = BASE_URL + "/products/" + id;

    useEffect(() => {
      const fetchData = async() => {
        try {
          const response = await axios.get(`${UNIQUE_URL}`);
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
      <div className="pageContent">
        <div className="itemDetailsList">
                    <div key={products.id} className="itemDetailsList__component">
                      <ItemDetails {...products} />
                    </div>
                {/* <div className="placeholder"> */}
                    <AddEnquiry />
                {/* </div> */}
            </div>
        </div>
      </>
    );
  }
  export default SingleHotels;

  