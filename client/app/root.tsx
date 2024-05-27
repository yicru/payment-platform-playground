import type { LinksFunction } from '@remix-run/node'
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import { Loader2Icon } from 'lucide-react'
import { Provider } from 'urql'
import { client } from '~/lib/urql'
import stylesheet from '~/tailwind.css?url'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap',
    rel: 'stylesheet',
  },
  {
    href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap',
    rel: 'stylesheet',
  },
]

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Provider value={client}>
          {children}
          <ScrollRestoration />
          <Scripts />
        </Provider>
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}

export function HydrateFallback() {
  return (
    <div
      className={
        'fixed inset-0 flex flex-col justify-center items-center gap-2'
      }
    >
      <Loader2Icon className={'w-8 h-8 animate-spin'} />
      <p className={'text-sm font-medium'}>読込中...</p>
    </div>
  )
}
