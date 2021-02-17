import { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "./UserDetail.css";

const UserDetail = () => {
  const [inProp, setInProp] = useState(false);
  const { state: user } = useLocation();
  const history = useHistory();
  const name = `${user.name.first} ${user.name.last}`;
  const street = `${user.location.street.number} ${user.location.street.name}`;
  const city = `${user.location.city} ${user.location.state}, ${user.location.country}`;

  useEffect(() => {
    setInProp(true);
  }, []);

  return (
    <CSSTransition classNames="user-detail" in={inProp} timeout={1000}>
      <div className="user-detail">
        <div className="heading">
          <img src={user.picture.large} />
          <div className="heading-details">
            <div className="name">{name}</div>
            <div className="username">
              <div className="username-title">Username</div>
              {user.login.username}
            </div>
            <hr />
            <div className="email">
              <div className="email-title">Email</div>
              <a href={`mailto:${user.email}`}>{user.email}</a>
            </div>
            <hr />
            <div className="phone">
              <div className="phone-title">Phone</div>
              {user.phone}
            </div>
            <hr />
            <div className="address">
              <div className="address-title">Address</div>
              {street}
              <br />
              {city}
            </div>
            <hr />
            <div className="btn-container">
              <button onClick={() => history.goBack()}>Go Back</button>
            </div>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default UserDetail;
