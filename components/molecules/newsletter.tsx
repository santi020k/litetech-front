'use client'

import { Button } from '@/components/atoms/button'

export const Newsletter = () => (
  <section className="bg-[#9C73F7] p-10 text-white">
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
      <p className="text-left text-3xl font-normal md:text-2xl">
        Sign up for our newsletter
        {' '}
        <span className="font-semibold">and get daily updates</span>
      </p>

      <Button className="w-full rounded-none bg-[#D8F34E] px-4 py-8 text-lg font-bold text-black transition hover:cursor-pointer md:w-auto">
        Subscribe
      </Button>
    </div>
  </section>
)
