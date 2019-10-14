import React from 'react';

const UsersListJsx = (props) => {
  const { users } = props;

  return (
    <div>
      {typeof users !== 'undefined' &&
        <div>
          <span>
            {users.length}
            {' '}
            users
          </span>
          <ul>
            {users.map(user => <li key={user.id}>{user.name}</li>)}
          </ul>
        </div>
      }
    </div>
  );
};

export default UsersListJsx;
