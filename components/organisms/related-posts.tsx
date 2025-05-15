'use client'

import { useEffect } from 'react'

import { PostCard } from '@/components/molecules/post-card'

import { NewPostModal } from './new-post-modal'

import { usePostStore } from '@/features/posts/store'

interface RelatedPostsProps {
  excludeId?: string
}

export const RelatedPosts = ({ excludeId }: RelatedPostsProps) => {
  const { posts, fetchPosts } = usePostStore()

  useEffect(() => {
    if (posts.length === 0) {
      fetchPosts(1)
    }
  }, [])

  const filtered = posts.filter(post => post.id !== excludeId).slice(0, 3)

  return (
    <div className="mt-12 space-y-4">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-xl font-bold">Related posts</h2>
        <NewPostModal />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {filtered.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}
