import { Hono } from 'hono'

import { createUserOperation } from '~/features/user/operations/createUserOperation'
import type { CustomContext } from '~/types/locals'

export const testRouter = new Hono()

testRouter.post('/init', async (c: CustomContext) => {
  try {
    const user = await createUserOperation({
      email: 'test@example.com',
      role: 'ADMIN',
    })
    return c.json({ user })
  } catch (error) {
    return c.json({ error }, 500)
  }
})
