import { useNavigate } from '@remix-run/react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui/table'
import { type FragmentType, graphql, useFragment } from '~/gql'

const FincodeTenantsFragment = graphql(/* GraphQL */ `
    fragment FincodeTenantTable_tenants on FincodeTenant {
        id
        shopName
        created
    }
`)

type Props = {
  tenants: FragmentType<typeof FincodeTenantsFragment>[]
}

export function FincodeTenantTable({ tenants: _tenants }: Props) {
  const tenants = useFragment(FincodeTenantsFragment, _tenants)
  const navigate = useNavigate()

  const handleClickRow = (tenantId: string) => {
    navigate(`/fincode/tenants/${tenantId}`)
  }

  return (
    <Table>
      <TableHeader>
        <TableRow className="text-xs">
          <TableHead>テナント名</TableHead>
          <TableHead className="text-right">登録日時</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tenants.map((tenant) => (
          <TableRow
            key={tenant.id}
            className={'text-xs cursor-pointer'}
            onClick={() => handleClickRow(tenant.id)}
          >
            <TableCell>{tenant.shopName}</TableCell>
            <TableCell className={'text-right'}>{tenant.created}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
