import 'express-async-errors'
import express, { NextFunction, Request, Response } from 'express'
import { env } from './env/index'
import { router } from './http/routes'
import { mongoClient } from './database/mongo'
import { ZodError } from 'zod'

const app = express()

// Middleware para parsear o corpo das requisições como JSON
app.use(express.json())

// Rotas da aplicação
app.use(router)

// Conexão com o MongoDB
;(async () => {
  try {
    await mongoClient.connect()
    console.log('Connected to MongoDB!')
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error)
    process.exit(1) // Encerra o processo se a conexão falhar
  }
})()

// Middleware de tratamento de erros
app.use(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (error: Error, request: Request, response: Response, _next: NextFunction) => {
    if (error instanceof ZodError) {
      return response
        .status(400)
        .json({ message: 'Validation error', issues: error.format() })
    } else {
      return response.status(500).json({ message: 'Internal Server Error' })
    }
  },
)

// Inicialização do servidor
app.listen(env.PORT, () => {
  console.log(`Server running on port ${env.PORT}!`)
})
