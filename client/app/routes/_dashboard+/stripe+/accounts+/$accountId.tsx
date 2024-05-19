import {
  type ClientLoaderFunctionArgs,
  Link,
  useParams,
} from '@remix-run/react'
import { json, useLoaderData } from '@remix-run/react'
import { loadConnectAndInitialize } from '@stripe/connect-js'
import {
  ConnectComponentsProvider,
  ConnectPayments,
} from '@stripe/react-connect-js'
import { useState } from 'react'
import { Page } from '~/components/page'
import { Button } from '~/components/ui/button'
import { CreateStripeCheckoutSessionDialog } from '~/features/stripe/components/create-stripe-checkout-session-dialog'
import { graphql } from '~/gql'
import { client } from '~/lib/urql'

const StripeAccountDetailPageQueryDocument = graphql(/* GraphQL */ `
    query StripeAccountDetailPage($id: ID!) {
        stripeAccount(id: $id) {
            ...CreateStripeCheckoutSessionDialog_stripeAccount
        }
    }
`)

const CreateStripeAccountSessionMutation = graphql(/* GraphQL */ `
    mutation CreateStripeAccountSession($input: CreateStripeAccountSessionInput!) {
        createStripeAccountSession(input: $input) {
            clientSecret
        }
    }
`)

export async function clientLoader({ params }: ClientLoaderFunctionArgs) {
  if (typeof params.accountId !== 'string') {
    throw new Error('Invalid account ID.')
  }

  const queryResult = await client
    .query(StripeAccountDetailPageQueryDocument, {
      id: params.accountId,
    })
    .toPromise()

  return json({
    stripeAccount: queryResult.data?.stripeAccount,
  })
}

export default function StripeAccountDetailPage() {
  const data = useLoaderData<typeof clientLoader>()
  const params = useParams()

  const [stripeConnectInstance] = useState(() => {
    const fetchClientSecret = async () => {
      const result = await client
        .mutation(CreateStripeAccountSessionMutation, {
          input: {
            accountId: params.accountId as string,
          },
        })
        .toPromise()

      return result.data?.createStripeAccountSession.clientSecret ?? ''
    }

    return loadConnectAndInitialize({
      publishableKey: import.meta.env.VITE_STRIPE_PUBLIC_KEY,
      fetchClientSecret: fetchClientSecret,
    })
  })

  return (
    <Page
      title={'アカウント詳細'}
      nav={
        <Link to={'/stripe'} className={'text-primary/60 text-xs'}>
          アカウント一覧に戻る
        </Link>
      }
    >
      <div className={'flex justify-end'}>
        {data.stripeAccount && (
          <CreateStripeCheckoutSessionDialog
            stripeAccount={data.stripeAccount}
            trigger={<Button>支払いを作成</Button>}
          />
        )}
      </div>
      <div className="rounded-lg border border-border bg-card p-6 mt-4">
        <ConnectComponentsProvider connectInstance={stripeConnectInstance}>
          <ConnectPayments />
        </ConnectComponentsProvider>
      </div>
    </Page>
  )
}
