import { Hono } from 'hono'

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
