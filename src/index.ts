import { UserForm } from "./views/UserForm";
import { User } from "./models/User";

const rootElement = document.getElementById('root')
const user = new User({name: 'NAME', age: 20})

if (rootElement) {
  const userForm = new UserForm(rootElement, user)
  userForm.render()
} else {
  throw new Error('Root element not found')
}

