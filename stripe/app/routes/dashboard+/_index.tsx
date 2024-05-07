import { type ActionFunctionArgs, json, redirect } from '@remix-run/node'
import { useFetcher, useLoaderData, useNavigate } from '@remix-run/react'
import { LoaderCircleIcon, Plus } from 'lucide-react'
import { ColorBadge } from '~/components/color-badge'
import { Page } from '~/components/page'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui/table'
import { stripe } from '~/lib/stripe.server'
import { cn } from '~/lib/utils'

export async function loader() {
  const accounts = await stripe.accounts.list({
    limit: 100, // TODO: pagination
  })

  return json({ accounts })
}

export async function action({ request }: ActionFunctionArgs) {
  const account = await stripe.accounts.create({})

  const url = new URL(request.url)

  const accountLink = await stripe.accountLinks.create({
    account: account.id,
    refresh_url: `${url.origin}/dashboard/stripe/refresh/${account.id}`,
    return_url: `${url.origin}/dashboard/stripe/refresh/${account.id}`,
    type: 'account_onboarding',
  })

  return redirect(accountLink.url)
}

export default function DashboardIndex() {
  const data = useLoaderData<typeof loader>()
  const fetcher = useFetcher()
  const navigate = useNavigate()

  const handleClickNew = () => {
    if (fetcher.state !== 'idle') return
    fetcher.submit(null, { method: 'POST' })
  }

  const handleClickRow = (accountId: string) => {
    navigate(`/dashboard/tenants/${accountId}`)
  }

  return (
    <Page title={'ホーム'}>
      {data.accounts.data.length > 0 && (
        <div className="rounded-lg border border-border bg-card px-6 mb-8">
          <div className="py-6 border-b">
            <p className="text-lg font-medium">テナント一覧</p>
          </div>

          <div className="pb-6">
            <Table>
              <TableHeader>
                <TableRow className="text-xs">
                  <TableHead>アカウント</TableHead>
                  <TableHead className="text-right">ステータス</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.accounts.data.map((account) => (
                  <TableRow
                    key={account.id}
                    className={cn('text-xs', {
                      'cursor-pointer': account.charges_enabled,
                      'cursor-not-allowed': !account.charges_enabled,
                    })}
                    onClick={
                      account.charges_enabled
                        ? () => handleClickRow(account.id)
                        : undefined
                    }
                  >
                    <TableCell>{account.id}</TableCell>
                    <TableCell className="text-right">
                      <ColorBadge
                        color={account.charges_enabled ? 'green' : 'red'}
                      >
                        {account.charges_enabled ? '完了' : '制限あり'}
                      </ColorBadge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      )}

      <div className="rounded-lg border border-border bg-card p-6">
        <div
          className={cn(
            'relative flex w-full flex-col items-center justify-center gap-6 overflow-hidden rounded-lg border border-border bg-secondary px-6 py-24 dark:bg-card',
            {
              'cursor-pointer': fetcher.state === 'idle',
              'cursor-not-allowed': fetcher.state !== 'idle',
            },
          )}
          onClick={handleClickNew}
        >
          <div className="z-10 flex max-w-[460px] flex-col items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/20 bg-card hover:border-primary/40">
              {fetcher.state === 'submitting' || fetcher.state === 'loading' ? (
                <LoaderCircleIcon className="h-8 w-8 stroke-[1.5px] text-primary/60 animate-spin" />
              ) : (
                <Plus className="h-8 w-8 stroke-[1.5px] text-primary/60" />
              )}
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="text-base font-medium text-primary">
                テナントを作成する
              </p>
              <p className="text-center text-xs font-normal text-primary/60">
                支払いを受け付けるためにテナントを作成しましょう
              </p>
            </div>
          </div>
          <div className="base-grid absolute h-full w-full opacity-40" />
          <div className="absolute bottom-0 h-full w-full bg-gradient-to-t from-[hsl(var(--card))] to-transparent" />
        </div>
      </div>
    </Page>
  )
}
