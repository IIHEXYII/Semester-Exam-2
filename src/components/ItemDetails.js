const ItemDetails = props => {
    const { title, description, image_url, price, breakfast, capacity } = props;

    const breakFastValue = breakfast.toString();
    return (
      <div className="itemDetails">
        <h2 className="itemDetails__title">{title}</h2>
        <img className="itemDetails__img" src={image_url} alt={title}/>
        <div className="itemDetails__text-container">
          <h3 className="itemDetails__text">Price per night: {price} ,-</h3>
          <h4 className="itemDetails__text"> Rooms: {capacity}</h4>
          <h5 className="itemDetails__text"> Breakfast included: {breakFastValue ? "Yes" : "No"}</h5>
          <p className="itemDetails__text">{description}</p>
        </div>
      </div>
    );
  };
  
  export default ItemDetails;