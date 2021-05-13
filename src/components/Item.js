const Item = props => {
    const { title, description, image_url, price, } = props;
    return (
      <div className="item">
        <h2 className="item__title">{title}</h2>
        <img className="item__img" src={image_url} alt={title}/>
        <div className="item__text-container">
          <p className="item__text">{description}</p>
        </div>
      </div>
    );
  };
  
  export default Item;