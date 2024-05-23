import { format } from 'date-fns'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui/table'
import { type FragmentType, graphql, useFragment } from '~/gql'

const FincodePaymentsFragment = graphql(/* GraphQL */ `
    fragment FincodePaymentTable_payments on FincodePayment {
        id
        status
        amount
        processDate
    }
`)

type Props = {
  payments: FragmentType<typeof FincodePaymentsFragment>[]
}

export function FincodePaymentTable({ payments: _payments }: Props) {
  const payments = useFragment(FincodePaymentsFragment, _payments)

  return (
    <Table>
      <TableHeader>
        <TableRow className="text-xs">
          <TableHead>ID</TableHead>
          <TableHead>ステータス</TableHead>
          <TableHead>合計金額</TableHead>
          <TableHead className="text-right">処理日時</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {payments.map((payment) => (
          <TableRow key={payment.id} className={'text-xs cursor-pointer'}>
            <TableCell>{payment.id}</TableCell>
            <TableCell>{payment.status}</TableCell>
            <TableCell>{payment.amount?.toLocaleString()}</TableCell>
            <TableCell className={'text-right'}>
              {format(payment.processDate, 'MM/dd HH:mm')}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
