const EnquiryItem = props => {
    const { id, first_name, last_name, email, people, phone, date_from, date_to } = props;
    return (
      <div className="admin-item" id={id}>
        <div className="admin-item__container">
        <h2 className="admin-item__title">{first_name}</h2>
        <h2 className="admin-item__title">{last_name}</h2>
        </div>
        <div className="admin-item__text-container">
          <p className="admin-item__text">{email}</p>
          <p className="admin-item__text">Persons: ({people})</p>
          <p className="admin-item__text">{phone}</p>
          <p className="admin-item__text">{date_from}</p>
          <p className="admin-item__text">{date_to}</p>
        </div>
      </div>
    );
  };
  
  export default EnquiryItem;