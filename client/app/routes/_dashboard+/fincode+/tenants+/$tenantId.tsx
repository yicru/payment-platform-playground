import { type ClientLoaderFunctionArgs, Link } from '@remix-run/react'
import { json, useLoaderData } from '@remix-run/react'
import { useMutation } from 'urql'
import { Page } from '~/components/page'
import { Button } from '~/components/ui/button'
import { FincodePaymentTable } from '~/features/fincode/components/fincode-payment-table'
import { graphql } from '~/gql'
import { client } from '~/lib/urql'

const FincodeTenantDetailPageQueryDocument = graphql(/* GraphQL */ `
    query FincodeTenantDetailPage($id: ID!) {
        fincodeTenant(id: $id) {
            id
            shopName
        }
        fincodePayments(tenantId: $id) {
            ...FincodePaymentTable_payments
        }
    }
`)

const CreateFincodePaymentSessionMutation = graphql(/* GraphQL */ `
    mutation CreateFincodePaymentSession($input: CreateFincodePaymentSessionInput!) {
        createFincodePaymentSession(input: $input) {
            url
        }
    }
`)

export async function clientLoader({ params }: ClientLoaderFunctionArgs) {
  if (typeof params.tenantId !== 'string') {
    throw new Error('Invalid tenant ID.')
  }

  const queryResult = await client
    .query(FincodeTenantDetailPageQueryDocument, {
      id: params.tenantId,
    })
    .toPromise()

  return json({
    tenant: queryResult.data?.fincodeTenant,
    payments: queryResult.data?.fincodePayments,
  })
}

export default function FincodeTenantDetailPage() {
  const { tenant, payments } = useLoaderData<typeof clientLoader>()

  const [{ fetching }, createSession] = useMutation(
    CreateFincodePaymentSessionMutation,
  )

  const handleClickPayment = async () => {
    if (!tenant) return

    const { data } = await createSession({
      input: {
        tenantId: tenant.id,
      },
    })

    if (data?.createFincodePaymentSession.url) {
      window.location.href = data.createFincodePaymentSession.url
    }
  }

  return (
    <Page
      title={tenant?.shopName ?? 'テナント詳細'}
      nav={
        <Link to={'/fincode'} className={'text-primary/60 text-xs'}>
          テナント一覧に戻る
        </Link>
      }
    >
      <div className={'flex justify-end'}>
        <Button disabled={fetching} onClick={handleClickPayment}>
          支払いを作成
        </Button>
      </div>
      <div className="rounded-lg border border-border bg-card p-6 mt-4">
        {payments?.length ? (
          <FincodePaymentTable payments={payments} />
        ) : (
          <p>データがありません</p>
        )}
      </div>
    </Page>
  )
}
