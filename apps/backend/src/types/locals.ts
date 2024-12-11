import type { Context, Env } from 'hono'
import type { User } from '@shishanavi/common'

export type CustomEnv = Env & {
  Variables: {
    email?: string
    user?: User
  }
}

export type CustomContext = Context<CustomEnv>
