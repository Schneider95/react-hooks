import PropTypes from 'prop-types';
import useResources from './useResources';
import ResourcesListJsx from '../templates/ResourcesList';

const ResourcesList = ({ resource }) => {
  const resources = useResources(resource);

  return ResourcesListJsx({ resources });
};

ResourcesList.defaultProps = {
  resource: '',
};

ResourcesList.propTypes = {
  resource: PropTypes.string,
};

export default ResourcesList;
