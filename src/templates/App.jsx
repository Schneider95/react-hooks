import React from 'react';
import ResourcesList from '../components/ResourcesList';
import UsersList from '../components/UsersList';

const AppJsx = (props) => {
  const { resource, setResource } = props;

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
      <ResourcesList resource={resource} />
    </div>
  );
};

export default AppJsx;
