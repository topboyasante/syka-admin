import BranchesTabComponent from './branches/tab';
import UsersTabComponent from './users/tab';

export const UserManagementTabs = [
  {
    id: 0,
    title: 'Manage All Users',
    content: <UsersTabComponent />,
  },
  {
    id: 1,
    title: 'Branches',
    content: <BranchesTabComponent />,
  },
];
