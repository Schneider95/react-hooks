import { useState } from 'react';
import AppJsx from '../templates/App';

const App = () => {
  const [resource, setResource] = useState('posts');

  return AppJsx({ resource, setResource });
};

export default App;
