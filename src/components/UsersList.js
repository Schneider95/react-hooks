import React from 'react';
import useResources from './useResources';

const UsersList = () => {
  const users = useResources('users');

  return (
    <div>
      <div>
        <span>
          {users.length}
          {' '}
          users
        </span>
      </div>
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  );
};

export default UsersList;
