import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { type ReactElement, useMemo, useState } from 'react'
import { useMutation } from 'urql'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/components/ui/dialog'
import { type FragmentType, graphql, useFragment } from '~/gql'

const StripeAccountFragment = graphql(/* GraphQL */ `
  fragment CreateStripeCheckoutSessionDialog_stripeAccount on StripeAccount {
    id
  }
`)

const CreateStripeCheckoutSessionMutation = graphql(/* GraphQL */ `
  mutation CreateStripeCheckoutSessionMutation($input: CreateStripeCheckoutSessionInput!) {
    createStripeCheckoutSession(input: $input) {
      clientSecret
    }
  }
`)

type Props = {
  stripeAccount: FragmentType<typeof StripeAccountFragment>
  trigger: ReactElement
}

export function CreateStripeCheckoutSessionDialog({
  stripeAccount: _stripeAccount,
  trigger,
}: Props) {
  const stripeAccount = useFragment(StripeAccountFragment, _stripeAccount)
  const [open, setOpen] = useState(false)
  const [clientSecret, setClientSecret] = useState('')

  const [{ fetching }, createSession] = useMutation(
    CreateStripeCheckoutSessionMutation,
  )

  const stripePromise = useMemo(
    () =>
      loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY, {
        stripeAccount: stripeAccount.id,
      }),
    [stripeAccount.id],
  )

  const handleOpenChange = async (newOpen: boolean) => {
    if (!newOpen) {
      setOpen(false)
      setClientSecret('')
      return
    }

    const { data } = await createSession({
      input: {
        accountId: stripeAccount.id,
      },
    })

    if (data?.createStripeCheckoutSession) {
      setClientSecret(data.createStripeCheckoutSession.clientSecret)
      setOpen(true)
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger disabled={fetching}>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>アカウントに支払い</DialogTitle>
        </DialogHeader>
        <div>
          <EmbeddedCheckoutProvider
            stripe={stripePromise}
            options={{ clientSecret: clientSecret }}
          >
            <EmbeddedCheckout />
          </EmbeddedCheckoutProvider>
        </div>
      </DialogContent>
    </Dialog>
  )
}
