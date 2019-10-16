import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';
import { UserData } from './UserData';

const rootUrl = 'http://localhost:3000/users';

export class User {
  events = new Eventing();
  sync = new Sync<UserData>(rootUrl);
  attributes: Attributes<UserData>;

  constructor(attributes: UserData) {
    this.attributes = new Attributes<UserData>(attributes);
  }

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attributes.get;
  }

  set(update: UserData): void {
    this.attributes.set(update);
    this.events.trigger('change');
  }

  async fetch(): Promise<void> {
    const id = this.attributes.get('id');

    if (typeof id !== 'number') {
      throw new Error('Cannot fetch without an id');
    }

    const user = await this.sync.fetch(id);
    this.set(user);
  }

  async save(): Promise<void> {
    try {
      await this.sync.save(this.attributes.getAll());
      this.trigger('save');
    } catch {
      this.trigger('error');
    }
  }
}
