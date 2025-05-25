import type { NextApiRequest, NextApiResponse } from 'next'

import type { ApiResponse } from './type'

export function handleApi<T>(
  handler: (
    req: NextApiRequest,
    res: NextApiResponse<ApiResponse<T>>,
  ) => Promise<T>,
) {
  return async (req: NextApiRequest, res: NextApiResponse<ApiResponse<T>>) => {
    try {
      const data = await handler(req, res)
      res.status(200).json({ success: true, data })
    } catch (error: unknown) {
      console.error('API error:', error)

      let message = 'Internal Server Error'
      if (error instanceof Error) {
        message = error.message
      }

      res.status(500).json({
        success: false,
        error: message,
      })
    }
  }
}
