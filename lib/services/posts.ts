import { Post } from '@/types/post'

export const getPaginatedPosts = async (page = 1): Promise<{
  data: Post[]
  total: number
}> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/posts?page=${page}`, {
    cache: 'no-store',
    next: { tags: ['posts'] }
  })

  if (!res.ok) throw new Error('Failed to fetch posts')

  return res.json()
}
