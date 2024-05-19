import type { ReactElement, ReactNode } from 'react'

type Props = {
  nav?: ReactElement
  title: string
  subtitle?: string
  children: ReactNode
}

export function Page({ nav, title, subtitle, children }: Props) {
  return (
    <div>
      <header className="z-10 flex w-full flex-col border-b border-border bg-card px-6">
        <div className="mx-auto flex w-full max-w-screen-xl items-center justify-between py-8">
          <div className="flex flex-col items-start gap-2">
            {nav}
            <h1 className="text-lg font-medium text-primary/80">{title}</h1>
            <p className="text-sm text-primary/60">{subtitle}</p>
          </div>
        </div>
      </header>
      <div className="flex h-full w-full bg-secondary px-6 py-8 dark:bg-black">
        <div className="z-10 mx-auto h-full w-full max-w-screen-xl">
          {children}
        </div>
      </div>
    </div>
  )
}
