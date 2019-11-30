import { CollectionView } from './CollectionView';
import { User } from '../models/User';
import { UserData } from '../types/UserData';
import { UserShow } from './UserShow';

export class UserList extends CollectionView<User, UserData> {
  renderItem(model: User, itemParent: Element): void {
    const userShow = new UserShow(itemParent, model);
    userShow.render();
  }
}
