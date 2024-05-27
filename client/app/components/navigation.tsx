import { Link, useLocation } from '@remix-run/react'
import { Slash } from 'lucide-react'
import { Logo } from '~/components/logo'
import { Button } from '~/components/ui/button'
import { cn } from '~/lib/utils'

export function Navigation() {
  const location = useLocation()

  const ROUTES = [
    {
      name: 'Stripe',
      path: '/stripe',
      isActive: location.pathname.startsWith('/stripe'),
    },
    {
      name: 'fincode',
      path: '/fincode',
      isActive: location.pathname.startsWith('/fincode'),
    },
  ]

  return (
    <nav className="sticky top-0 z-50 flex w-full flex-col border-b border-border bg-card px-6">
      <div className="mx-auto flex w-full max-w-screen-xl items-center justify-between py-3">
        <div className="flex h-10 items-center gap-2">
          <Logo />
          <Slash className="h-6 w-6 -rotate-12 stroke-[1.5px] text-primary/10" />
          <h1 className={'text-xs font-medium'}>Payment Platform Playground</h1>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-screen-xl items-center gap-3">
        {ROUTES.map((route) => (
          <div
            key={route.name}
            className={cn('flex h-12 items-center border-b-2', {
              'border-primary': route.isActive,
              'border-transparent': !route.isActive,
            })}
          >
            <Link to={route.path}>
              <Button
                variant={'ghost'}
                size={'sm'}
                className={'text-primary/80'}
              >
                {route.name}
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </nav>
  )
}
