import React, { useState, useEffect } from "react";

const UserList = ({ setSelectedUser }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="user-list">
      <nav className="sidebar">
        <p>User List</p>
      </nav>
      <div className="user-cards">
        {users.map((user) => (
          <div
            key={user.id}
            className="user-card"
            onClick={() => setSelectedUser(user)}
          >
            <p>
              {user.name} - {user.email}
            </p>
            <div className="user-card-btn">
              <button
                className="delete-button"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteUser(user.id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
