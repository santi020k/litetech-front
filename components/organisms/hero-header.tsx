import { useEffect } from 'react'

import { PostCard, PostCardVariant } from '@/components/molecules/post-card'

import { usePostStore } from '@/features/posts/store'

export const HeroHeader = () => {
  const { posts, fetchPosts } = usePostStore()
  const firstPost = posts[0]

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div className="flex flex-col gap-6">
      <h3 className="hidden text-lg font-bold text-white md:block">Today story</h3>
      {!!firstPost && (
        <PostCard key={firstPost.id} post={firstPost} variant={PostCardVariant.DARK} className="md:max-h-[348px]" />
      )}
    </div>
  )
}
