const Item = props => {
    const { name, email, message } = props;
    return (
      <div className="item">
        <h2 className="item__title">{name}</h2>
        <div className="item__text-container">
          <h3 className="item__text">Price: {email}</h3>
          <p className="item__text">{message}</p>
        </div>
      </div>
    );
  };
  
  export default Item;