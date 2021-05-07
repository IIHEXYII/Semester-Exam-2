const Item = props => {
    const { name, email, message } = props;
    return (
      <div className="admin-item">
        <h2 className="admin-item__title admin-item__container">{name}</h2>
        <div className="admin-item__text-container">
          <h3 className="admin-item__text">{email}</h3>
          <div className="admin-item__overflow">
          <p className="admin-item__text comment">{message}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Item;