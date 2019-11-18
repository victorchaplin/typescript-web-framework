export interface Sync<T> {
  fetch(id: number): Promise<T>;
  save(data: T): Promise<T>;
}
