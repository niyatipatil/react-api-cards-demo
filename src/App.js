import React, { useState } from "react";
import UserList from "./UserList";
import "./App.css";

const App = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="App">
      <nav className="navbar">
        <p>Users</p>
      </nav>
      <div className="user-details">
        {selectedUser ? (
          <>
            <h1>User Details</h1>
            <p>Name: {selectedUser.name}</p>
            <p>Email: {selectedUser.email}</p>
            <p>Username: {selectedUser.username}</p>
            <p>City: {selectedUser.address.city}</p>
            <p>Company: {selectedUser.company.name}</p>
            <p>Website: {selectedUser.website}</p>
          </>
        ) : (
          <p>Please select a user.</p>
        )}
      </div>
      <UserList setSelectedUser={setSelectedUser} />
    </div>
  );
};

export default App;
