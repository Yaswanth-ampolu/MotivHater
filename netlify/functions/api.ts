import { Handler } from '@netlify/functions'
import express from 'express'
import serverless from 'serverless-http'
import { registerRoutes } from '../../server/routes'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Register your routes
registerRoutes(app).then(server => {
  // Server is created but we don't need to listen since serverless-http will handle that
  console.log('Routes registered successfully')
}).catch(error => {
  console.error('Failed to register routes:', error)
})

interface ServerlessResponse {
  statusCode?: number;
  headers?: { [key: string]: string | number | boolean };
  body?: string;
}

// Export the handler
export const handler: Handler = async (event, context) => {
  const handler = serverless(app)
  const result = await handler(event, context) as ServerlessResponse
  return {
    statusCode: result.statusCode || 200,
    headers: result.headers || {},
    body: result.body || ''
  }
}
