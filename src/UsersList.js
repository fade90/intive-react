import { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { CSSTransition } from "react-transition-group";
import User from "./User";
import "./UserList.css";

const UsersList = () => {
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);
  const [inProp, setInProp] = useState(false);

  const fetchPage = (page) => {
    return fetch(`https://randomuser.me/api/?page=${page}&results=50&seed=fede`)
      .then((response) => response.json())
      .then((result) => {
        setUsers([...users, ...result.results]);
        setInProp(true);
      })
      .catch((error) => {
        setError(error);
      });
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <CSSTransition classNames="container" in={inProp} timeout={1000}>
      <div className="container">
        <InfiniteScroll
          pageStart={0}
          loadMore={fetchPage}
          loader={<span key="loader" className="hidden" />}
          hasMore
        >
          {users.map((user) => (
            <User
              key={user.login.uuid}
              name={user.name}
              location={user.location}
              picture={user.picture}
              phone={user.phone}
              email={user.email}
              login={user.login}
            />
          ))}
        </InfiniteScroll>
      </div>
    </CSSTransition>
  );
};

export default UsersList;
