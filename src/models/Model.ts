import { Events } from '../types/Events';
import { HasId } from '../types/HasId';
import { ModelAttributes } from '../types/ModelAttributes';
import { Sync } from '../types/Sync';

export class Model<T extends HasId> {
  constructor(
    private attributes: ModelAttributes<T>,
    private sync: Sync<T>,
    private events: Events
  ) {}

  on = this.events.on;
  trigger = this.events.trigger;
  get = this.attributes.get;

  set(update: T): void {
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
