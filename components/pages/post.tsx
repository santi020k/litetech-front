'use client'

import { useEffect } from 'react'

import { PostHeader } from '@/components/molecules/post-header'
import { PostDetailContent } from '@/components/organisms/post-detail-content'
import { RelatedPosts } from '@/components/organisms/related-posts'

import { Post } from '@/types/post'

interface ClientPostProps {
  post: Post
}

export const ClientPost = ({ post }: ClientPostProps) => {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light')
  }, [])

  return (
    <article className="space-y-12">
      <header className="space-y-4">
        <PostHeader post={post} />
      </header>

      <article className="mx-auto flex max-w-[1440px] flex-col gap-9 p-8 pt-0">
        <PostDetailContent content={post.content} />
        <RelatedPosts excludeId={post.id} />
      </article>
    </article>
  )
}
