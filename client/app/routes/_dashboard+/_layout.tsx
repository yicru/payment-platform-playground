import { Outlet } from '@remix-run/react'
import { Navigation } from '~/components/navigation'

export default function Dashboard() {
  return (
    <div className="flex min-h-[100vh] w-full flex-col bg-secondary dark:bg-black">
      <Navigation />
      <Outlet />
    </div>
  )
}
