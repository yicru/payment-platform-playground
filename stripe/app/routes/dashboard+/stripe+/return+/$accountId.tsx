import { CheckIcon } from '@radix-ui/react-icons'
import { type LoaderFunctionArgs, redirect } from '@remix-run/node'
import { Link } from '@remix-run/react'
import { Page } from '~/components/page'
import { Button } from '~/components/ui/button'
import { stripe } from '~/lib/stripe.server'

export async function loader({ params }: LoaderFunctionArgs) {
  if (typeof params.accountId !== 'string') {
    throw new Error('Invalid account ID.')
  }

  const account = await stripe.accounts.retrieve(params.accountId)

  if (!account.details_submitted) {
    return redirect('/dashboard')
  }

  return null
}

export default function DashboardStripeReturn() {
  return (
    <Page title={'ホーム'}>
      <div className="rounded-lg border border-border bg-card px-6">
        <div className="py-6 border-b">
          <p className="text-lg font-medium">テナント登録完了</p>
        </div>
        <div className="py-6">
          <Link to={'/dashboard'}>
            <div className="relative flex w-full flex-col items-center justify-center gap-6 overflow-hidden rounded-lg border border-border bg-secondary px-6 py-24 dark:bg-card cursor-pointer">
              <div className="z-10 flex max-w-[460px] flex-col items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/20 bg-card hover:border-primary/40">
                  <CheckIcon className="h-8 w-8 stroke-[1.5px] text-primary/60" />
                </div>
                <div className="flex flex-col items-center gap-4">
                  <p className="text-base font-medium text-primary">
                    テナント登録が完了しました
                  </p>
                  <Button>ホームに戻る</Button>
                </div>
              </div>
              <div className="base-grid absolute h-full w-full opacity-40" />
              <div className="absolute bottom-0 h-full w-full bg-gradient-to-t from-[hsl(var(--card))] to-transparent" />
            </div>
          </Link>
        </div>
      </div>
    </Page>
  )
}
