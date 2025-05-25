import type { ApiResponse } from './type'

const BE_API_BASE = process.env.BACKEND_API_URL!

export async function getServerFetcher<T>(
  endpoint: string,
  params?: Record<string, string | number | boolean>,
): Promise<T> {
  const query = params
    ? `?${new URLSearchParams(
        Object.entries(params).reduce(
          (acc, [k, v]) => {
            acc[k] = String(v)
            return acc
          },
          {} as Record<string, string>,
        ),
      ).toString()}`
    : ''

  const res = await fetch(`${BE_API_BASE}${endpoint}${query}`)

  const data: ApiResponse<T> = (await res.json()) as ApiResponse<T>

  if (!res.ok || !data.success || data.error) {
    throw new Error(data.error || `Backend API error: ${res.status}`)
  }

  return data.data as T
}

export async function postServerFetcher<T, B = unknown>(
  endpoint: string,
  body?: B,
): Promise<T> {
  const res = await fetch(`${BE_API_BASE}${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  })

  const data: ApiResponse<T> = (await res.json()) as ApiResponse<T>

  if (!res.ok || !data.success || data.error) {
    throw new Error(data.error || `Backend API error: ${res.status}`)
  }

  return data.data as T
}
