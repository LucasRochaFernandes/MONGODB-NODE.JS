import express from 'express'
import { env } from './env/index'
import { router } from './http/routes'
import { mongoClient } from './database/mongo'

const app = express()
app.use(express.json())

app.use(router)
;(async () => {
  try {
    await mongoClient.connect()
  } catch (error) {
    console.log(error)
  }
  const httpServer = app.listen(env.PORT, () => {
    console.log('Running!')
  })
  httpServer.on('close', async () => {
    await mongoClient.disconnect()
  })
})()
