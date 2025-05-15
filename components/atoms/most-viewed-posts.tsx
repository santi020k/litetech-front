'use client'

import Image from 'next/image'
import Link from 'next/link'

import { usePostStore } from '@/features/posts/store'

export enum Variant {
  DEFAULT = 'default',
  DARK = 'dark'
}

interface MostViewedPostsProps {
  variant?: Variant
}

export const MostViewedPosts = ({ variant }: MostViewedPostsProps) => {
  const posts = usePostStore(state => state.posts)
  const postFiltered = posts.slice(0, 4)

  return (
    <aside className="hidden space-y-6 md:w-[304px] xl:block xl:shrink-0">
      <h3 className={`text-lg font-bold${variant === Variant.DARK ? 'text-black' : 'text-white'}`}>Most viewed</h3>

      <ul className="space-y-6">
        {postFiltered.map(post => (
          <li
            key={post.id}
            className="mb-3 flex items-start justify-between gap-3 border-b border-[#595959] pb-3 last:border-b-0"
          >
            <Link
              href={`/posts/${post.id}`}
              className="flex flex-1 items-start justify-between gap-3 transition hover:opacity-80"
            >
              <p className="text-sm leading-snug text-[#8C8C8C]">
                {post.title}
              </p>
              <div className="relative h-[56px] min-w-[56px] shrink-0">
                <Image
                  key={post.imageUrl}
                  src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${post.imageUrl}`}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}
