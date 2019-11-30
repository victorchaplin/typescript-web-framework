import { View } from './View';
import { User } from '../models/User';
import { UserData } from '../types/UserData';

export class UserShow extends View<User, UserData> {
  template(): string {
    return `
      <div>
        <h1>User Details</h1>
        <div>User Name: ${this.model.get('name')}</div>
        <div>User Age: ${this.model.get('age')}</div>
      </div>
    `;
  }
}
