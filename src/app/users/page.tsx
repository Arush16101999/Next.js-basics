import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
  username: string;
}

const UsersList = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();
  //   console.log(users);
  return (
    <div className="usersdata">
      <h1>UsersPage</h1>
      <br />
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>Name : {user.name}</p>
            <p>Email : {user.email}</p>
            <p>Username : {user.username}</p>
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
