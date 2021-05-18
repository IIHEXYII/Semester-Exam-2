import { BiEnvelope, BiUser, BiCalendarPlus, BiCalendarMinus } from "react-icons/bi";
const EnquiryItem = props => {
    const { id, first_name, last_name, email, people, date_from, date_to, title, } = props;
    return (
      <div className="admin-item" id={id}>
        <h2 className="admin-item__text">{title}</h2>
        <div className="admin-item__container">
        <h2 className="admin-item__title">{first_name}</h2>
        <h2 className="admin-item__title">{last_name}</h2>
        </div>
        <div className="admin-item__text-container">
          <p className="admin-item__text"><BiEnvelope/> {email}</p>
          <p className="admin-item__text"><BiUser /> People staying: ({people})</p>
          <div className="admin-item__div">
          <p className="admin-item__text"><BiCalendarPlus />From: {date_from}</p>
          <p className="admin-item__text"><BiCalendarMinus />To: {date_to}</p>
          </div>
          {/* <p className="admin-item__text">{(date_to - date_from) * price}</p> */}
          {/* <p className="admin-item__text">{comment}</p> */}
        </div>
      </div>
    );
  };
  
  export default EnquiryItem;