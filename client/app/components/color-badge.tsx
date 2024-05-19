'use client'

import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '~/lib/utils'

const colors = {
  red: 'bg-red-500/20 text-red-700 group-data-[hover]:bg-red-500/25 dark:bg-red-500/10 dark:text-red-400 dark:group-data-[hover]:bg-red-500/20',
  orange:
    'bg-orange-500/20 text-orange-700 group-data-[hover]:bg-orange-500/25 dark:bg-orange-500/10 dark:text-orange-400 dark:group-data-[hover]:bg-orange-500/20',
  amber:
    'bg-amber-400/20 text-amber-700 group-data-[hover]:bg-amber-400/30 dark:bg-amber-400/10 dark:text-amber-400 dark:group-data-[hover]:bg-amber-400/20',
  yellow:
    'bg-yellow-400/20 text-yellow-700 group-data-[hover]:bg-yellow-400/30 dark:bg-yellow-400/10 dark:text-yellow-300 dark:group-data-[hover]:bg-yellow-400/20',
  lime: 'bg-lime-400/20 text-lime-700 group-data-[hover]:bg-lime-400/30 dark:bg-lime-400/10 dark:text-lime-300 dark:group-data-[hover]:bg-lime-400/20',
  green:
    'bg-green-500/20 text-green-700 group-data-[hover]:bg-green-500/25 dark:bg-green-500/10 dark:text-green-400 dark:group-data-[hover]:bg-green-500/20',
  emerald:
    'bg-emerald-500/20 text-emerald-700 group-data-[hover]:bg-emerald-500/25 dark:bg-emerald-500/10 dark:text-emerald-400 dark:group-data-[hover]:bg-emerald-500/20',
  teal: 'bg-teal-500/20 text-teal-700 group-data-[hover]:bg-teal-500/25 dark:bg-teal-500/10 dark:text-teal-300 dark:group-data-[hover]:bg-teal-500/20',
  cyan: 'bg-cyan-400/20 text-cyan-700 group-data-[hover]:bg-cyan-400/30 dark:bg-cyan-400/10 dark:text-cyan-300 dark:group-data-[hover]:bg-cyan-400/20',
  sky: 'bg-sky-500/20 text-sky-700 group-data-[hover]:bg-sky-500/25 dark:bg-sky-500/10 dark:text-sky-300 dark:group-data-[hover]:bg-sky-500/20',
  blue: 'bg-blue-500/20 text-blue-700 group-data-[hover]:bg-blue-500/25 dark:text-blue-400 dark:group-data-[hover]:bg-blue-500/25',
  indigo:
    'bg-indigo-500/20 text-indigo-700 group-data-[hover]:bg-indigo-500/25 dark:text-indigo-400 dark:group-data-[hover]:bg-indigo-500/20',
  violet:
    'bg-violet-500/20 text-violet-700 group-data-[hover]:bg-violet-500/25 dark:text-violet-400 dark:group-data-[hover]:bg-violet-500/20',
  purple:
    'bg-purple-500/20 text-purple-700 group-data-[hover]:bg-purple-500/25 dark:text-purple-400 dark:group-data-[hover]:bg-purple-500/20',
  fuchsia:
    'bg-fuchsia-400/20 text-fuchsia-700 group-data-[hover]:bg-fuchsia-400/25 dark:bg-fuchsia-400/10 dark:text-fuchsia-400 dark:group-data-[hover]:bg-fuchsia-400/20',
  pink: 'bg-pink-400/20 text-pink-700 group-data-[hover]:bg-pink-400/25 dark:bg-pink-400/10 dark:text-pink-400 dark:group-data-[hover]:bg-pink-400/20',
  rose: 'bg-rose-400/20 text-rose-700 group-data-[hover]:bg-rose-400/25 dark:bg-rose-400/10 dark:text-rose-400 dark:group-data-[hover]:bg-rose-400/20',
  zinc: 'bg-zinc-600/10 text-zinc-700 group-data-[hover]:bg-zinc-600/20 dark:bg-white/5 dark:text-zinc-400 dark:group-data-[hover]:bg-white/10',
}

type BadgeProps = { color?: keyof typeof colors }

export function ColorBadge({
  color = 'zinc',
  className,
  ...props
}: BadgeProps & ComponentPropsWithoutRef<'span'>) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-x-1.5 rounded-md px-2.5 py-1 text-xs/5 font-medium forced-colors:outline',
        colors[color],
        className,
      )}
      {...props}
    >
      <span className="relative flex h-1.5 w-1.5 mr-0.5">
        <span
          className={cn(
            'animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-[--ping-color]',
            {
              'bg-red-400': color === 'red',
              'bg-orange-400': color === 'orange',
              'bg-amber-400': color === 'amber',
              'bg-yellow-400': color === 'yellow',
              'bg-lime-400': color === 'lime',
              'bg-green-400': color === 'green',
              'bg-emerald-400': color === 'emerald',
              'bg-teal-400': color === 'teal',
              'bg-cyan-400': color === 'cyan',
              'bg-sky-400': color === 'sky',
              'bg-blue-400': color === 'blue',
              'bg-indigo-400': color === 'indigo',
              'bg-violet-400': color === 'violet',
              'bg-purple-400': color === 'purple',
              'bg-fuchsia-400': color === 'fuchsia',
              'bg-pink-400': color === 'pink',
              'bg-rose-400': color === 'rose',
              'bg-zinc-400': color === 'zinc',
            },
          )}
        />
        <span
          className={cn(
            'relative inline-flex rounded-full h-1.5 w-1.5 bg-[--dot-color]',
            {
              'bg-red-500': color === 'red',
              'bg-orange-500': color === 'orange',
              'bg-amber-500': color === 'amber',
              'bg-yellow-500': color === 'yellow',
              'bg-lime-500': color === 'lime',
              'bg-green-500': color === 'green',
              'bg-emerald-500': color === 'emerald',
              'bg-teal-500': color === 'teal',
              'bg-cyan-500': color === 'cyan',
              'bg-sky-500': color === 'sky',
              'bg-blue-500': color === 'blue',
              'bg-indigo-500': color === 'indigo',
              'bg-violet-500': color === 'violet',
              'bg-purple-500': color === 'purple',
              'bg-fuchsia-500': color === 'fuchsia',
              'bg-pink-500': color === 'pink',
              'bg-rose-500': color === 'rose',
              'bg-zinc-500': color === 'zinc',
            },
          )}
        />
      </span>

      <span>{props.children}</span>
    </span>
  )
}
