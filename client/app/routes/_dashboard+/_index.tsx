import { redirect } from '@remix-run/react'

export async function clientLoader() {
  return redirect('/stripe')
}

export default function DashboardIndex() {
  return null
}
