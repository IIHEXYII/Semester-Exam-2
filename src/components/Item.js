const Item = props => {
    const { title, description, image_url, price } = props;
    return (
      <div style={{ width: '100%', maxWidth: '500px' }}>
        <h2 className="item__title">{title}</h2>
        <img className="item__img" src={image_url} alt={title} style={{ width: '100%' }} />
        <h3 className="item__text">price: {price} ,-</h3>
        <p className="item__text">Description: {description}</p>
      </div>
    );
  };
  
  export default Item;