import { Hono } from 'hono'
import { createShopReqSchema } from '@shishanavi/common'

import { createShopOperation } from '~/features/shop/operations/createShopOperation'
import { findShopByIdOperation } from '~/features/shop/operations/findShopByIdOperation'
import { findShopsOperation } from '~/features/shop/operations/findShopsOperation'
import type { CustomContext } from '~/types/locals'

export const shopRouter = new Hono()

/**
 * shopsを全権取得する
 * @returns shop[]
 */
shopRouter.get('/', async (c: CustomContext) => {
  const shops = await findShopsOperation()
  return c.json({ shops })
})

/**
 * shopsを1件取得する
 * @returns shop
 */
shopRouter.get('/:id', async (c: CustomContext) => {
  const { id } = c.req.param()
  const shop = await findShopByIdOperation({ id })
  return c.json({ shop })
})

/**
 * 店舗を作成する
 * @returns shop
 */
shopRouter.post('/', async (c: CustomContext) => {
  const body: unknown = await c.req.json()
  const parsedResult = createShopReqSchema.safeParse(body)
  if (!parsedResult.success) {
    return c.json({ error: parsedResult.error }, 400)
  }
  const validatedBody = parsedResult.data
  const shop = await createShopOperation(validatedBody)
  return c.json({ shop })
})
