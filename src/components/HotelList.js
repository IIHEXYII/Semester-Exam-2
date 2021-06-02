import Item from './Item'
import { Link } from "react-router-dom"

function HotelList({list, loading, error}) {
    const Loading = require('react-loading-animation');
  
    if (error) {
      return (
        <>
          <h1>An error occurred</h1>
          <p>{error}</p>
        </>
      )

    } else if (loading) {
        return (
          <>
            <Loading />
            <h1 className="loading">Starting up heroku server...</h1>
          </>
        );
    } else if (list.length > 0) {
      return (
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
    );
    } else if (list.length === 0) {
      return (
        <h1 className="noMatch">There are no matching elements</h1>
      )
    }

  }
  export default HotelList;

  