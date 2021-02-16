import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "./UserDetail.css";

const UserDetail = () => {
  const [inProp, setInProp] = useState(false);
  const { state: user } = useLocation();
  const Name = `${user.name.first} ${user.name.last}`;
  const street = `${user.location.street.name}, ${user.location.street.number}`;

  useEffect(() => {
    setInProp(true);
  }, []);

  return (
    <CSSTransition classNames="user-detail" in={inProp} timeout={1000}>
      <div className="user-detail">
        <div className="heading">
          <img src={user.picture.large} />
          <div className="heading-details">
            <div className="name">{Name}</div>
            <div className="username">
              <div className="username-title">Username</div>
              {user.login.username}
            </div>
            <hr></hr>
            <div className="email">
              <div className="email-title">Email</div>
              <a href={`mailto:${user.email}`}>{user.email}</a>
            </div>
            <hr></hr>
            <div className="phone">
              <div className="phone-title">Phone</div>
              {user.phone}
            </div>
            <hr></hr>
            <div className="street">
              <div className="street-title">Street</div>
              {street}
            </div>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default UserDetail;
