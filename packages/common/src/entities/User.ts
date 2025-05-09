import { z } from 'zod'

export const roleSchema = z.enum(['ADMIN', 'CAST', 'USER'])

export type Role = z.infer<typeof roleSchema>

export type User = {
  id: string
  email: string
  role: Role
  isBanned: boolean
  isDeleted: boolean
  createdAt: string
  updatedAt: string
}
