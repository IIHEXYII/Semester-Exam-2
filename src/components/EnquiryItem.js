const EnquiryItem = props => {
    const { id, first_name, last_name, email, people, phone, date_from, date_to } = props;
    return (
      <div className="item" id={id}>
        <h2 className="item__title">{first_name}</h2>
        <h2 className="item__title">{last_name}</h2>
        <div className="item__text-container">
          <p className="item__text">{email}</p>
          <p className="item__text">{people}</p>
          <p className="item__text">{phone}</p>
          <p className="item__text">{date_from}</p>
          <p className="item__text">{date_to}</p>
        </div>
      </div>
    );
  };
  
  export default EnquiryItem;