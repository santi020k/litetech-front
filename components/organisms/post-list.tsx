'use client'

import { useEffect } from 'react'

import { Button } from '@/components/atoms/button'
import { Newsletter } from '@/components/molecules/newsletter'
import { PostGridRow } from '@/components/organisms/post-grid-row'

import { usePostStore } from '@/features/posts/store'

export const PostList = () => {
  const {
    posts,
    fetchPosts,
    page,
    total,
    loading: isLoadingPosts
  } = usePostStore()

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  const handleLoadMorePosts = () => {
    fetchPosts(page + 1)
  }

  const shouldShowLoadMoreButton = posts.length < total
  const postGroups: typeof posts[] = []

  for (let index = 0; index < posts.length; index += 3) {
    postGroups.push(posts.slice(index, index + 3))
  }

  return (
    <div className="w-full space-y-12">
      {postGroups.map((group, index) => (
        <div key={group[0].id}>
          <PostGridRow posts={group} reversed={index % 2 === 1} />
          {index === 0 && (
            <div className="mt-12">
              <Newsletter />
            </div>
          )}
        </div>
      ))}

      {!!shouldShowLoadMoreButton &&
        (
          <div className="text-center">
            <Button
              onClick={handleLoadMorePosts}
              disabled={isLoadingPosts}
              className="w-full rounded-none bg-[#D8F34E] px-8 py-6 text-lg font-bold text-black transition hover:cursor-pointer md:w-auto"
            >
              {isLoadingPosts ? 'Loading...' : 'Load more'}
            </Button>
          </div>
        )}
    </div>
  )
}
