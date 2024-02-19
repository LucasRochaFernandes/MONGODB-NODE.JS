import { env } from '@/env'
import { MongoClient, Db } from 'mongodb'

export const mongoClient = {
  client: undefined as unknown as MongoClient,
  db: undefined as unknown as Db,

  async connect(): Promise<void> {
    const url = env.MONGODB_URL
    const username = env.MONGODB_USER
    const password = env.MONGODB_PASSWORD
    this.client = new MongoClient(url, { auth: { username, password } })
    this.db = this.client.db('users-db')
  },

  async disconnect(): Promise<void> {
    if (this.client) {
      await this.client.close()
    }
  },
}
