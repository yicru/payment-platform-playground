import { type LoaderFunctionArgs, json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { useMemo } from 'react'
import { Page } from '~/components/page'
import { stripe } from '~/lib/stripe.server'

export async function loader({ request, params }: LoaderFunctionArgs) {
  if (typeof params.accountId !== 'string') {
    throw new Error('Invalid account ID.')
  }

  const account = await stripe.accounts.retrieve(params.accountId)

  const url = new URL(request.url)

  const session = await stripe.checkout.sessions.create(
    {
      line_items: [
        {
          price_data: {
            currency: 'jpy',
            product_data: {
              name: 'Payment for tenant',
            },
            unit_amount: 1000,
          },
          quantity: 1,
        },
      ],
      payment_intent_data: {
        application_fee_amount: 123,
      },
      mode: 'payment',
      ui_mode: 'embedded',
      return_url: `${url.origin}/dashboard/tenants/${account.id}`,
    },
    {
      stripeAccount: account.id,
    },
  )

  const accountSession = await stripe.accountSessions.create({
    account: account.id,
    components: {
      payouts: {
        enabled: true,
      },
    },
  })

  return json({ account, session, accountSession })
}

export default function DashboardTenantAccount() {
  const data = useLoaderData<typeof loader>()

  const stripePromise = useMemo(
    () =>
      loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY, {
        stripeAccount: data.account.id,
      }),
    [data.account.id],
  )

  return (
    <Page title={'テナント詳細'}>
      <div className="rounded-lg border border-border bg-card p-6">
        <EmbeddedCheckoutProvider
          stripe={stripePromise}
          options={{ clientSecret: data.session.client_secret }}
        >
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      </div>
    </Page>
  )
}
