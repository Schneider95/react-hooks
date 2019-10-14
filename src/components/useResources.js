import { useState, useEffect } from 'react';
import axios from 'axios';

const useResources = (resource) => {
  const [resources, setResources] = useState([]);

  const fetchResource = async (resourceType) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${resourceType}`);

    setResources(response.data);
  };

  useEffect(() => {
    fetchResource(resource);
  }, [resource]);

  return resources;
};

export default useResources;
