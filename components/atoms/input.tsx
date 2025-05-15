'use client'

import { ComponentProps } from 'react'

import { Input as ShadInput } from '@/components/ui/input'

import { cn } from '@/lib/utils'

export type InputProps = ComponentProps<typeof ShadInput>

export const Input = ({ className, ...props }: InputProps) => (
  <ShadInput
    className={cn(
      'px-4 py-2 text-base border border-black focus-visible:ring-offset-2', className
    )}
    {...props}
  />
)
