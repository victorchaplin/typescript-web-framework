import Axios from "axios"
import { HasId } from "./HasId"

export class Sync<T extends HasId> {
  rootUrl: string

  constructor(rootUrl: string) {
    this.rootUrl = rootUrl
  }

  async fetch(id: number): Promise<T> {
    const {data} = await Axios.get(`${this.rootUrl}/${id}`)

    return data
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
