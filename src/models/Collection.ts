import Axios from 'axios';
import { Eventing } from './Eventing';

export class Collection<T, K> {
  models: T[] = [];
  events: Eventing = new Eventing();

  constructor(public rootUrl: string, public deserialize: (json: K) => T) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  async fetch(): Promise<void> {
    const response = await Axios.get(this.rootUrl);
    response.data.forEach((data: K) => {
      this.models.push(this.deserialize(data));
    });

    this.trigger('change');
  }
}
