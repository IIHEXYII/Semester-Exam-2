import { useContext, useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
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
      if (auth) {
        return (
          <>
            <div className="pageContent">
              <h1 className="header">List of Content</h1>
              {products.map(product => {
                  return (
                    <div className="card">
                      <Link key={product.id} to={`/edit/${product.id}`}>
                          <Item {...product} />
                      </Link>                  
                      <button onClick={() => deleteProduct(product.id, product.title)}>Delete</button> 
                    </div>
                  );
              })}
            </div>
          </>
          );
      }
   
};


export default Admin;

