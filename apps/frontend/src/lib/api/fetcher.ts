import type { ApiResponse } from '~/app/api/lib/type'

// GET 用 fetcher
export async function getFetcher<T>(
  endpoint: string,
  params?: Record<string, string | number | boolean>,
  revalidate: number = 3600,
): Promise<T> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

  const query = params
    ? `?${new URLSearchParams(params as Record<string, string>).toString()}`
    : ''

  const response = await fetch(`${baseUrl}${endpoint}${query}`, {
    next: { revalidate },
  })

  const data: ApiResponse<T> = (await response.json()) as ApiResponse<T>

  if (!response.ok || !data.success || data.error) {
    throw new Error(
      data.error || `API request failed with status ${response.status}`,
    )
  }

  return data.data as T
}

// POST 用 fetcher
export async function postFetcher<T, B = unknown>(
  endpoint: string,
  body?: B,
): Promise<T> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

  const response = await fetch(`${baseUrl}${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  const data: ApiResponse<T> = (await response.json()) as ApiResponse<T>

  if (!response.ok || !data.success || data.error) {
    throw new Error(
      data.error || `API request failed with status ${response.status}`,
    )
  }

  return data.data as T
}
