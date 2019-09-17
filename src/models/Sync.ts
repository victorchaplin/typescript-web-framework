import Axios from "axios"
import { HasId } from "./HasId"

export class Sync<T extends HasId> {
  rootUrl: string

  constructor(rootUrl: string) {
    this.rootUrl = rootUrl
  }

  fetch(id: number): Promise<T> {
    return Axios.get(`${this.rootUrl}/${id}`)
  }

  save(data: T): Promise<T> {
    const {id} = data

    if (id) {
      return Axios.put(`${this.rootUrl}/${id}`, data)
    } else {
      return Axios.post(this.rootUrl, data)
    }
  }
}
