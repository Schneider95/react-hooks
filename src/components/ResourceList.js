import PropTypes from 'prop-types';
import React from 'react';
import useResources from './useResources';

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);

  return (
    <div>
      <div>
        <span>
          {resources.length}
          {' '}
          elements
        </span>
      </div>
      <ul>
        {resources.map(record => <li key={record.id}>{record.title}</li>)}
      </ul>
    </div>
  );
};

ResourceList.defaultProps = {
  resource: '',
};

ResourceList.propTypes = {
  resource: PropTypes.string,
};

export default ResourceList;
