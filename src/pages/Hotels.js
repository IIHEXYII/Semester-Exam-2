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

// import { useState, useEffect } from 'react';
// import useAxios from '../utils/useAxios';
// import { PRODUCTS_PATH } from '../utils/constants';
// import Item from '../components/Item';

// const Hotels = () => {
//     const [products, setProducts] = useState(null);
//     const http = useAxios();

    

//     useEffect(() => {
//         const getProducts = async () => {
//           try {
//             const response = await http.get(PRODUCTS_PATH);
//             console.log(response);
//             setProducts(response.data);
//           } catch (error) {
//             console.log(error);
//           }
//         };

//         getProducts();
//       }, []);

//       if (!products) {
//         return <p>Loading...</p>;
//       }
//         return (
//           <>
//             <div className="pageContent">
//               <h1 className="header">List of Content</h1>
//               {products.map(product => {
//                   return (
//                     <div key={product.id} className="card">
//                           <Item {...product} />                
                     
//                     </div>
//                   );
//               })}
//             </div>
//           </>
//           );
   
// };


// export default Hotels;

