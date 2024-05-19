import { useNavigate } from '@remix-run/react'
import { ColorBadge } from '~/components/color-badge'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui/table'
import { type FragmentType, graphql, useFragment } from '~/gql'
import { cn } from '~/lib/utils'

const StripeAccountsFragment = graphql(/* GraphQL */ `
    fragment StripeAccountTable_stripeAccounts on StripeAccount {
        id
        chargesEnabled
    }
`)

type Props = {
  stripeAccounts: FragmentType<typeof StripeAccountsFragment>[]
}

export function StripeAccountTable({ stripeAccounts: _stripeAccounts }: Props) {
  const stripeAccounts = useFragment(StripeAccountsFragment, _stripeAccounts)
  const navigate = useNavigate()

  const handleClickRow = (accountId: string) => {
    navigate(`/stripe/accounts/${accountId}`)
  }

  return (
    <Table>
      <TableHeader>
        <TableRow className="text-xs">
          <TableHead>アカウント</TableHead>
          <TableHead className="text-right">ステータス</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {stripeAccounts.map((account) => (
          <TableRow
            key={account.id}
            className={cn('text-xs', {
              'cursor-pointer': account.chargesEnabled,
              'cursor-not-allowed pointer-events-none': !account.chargesEnabled,
            })}
            onClick={() => handleClickRow(account.id)}
          >
            <TableCell>{account.id}</TableCell>
            <TableCell className="text-right">
              <ColorBadge color={account.chargesEnabled ? 'green' : 'red'}>
                {account.chargesEnabled ? '完了' : '制限あり'}
              </ColorBadge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
