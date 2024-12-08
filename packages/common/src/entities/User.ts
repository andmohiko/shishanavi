import { z } from 'zod'

export const roleSchema = z.enum(['admin', 'cast', 'user'])

export type Role = z.infer<typeof roleSchema>

export type User = {
  id: string
  email: string
  role: Role
  isBanned: boolean
  isDeleted: boolean
  createdAt: Date
  updatedAt: Date
}
