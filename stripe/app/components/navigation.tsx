import { Link, useLocation } from '@remix-run/react'
import { Check, ChevronsUpDownIcon, Slash } from 'lucide-react'
import { Logo } from '~/components/logo'
import { Button } from '~/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu'
import { cn } from '~/lib/utils'

export function Navigation() {
  const location = useLocation()

  const ROUTES = [
    {
      name: 'ホーム',
      path: '/dashboard',
    },
    {
      name: '設定',
      path: '/',
    },
  ]

  return (
    <nav className="sticky top-0 z-50 flex w-full flex-col border-b border-border bg-card px-6">
      <div className="mx-auto flex w-full max-w-screen-xl items-center justify-between py-3">
        <div className="flex h-10 items-center gap-2">
          <Logo />
          <Slash className="h-6 w-6 -rotate-12 stroke-[1.5px] text-primary/10" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="gap-2 px-2 data-[state=open]:bg-primary/5"
              >
                <span className="h-6 w-6 rounded-full bg-gradient-to-br from-lime-400 from-10% via-cyan-300 to-blue-500" />
                <p className="text-sm font-medium text-primary/80">USERNAME</p>
                <ChevronsUpDownIcon className="h-[14px] w-[14px] stroke-[1.5px] text-primary/60" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              sideOffset={8}
              className="min-w-56 bg-card p-2"
            >
              <DropdownMenuLabel className="flex items-center text-xs font-normal text-primary/60">
                Personal Account
              </DropdownMenuLabel>
              <DropdownMenuItem className="h-10 w-full cursor-pointer justify-between rounded-md bg-secondary px-2">
                <div className="flex items-center gap-2">
                  <span className="h-6 w-6 rounded-full bg-gradient-to-br from-lime-400 from-10% via-cyan-300 to-blue-500" />
                  <p className="text-sm font-medium text-primary/80">
                    USERNAME
                  </p>
                </div>
                <Check className="h-[18px] w-[18px] stroke-[1.5px] text-primary/60" />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-screen-xl items-center gap-3">
        {ROUTES.map((route) => (
          <div
            key={route.name}
            className={cn('flex h-12 items-center border-b-2', {
              'border-primary': location.pathname === route.path,
              'border-transparent': location.pathname !== route.path,
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
