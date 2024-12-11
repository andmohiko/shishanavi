import { Hono } from 'hono'

import { createShopOperation } from '~/features/shop/operations/createShopOperation'
import type { CustomContext } from '~/types/locals'

export const testRouter = new Hono()

testRouter.post('/data', async (c: CustomContext) => {
  try {
    await createShopOperation()
  } catch (error) {
    return c.json({ error }, 500)
  }
})
