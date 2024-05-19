import { useLoaderData } from '@remix-run/react'
import { json } from '@remix-run/react'
import { useMutation } from 'urql'
import { Page } from '~/components/page'
import { Button } from '~/components/ui/button'
import { StripeAccountTable } from '~/features/stripe/components/stripe-account-table'
import { graphql } from '~/gql'
import { client } from '~/lib/urql'

const StripePageQueryDocument = graphql(/* GraphQL */ `
  query StripePage {
    stripeAccounts {
      ...StripeAccountTable_stripeAccounts
    }
  }
`)

const CreateStripeAccountMutation = graphql(/* GraphQL */ `
  mutation CreateStripeAccount {
    createStripeAccount {
      url
    }
  }
`)

export async function clientLoader() {
  const result = await client.query(StripePageQueryDocument, {}).toPromise()

  if (result.error) {
    throw result.error
  }

  return json({
    stripeAccounts: result.data?.stripeAccounts,
  })
}

export default function StripePage() {
  const { stripeAccounts } = useLoaderData<typeof clientLoader>()

  const [{ fetching }, createStripeAccount] = useMutation(
    CreateStripeAccountMutation,
  )

  const handleClickNew = async () => {
    if (fetching) return

    const result = await createStripeAccount({})

    if (result.data?.createStripeAccount.url) {
      window.location.href = result.data.createStripeAccount.url
    }
  }

  return (
    <Page title={'ホーム'}>
      <div className={'flex justify-end'}>
        <Button onClick={handleClickNew}>アカウントを作成する</Button>
      </div>

      <div className="rounded-lg border border-border bg-card px-6 mt-4">
        <div className="py-6 border-b">
          <p className="text-lg font-medium">アカウント一覧</p>
        </div>

        {stripeAccounts?.length ? (
          <div className="pb-6">
            <StripeAccountTable stripeAccounts={stripeAccounts} />
          </div>
        ) : (
          <div className="py-6">
            <p className={'text-sm font-medium'}>データがありません</p>
          </div>
        )}
      </div>
    </Page>
  )
}
