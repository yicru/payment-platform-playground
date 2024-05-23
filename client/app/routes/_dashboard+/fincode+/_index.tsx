import { json, useLoaderData } from '@remix-run/react'
import { Page } from '~/components/page'
import { Button } from '~/components/ui/button'
import { FincodeTenantTable } from '~/features/fincode/components/fincode-tenant-table'
import { graphql } from '~/gql'
import { client } from '~/lib/urql'

const FincodePageQueryDocument = graphql(/* GraphQL */ `
  query FincodePage {
    fincodeInviteUrl
    fincodeTenants {
      ...FincodeTenantTable_tenants
    }
  }
`)

export async function clientLoader() {
  const result = await client.query(FincodePageQueryDocument, {}).toPromise()

  if (result.error) {
    throw result.error
  }

  return json({
    inviteUrl: result.data?.fincodeInviteUrl,
    tenants: result.data?.fincodeTenants,
  })
}

export default function FincodePage() {
  const { inviteUrl, tenants } = useLoaderData<typeof clientLoader>()

  return (
    <Page title={'ホーム'}>
      <div className={'flex justify-end'}>
        <a href={inviteUrl} target={'_blank'}>
          <Button>テナントを作成する</Button>
        </a>
      </div>
      <div className="rounded-lg border border-border bg-card px-6 mt-4">
        <div className="py-6 border-b">
          <p className="text-lg font-medium">テナント一覧</p>
        </div>

        {tenants?.length ? (
          <div className="pb-6">
            <FincodeTenantTable tenants={tenants} />
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
