const Item = props => {
    const { title, description, image_url, price } = props;
    return (
      <div className="item">
        <h2 className="item__title">{title}</h2>
        <img className="item__img" src={image_url} alt={title}/>
        <h3 className="item__text">Price: {price} ,-</h3>
        <p className="item__text">{description}</p>
      </div>
    );
  };
  
  export default Item;