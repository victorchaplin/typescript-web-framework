type Callback = () => void

export class User {
  private userData: UserData
  events: {[key: string]: Callback[]} = {}

  constructor(userData: UserData) {
    this.userData = userData
  }

  get(propName: string): string | number {
    return this.userData[propName]
  }

  set(update: UserData): void {
    Object.assign(this.userData, update)
  }

  on(eventName: string, callback: Callback): void {
    const handlers = this.events[eventName] || []
    handlers.push(callback)
    this.events[eventName] = handlers
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName]

    if (!handlers || handlers.length === 0) {
      return
    }

    handlers.forEach(callback => {
      callback()
    })
  }
}
