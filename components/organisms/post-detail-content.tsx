import ReactMarkdown from 'react-markdown'

import Image from 'next/image'
import Link from 'next/link'

import { MostViewedPosts } from '@/components/atoms/most-viewed-posts'

import remarkGfm from 'remark-gfm'

interface PostDetailContentProps {
  content: string
}

export const PostDetailContent = ({ content }: PostDetailContentProps) => (
  <article className="prose lg:prose-lg flex max-w-none gap-8">
    <div className="flex min-w-[304px] flex-col gap-6">
      <h2 className="text-2xl font-bold">Shared on</h2>
      <div className="flex items-center gap-6 text-lg text-white">
        <Link href="#" aria-label="LinkedIn">
          <Image
            src="/icons/linkedin-black.svg"
            alt="LinkedIn"
            width={24}
            height={24}
          />
        </Link>
        <Link href="#" aria-label="Facebook">
          <Image
            src="/icons/facebook-black.svg"
            alt="Facebook"
            width={24}
            height={24}
          />
        </Link>
        <Link href="#" aria-label="X">
          <Image
            src="/icons/x-black.svg"
            alt="X"
            width={24}
            height={24}
          />
        </Link>
      </div>
    </div>
    <div>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </div>
    <MostViewedPosts />
  </article>
)
