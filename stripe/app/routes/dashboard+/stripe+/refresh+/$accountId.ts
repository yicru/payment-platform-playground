import { type LoaderFunctionArgs, redirect } from '@remix-run/node'
import { stripe } from '~/lib/stripe.server'

export async function loader({ request, params }: LoaderFunctionArgs) {
  if (typeof params.accountId !== 'string') {
    throw new Error('Invalid account ID.')
  }

  const account = await stripe.accounts.retrieve(params.accountId)

  const url = new URL(request.url)

  const accountLink = await stripe.accountLinks.create({
    account: account.id,
    refresh_url: `${url.origin}/dashboard/stripe/refresh/${account.id}`,
    return_url: `${url.origin}/dashboard/stripe/refresh/${account.id}`,
    type: 'account_onboarding',
  })

  return redirect(accountLink.url)
}
