'use client'

import { ComponentProps } from 'react'

import { Button as ShadButton } from '@/components/ui/button'

import { cn } from '@/lib/utils'

export type ButtonProps = ComponentProps<typeof ShadButton>

export const Button = ({ className, ...props }: ButtonProps) => (
  <ShadButton
    className={cn(
      'text-base font-medium px-6 py-3', className
    )}
    {...props}
  />
)
