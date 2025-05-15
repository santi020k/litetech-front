import { type ReactNode } from 'react'

import { cn } from '@/lib/utils'

interface TagProps {
  children: ReactNode
  variant?: 'highlight' | 'default'
}

export const Tag = ({ children, variant = 'default' }: TagProps) => {
  const base = 'text-sm font-medium px-3 py-1 rounded-full'

  const styles =
    variant === 'highlight' ?
      'bg-[#D8F34E] text-black' :
      'bg-black text-white'

  return <span className={cn(base, styles)}>{children}</span>
}
