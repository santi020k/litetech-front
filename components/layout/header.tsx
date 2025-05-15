'use client'

import Image from 'next/image'
import Link from 'next/link'

import { NewPostModal, Variant } from '@/components/organisms/new-post-modal'

export const Header = () => (
  <header className="fixed top-0 z-50 w-full border-b border-black bg-black p-4 opacity-80 backdrop-blur-sm">
    <div className="mx-auto flex max-w-6xl items-center justify-between">
      <Link href="/" className="text-lg font-bold">
        <Image src="/logo.svg" alt="LiteTech" priority width={148} height={23} style={{ height: 'auto' }} />
      </Link>
      <NewPostModal variant={Variant.DEFAULT} />
    </div>
  </header>
)
