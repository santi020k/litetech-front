'use client'

import { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { Tag } from '@/components/atoms/tag'

import { cn } from '@/lib/utils'

import { Post } from '@/types/post'

export const enum PostCardVariant {
  DEFAULT = 'default',
  DARK = 'dark'
}

interface PostCardProps {
  post: Post
  variant?: PostCardVariant
  className?: string
}

export const PostCard = ({ post, variant = PostCardVariant.DEFAULT, className }: PostCardProps) => {
  const [imgSrc, setImgSrc] = useState(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}${post.imageUrl}`
  )

  const isDark = variant === PostCardVariant.DARK

  return (
    <div className={cn('group relative overflow-hidden', className)}>
      <Link href={`/posts/${post.id}`}>
        <div className="relative aspect-[3/4] w-full">
          <Image
            key={post.imageUrl}
            src={imgSrc}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            onError={() => setImgSrc('/placeholder.png')}
          />
        </div>

        <div className="absolute bottom-6 left-6 w-[calc(100%-48px)]">
          <div
            className={cn(
              'w-fit p-6 pb-0', isDark ? 'bg-black/90 text-white' : 'bg-white text-black'
            )}
          >
            <Tag variant="highlight">Diversity & Inclusion</Tag>
          </div>
          <div
            className={cn(
              'flex flex-col gap-[10px] px-6 py-3', isDark ? 'bg-black/90 text-white' : 'bg-white text-black'
            )}
          >
            <h3 className="text-lg font-bold">{post.title}</h3>

            <div className="flex items-center justify-between text-sm">
              <div className="text-base font-semibold">
                Read
                <Image
                  src="/icons/arrow-purple.svg"
                  alt="read-arrow"
                  width={24}
                  height={24}
                  className="inline-block"
                />
              </div>
              <span
                className={cn(
                  'flex items-center gap-1', isDark ? 'text-[#595959]' : 'text-black/60'
                )}
              >
                <Image
                  src="/icons/read.svg"
                  alt="read-time"
                  width={16}
                  height={16}
                  className="inline-block"
                />
                6 mins
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
