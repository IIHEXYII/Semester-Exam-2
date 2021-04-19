import { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import useAxios from '../utils/useAxios';
import { PRODUCTS_PATH } from '../utils/constants';
import Item from '../components/Item';

const Admin = () => {
    const [auth] = useContext(AuthContext);
    const history = useHistory();
    const [products, setProducts] = useState(null);
    const http = useAxios();
  // eslint-disable-next-line react-hooks/exhaustive-deps
    const [render, setRender] = useState(null);

    const deleteProduct = async (slug, productTitle) => {
      try {
        const response = await http.delete(`${PRODUCTS_PATH}/${slug}`);
        console.log(response);
        alert(`${productTitle} has been deleted.`);
      } catch (error) {
        console.log(error);
      } finally {
        setRender(render + 1);
      }
    };

    useEffect(() => {
        const getProducts = async () => {
          try {
            const response = await http.get(PRODUCTS_PATH);
            console.log(response);
            setProducts(response.data);
          } catch (error) {
            console.log(error);
          }
        };

        getProducts();
      }, []);

    if (!auth) {
        history.push('/login');
      }
      if (!products) {
        return <p>Loading...</p>;
      }
        return (
          <>
            <div className="pageContent">
              <h1 className="header">List of Content</h1>
              <div className="itemList">
                {products.map(product => {
                        return (
                          <div key={product.id} className="itemList__component">
                                <Item {...product} />
                                <button className="btn__delete" onClick={() => deleteProduct(product.id, product.title)}>Delete</button> 
                          </div>
                        );
                    })}
              </div>
            </div>
          </>
          );
   
};


export default Admin;

