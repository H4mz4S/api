import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserList.css'; 

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setListOfUsers(response.data); 
      })
      .catch((error) => {
        console.error('Error fetching the users:', error);
      });
  }, []); 

  return (
    <div className="user-list-container">
      <h1>User List</h1>
      <ul>
        {listOfUsers.map((user) => (
          <li key={user.id} className="user-item">
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
