import { Eventing } from "./Eventing"
import { Sync } from "./Sync"
import { Attributes } from "./Attributes"
import { UserData } from "./UserData"

const rootUrl = 'http://localhost:3000/users'

export class User {
  events = new Eventing()
  sync = new Sync<UserData>(rootUrl)
  attributes: Attributes<UserData>

  constructor(attributes: UserData) {
    this.attributes = new Attributes<UserData>(attributes)
  }
}
