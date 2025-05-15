'use client'

import { useEffect } from 'react'

import { MostViewedPosts, Variant } from '@/components/atoms/most-viewed-posts'
import { HeroHeader } from '@/components/organisms/hero-header'
import { PostList } from '@/components/organisms/post-list'
import { TopicFilter } from '@/components/organisms/topic-filter'

import { usePostStore } from '@/features/posts/store'
import { Post } from '@/types/post'

interface ClientHomeProps {
  initialPosts: Post[]
  total: number
  initialPage: number
}

export const ClientHome = ({ initialPosts, total, initialPage }: ClientHomeProps) => {
  const initializePosts = usePostStore(state => state.initializePosts)

  useEffect(() => {
    initializePosts(initialPosts, total, initialPage)
  }, [initialPosts, total, initialPage, initializePosts])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark')
  }, [])

  return (
    <section className="mx-auto mt-[69] flex max-w-[1440px] flex-col gap-9 p-8 pt-0 md:mt-[114]">
      <HeroHeader />
      <TopicFilter />
      <div className="flex w-full gap-8">
        <PostList />
        <MostViewedPosts variant={Variant.DARK} />
      </div>
    </section>
  )
}
