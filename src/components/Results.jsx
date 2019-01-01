import React from "react";
import User from "./User";
import "./Results.css";
const Results = props => {
  const sort = column => {
    props.sortBy(column);
  };

  if (props.users && !props.users.length) return <div />;
  const usersList = props.users.map(user => {
    return <User user={user} key={user.id} />;
  });
  return (
    <table className="ui celled table" style={{ textAlign: "center" }}>
      <thead>
        <tr>
          <th>avatar</th>
          <th
            className="click-col"
            onClick={() => {
              sort("id");
            }}
          >
            id
          </th>
          <th
            className="click-col"
            onClick={() => {
              sort("login");
            }}
          >
            login
          </th>
        </tr>
      </thead>
      <tbody>{usersList}</tbody>
    </table>
  );
};

export default Results;
