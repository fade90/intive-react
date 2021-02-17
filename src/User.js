import "./User.css";
import { Link } from "react-router-dom";

const User = (props) => {
  const fullName = `${props.name.title}. ${props.name.first} ${props.name.last}`;
  return (
    <div className="user-card-container">
      <Link to={{ pathname: "/profile", state: props }}>
        <div className="user-card">
          <img src={props.picture.large} />
          <div className="heading-details">
            <div className="name">{fullName}</div>
            <div className="city">{props.location.city}</div>
            <div className="country">{props.location.country}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default User;
