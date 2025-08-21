import React from "react";
import { fakeUsers } from "../utils/fakerdata.js";

const UsersList = () => {

    console.log(fakeUsers);
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {fakeUsers.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
            <br />
            Start: {new Date(user.startDate).toDateString()} | End:
            {new Date(user.endDate).toDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
