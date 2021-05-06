const EnquiryItem = props => {
    const { id, first_name, last_name, email, people, comment, date_from, date_to } = props;
    return (
      <div className="admin-item" id={id}>
        <div className="admin-item__container">
        <h2 className="admin-item__title">{first_name}</h2>
        <h2 className="admin-item__title">{last_name}</h2>
        </div>
        <div className="admin-item__text-container">
          <p className="admin-item__text">{email}</p>
          <p className="admin-item__text">People staying: ({people})</p>
          <div className="admin-item__div">
          <p className="admin-item__text">From: {date_from}</p>
          <p className="admin-item__text">To: {date_to}</p>
          </div>
          <p className="admin-item__text">{comment}</p>
         
        </div>
      </div>
    );
  };
  
  export default EnquiryItem;