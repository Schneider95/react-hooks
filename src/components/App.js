import React, { useState } from 'react';
import ResourceList from './ResourceList';
import UsersList from './UsersList';

const App = () => {
  const [resource, setResource] = useState('posts');

  return (
    <div>
      <UsersList />
      <div>
        <button onClick={() => setResource('posts')} type="button">
          Posts
        </button>
        <button onClick={() => setResource('todos')} type="button">
          Todos
        </button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
};

export default App;
