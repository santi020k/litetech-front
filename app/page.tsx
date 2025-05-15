import { ClientHome } from '@/components/pages/home'

import { getPaginatedPosts } from '@/lib/services/posts'

export default async function HomePage() {
  const initialPage = 1
  const { data: initialPosts, total } = await getPaginatedPosts(initialPage)

  return (
    <ClientHome initialPosts={initialPosts} total={total} initialPage={initialPage} />
  )
}
