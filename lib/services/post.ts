import { Post } from '@/types/post'

export const getPost = async (id: string): Promise<Post> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/posts/${id}`, {
    cache: 'no-store'
  })

  if (!res.ok) throw new Error('Failed to fetch post')

  return res.json()
}
