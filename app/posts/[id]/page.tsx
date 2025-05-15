import { ClientPost } from '@/components/pages/post'

import { getPost } from '@/lib/services/post'

export default async function PostDetailPage({ params }: { params: { id: string } }) {
  const { id } = await params
  const post = await getPost(id)

  return (
    <ClientPost post={post} />
  )
}
