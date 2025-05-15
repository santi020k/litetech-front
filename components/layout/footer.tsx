'use client'

import Image from 'next/image'
import Link from 'next/link'

export const Footer = () => (
  <footer className="p-6">
    <div className="w-full bg-[#9C73F7] py-8 text-white md:flex md:flex-col md:gap-10 md:px-[120px] md:py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-[56px] px-4 text-center md:m-0 md:flex-row md:items-end md:px-0 md:text-left">
        <div className="space-y-2">
          <div className="flex items-center justify-center gap-2 text-xl font-bold md:justify-start">
            <Image src="/logo.svg" alt="LiteTech" width={178.27} height={28} style={{ height: 'auto' }} />
          </div>
        </div>

        <div className="flex items-center gap-6 text-lg text-white">
          <Link href="#" aria-label="LinkedIn">
            <Image
              src="/icons/linkedin.svg"
              alt="LinkedIn"
              width={24}
              height={24}
            />
          </Link>
          <Link href="#" aria-label="Facebook">
            <Image
              src="/icons/facebook.svg"
              alt="Facebook"
              width={24}
              height={24}
            />
          </Link>
          <Link href="#" aria-label="X">
            <Image
              src="/icons/x.svg"
              alt="X"
              width={24}
              height={24}
            />
          </Link>
        </div>

        <p className="px-[65px] text-sm text-white md:hidden">© Copyright Lite-Tech. All Rights Reserved</p>
      </div>

      <p className="hidden text-sm text-white md:block">© Copyright Lite-Tech. All Rights Reserved</p>
    </div>
  </footer>
)
