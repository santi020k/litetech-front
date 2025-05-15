import { type ReactNode } from 'react'

import type { Metadata } from 'next'
import { Space_Grotesk as SpaceGrotesk } from 'next/font/google'

import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'

import '@/styles/globals.css'

const spaceGrotesk = SpaceGrotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LiteTech Blog',
  description: 'A tech blog built with Next.js'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
      <body className={`${spaceGrotesk.className} bg-white text-black antialiased dark:bg-black dark:text-white`}>
        <Header />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
