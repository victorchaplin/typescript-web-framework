import { View } from "./View";
import { User } from "../models/User";
import { UserData } from "../types/UserData";

export class UserEdit extends View<User, UserData> {
  template(): string {
    return `
      <div>
        <div class="user-show"></div>
        <div class="user-form"></div>
      </div>
    `
  }
}
