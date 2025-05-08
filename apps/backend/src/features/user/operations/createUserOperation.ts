import { type User, roleSchema } from '@shishanavi/common'
import { z } from 'zod'

import { prismaClient } from '~/lib/prisma'

/**
 * ユーザー作成時のパラメータスキーマ
 * @property {string} email - ユーザーのメールアドレス
 * @property {Role} role - ユーザーの権限
 */
export const createUserParamsSchema = z.object({
  email: z.string().email(),
  role: roleSchema,
})

export type CreateUserParamsType = z.infer<typeof createUserParamsSchema>

/**
 * ユーザーを作成する
 */
export const createUserOperation = async (
  params: CreateUserParamsType,
): Promise<User> => {
  const prismaUser = await prismaClient.user.create({
    data: {
      email: params.email,
      role: params.role,
    },
  })
  const user: User = {
    ...prismaUser,
    createdAt: prismaUser.createdAt.toISOString(),
    updatedAt: prismaUser.updatedAt.toISOString(),
  }
  return user
}
