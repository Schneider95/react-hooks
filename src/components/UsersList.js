import useResources from './useResources';
import UsersListJsx from '../templates/UsersList';

const UsersList = () => {
  const users = useResources('users');

  return UsersListJsx({ users });
};

export default UsersList;
