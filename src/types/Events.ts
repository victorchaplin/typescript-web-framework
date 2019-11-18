type Callback = () => void;

export interface Events {
  on(eventName: string, callback: Callback): void;
  trigger(eventName: string): void;
}
