'use client'

import { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { cn } from '@/lib/utils'

import { Post } from '@/types/post'

export const enum PostHeaderVariant {
  DEFAULT = 'default',
  DARK = 'dark'
}

interface PostHeaderProps {
  post: Post
  variant?: PostHeaderVariant
  className?: string
}

export const PostHeader = ({ post, variant = PostHeaderVariant.DEFAULT, className }: PostHeaderProps) => {
  const [imgSrc, setImgSrc] = useState(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}${post.imageUrl}`
  )

  const isDark = variant === PostHeaderVariant.DARK

  return (
    <div className={cn('group relative overflow-hidden', className)}>
      <div className="relative aspect-[4/3] max-h-[677] min-h-[500px] w-full">
        <Image
          key={post.imageUrl}
          src={imgSrc}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-300"
          onError={() => setImgSrc('/placeholder.png')}
        />
      </div>

      <div>
        <div className="absolute left-6 top-[60px] flex h-[403px] w-[calc(100%-48px)] max-w-[528px] flex-col justify-center sm:top-[20%]">
          <Link href="/" className="text-lg font-bold">
            <div className="mb-[25px] flex items-center gap-2">
              <Image src="/icons/arrow-back.svg" alt="arrow-back" width={24} height={24} className="inline-block" />
              <span className="font-semibold text-white">Back</span>
            </div>
          </Link>
          <div
            className={cn(
              'w-fit p-6 pb-0', isDark ? 'bg-black/90 text-white' : 'bg-white text-black'
            )}
          >
            {/* TODO: Avatar */}
            By Natsu Kim
          </div>
          <div
            className={cn(
              'flex flex-col gap-[10px] px-6 py-3', isDark ? 'bg-black/90 text-white' : 'bg-white text-black'
            )}
          >
            <h3 className="text-lg font-bold">{post.title}</h3>

            <div className="flex items-center justify-between text-sm">
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
      </div>
    </div>
  )
}
