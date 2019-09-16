import { Eventing } from "./Eventing"

export class User {
  events = new Eventing()
  private userData: UserData

  constructor(userData: UserData) {
    this.userData = userData
  }

  get(propName: string): string | number {
    return this.userData[propName]
  }

  set(update: UserData): void {
    Object.assign(this.userData, update)
  }
}
