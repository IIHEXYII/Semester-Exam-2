import { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import useAxios from '../utils/useAxios';
import { ENQUIRIES_PATH } from '../utils/constants';
import EnquiryItem from '../components/EnquiryItem';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
// import axios from 'axios';

const AdminEnquiry = () => {
    const [auth] = useContext(AuthContext);
    const history = useHistory();
    const [enquiries, setProducts] = useState(null);
    const http = useAxios();
    const Loading = require('react-loading-animation');

    useEffect(() => {
        const getProducts = async () => {
          try {
            const response = await http.get(ENQUIRIES_PATH);
            console.log(response);
            setProducts(response.data);
          } catch (error) {
            console.log(error);
          }
        };

        getProducts();
      }, [http]);


    if (!auth) {
        history.push('/login');
      }
      if (!enquiries) {
        return <>
                  <Loading />;
                  <h1 className="loading">Loading</h1>
              </>
      }
        return (
          <>
            <div className="pageContent">
            <Hero hero="AdminHero">
            <Banner title="Booking Enquiries">
                </Banner>
            {/* <h1 className="header">Admin Panel</h1> */}
            </Hero>
              <div className="itemList">
                {enquiries.map(product => {
                        return (
                          <div key={product.id} className="itemList__component">
                                <EnquiryItem {...product} />
                                {/* <button className="btn__delete" onClick={() => deleteProduct(product.id, product.title)}>Delete</button>  */}
                          </div>
                        );
                    })}
              </div>
            </div>
            <Footer />
          </>
          );
   
};


export default AdminEnquiry;

