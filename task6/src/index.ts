import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { PrismaClient } from '../generated/prisma/index.js'
import { mainRouter } from './router/index.ts'

const app = new Hono()
export const prisma = new PrismaClient();

app.route("", mainRouter)

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
