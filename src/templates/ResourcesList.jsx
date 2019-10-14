import React from 'react';

const ResourcesListJsx = (props) => {
  const { resources } = props;
  
  return (
    <div>
      {typeof resources !== 'undefined' &&
        <div>
          <span>
            {resources.length}
            {' '}
            resources
          </span>
          <ul>
            {resources.map(record => <li key={record.id}>{record.title}</li>)}
          </ul>
        </div>
      }
    </div>
  );
};

export default ResourcesListJsx;
