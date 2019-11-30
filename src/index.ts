import { Collection } from './models/Collection';
import { UserData } from './types/UserData';
import { User } from './models/User';
import { UserList } from './views/UserList';

const users = new Collection('http://localhost:3000/users', (json: UserData) => {
  return new User(json);
});

users.on('change', () => {
  const root = document.getElementById('root');

  if (root) {
    const userList = new UserList(root, users);
    userList.render();
  }
});

users.fetch();
