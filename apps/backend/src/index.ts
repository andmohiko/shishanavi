import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'

import type { CustomContext, CustomEnv } from '~/types/locals'
import { testRouter } from '~/routers/testRouter'
import { shopRouter } from '~/routers/shopRouter'

const port = 8080
const app = new Hono<CustomEnv>()

app.use(cors())

app.get('/', (c) => {
  return c.text('Hello Shishanavi!')
})

app.route('/test', testRouter)
app.route('/shops', shopRouter)

if (process.env.NODE_ENV === 'localhost') {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${port}`)
}

app.onError((e, c: CustomContext) => {
  return c.text(`Internal Server Error: ${e.message}`, 500)
})

serve({
  fetch: app.fetch,
  port,
})
