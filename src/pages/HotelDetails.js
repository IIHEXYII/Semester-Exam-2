import {useState, useEffect} from 'react'
import { BASE_URL } from '../utils/constants'
import axios from 'axios'
import ItemDetails from '../components/ItemDetails'
import { useParams } from "react-router-dom"
import AddEnquiry from '../components/AddEnquiry'
import Footer from '../components/Footer';

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
        const modalBtn = document.getElementById("modal-btn")
        const modal = document.querySelector(".modal")
        const closeBtn = document.querySelector(".close-btn")
        
        modalBtn.onclick = function(){
            modal.style.display = "block"
          }
          closeBtn.onclick = function(){
            modal.style.display = "none"
          }
          window.onclick = function(e){
            if(e.target === modal){
              modal.style.display = "none"
            }
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
              <button className="btn__submit" id="modal-btn">Book Now</button>
                      </div>
                  {/* <div className="placeholder"> */}
                     
                  {/* </div> */}
              </div>

          <div className="modal">
            <div className="modal-content">
              <span className="close-btn">&times;</span>
              <AddEnquiry />
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }
  export default SingleHotels;

  