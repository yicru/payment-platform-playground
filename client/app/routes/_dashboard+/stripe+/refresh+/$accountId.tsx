import { type ClientLoaderFunctionArgs, redirect } from '@remix-run/react'
import { graphql } from '~/gql'
import { client } from '~/lib/urql'

const RefreshStripeAccountLinkMutation = graphql(/* GraphQL */ `
  mutation RefreshStripeAccountLink($input: RefreshStripeAccountLinkInput!) {
    refreshStripeAccountLink(input: $input) {
      url
    }
  }
`)

export async function clientLoader({ params }: ClientLoaderFunctionArgs) {
  if (typeof params.accountId !== 'string') {
    return redirect('/stripe')
  }

  const result = await client
    .mutation(RefreshStripeAccountLinkMutation, {
      input: {
        accountId: params.accountId,
      },
    })
    .toPromise()

  if (!result.data?.refreshStripeAccountLink.url) {
    return redirect('/stripe')
  }

  return redirect(result.data.refreshStripeAccountLink.url)
}

export default function StripeRefresh() {
  return null
}
