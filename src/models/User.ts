import { UserData } from '../types/UserData';
import { Model } from './Model';
import { Attributes } from './Attributes';
import { Eventing } from './Eventing';
import { ApiSync } from './ApiSync';
import { Collection } from './Collection';

const rootUrl = 'http://localhost:3000/users';

export class User extends Model<UserData> {
  static buildUserCollection(): Collection<User, UserData> {
    return new Collection<User, UserData>(rootUrl, (json: UserData) => new User(json));
  }

  constructor(data: UserData) {
    super(new Attributes<UserData>(data), new ApiSync<UserData>(rootUrl), new Eventing());
  }

  setRandomAge(): void {
    const age = Math.round(Math.random() * 100);
    this.set({ age });
  }
}
