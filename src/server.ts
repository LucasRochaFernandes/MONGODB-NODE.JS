import express from 'express'
import { env } from './env/index'
import { router } from './http/routes'

const app = express()
app.use(express.json())

app.use(router)
app.listen(env.PORT, () => {
  console.log('Running!')
})
