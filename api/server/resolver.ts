import type { GqlResolvers } from '../graphql/generated.ts'
import { fincode } from '../lib/fincode.ts'
import { stripe } from '../lib/stripe.ts'

export const resolvers: GqlResolvers = {
  Query: {
    stripeAccount: async (_, args) => {
      const account = await stripe.accounts.retrieve(args.id)

      return {
        id: account.id,
        chargesEnabled: account.charges_enabled,
      }
    },
    stripeAccounts: async () => {
      const accounts = await stripe.accounts.list({
        limit: 100,
      })

      return accounts.data.map((account) => ({
        id: account.id,
        chargesEnabled: account.charges_enabled,
      }))
    },
    fincodeTenant: async (_, args) => {
      const tenant = await fincode.tenants.retrieve(args.id)

      return {
        id: tenant.id,
        shopName: tenant.shop_name,
        created: tenant.created,
      }
    },
    fincodeTenants: async () => {
      const tenants = await fincode.tenants.retrieveList()

      return (
        tenants.list?.map((tenant) => ({
          id: tenant.id,
          shopName: tenant.shop_name,
          created: tenant.created,
        })) ?? []
      )
    },
    fincodeInviteUrl: () => {
      return process.env.FINCODE_TENANT_INVITE_URL
    },
    fincodePayments: async (_, args) => {
      const payments = await fincode.payments.retrieveList({
        pay_type: 'Card',
      }, {
        tenantShopId: args.tenantId,
      })

      return payments.list?.map(payment => ({
        id: payment.id,
        status: payment.status,
        amount: payment.amount,
        processDate: payment.process_date,
      })) ?? []
    }
  },
  Mutation: {
    createStripeAccount: async () => {
      const account = await stripe.accounts.create({})

      const accountLink = await stripe.accountLinks.create({
        account: account.id,
        refresh_url: process.env.STRIPE_REFRESH_URL.replace(
          '__ACCOUNT_ID__',
          account.id,
        ),
        return_url: process.env.STRIPE_RETURN_URL.replace(
          '__ACCOUNT_ID__',
          account.id,
        ),
        type: 'account_onboarding',
      })

      return {
        url: accountLink.url,
      }
    },
    refreshStripeAccountLink: async (_, args) => {
      const account = await stripe.accounts.retrieve(args.input.accountId)

      const accountLink = await stripe.accountLinks.create({
        account: account.id,
        refresh_url: process.env.STRIPE_REFRESH_URL.replace(
          '__ACCOUNT_ID__',
          account.id,
        ),
        return_url: process.env.STRIPE_RETURN_URL.replace(
          '__ACCOUNT_ID__',
          account.id,
        ),
        type: 'account_onboarding',
      })

      return {
        url: accountLink.url,
      }
    },
    createStripeAccountSession: async (_, args) => {
      const accountSession = await stripe.accountSessions.create({
        account: args.input.accountId,
        components: {
          payments: {
            enabled: true,
            features: {
              refund_management: true,
              dispute_management: true,
              capture_payments: true,
            },
          },
        },
      })

      return {
        clientSecret: accountSession.client_secret,
      }
    },
    createStripeCheckoutSession: async (_, args) => {
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
          return_url: process.env.STRIPE_CHECKOUT_RETURN_URL.replace(
            '__ACCOUNT_ID__',
            args.input.accountId,
          ),
        },
        {
          stripeAccount: args.input.accountId,
        },
      )

      if (!session.client_secret) {
        throw new Error('Failed to create session.')
      }

      return {
        clientSecret: session.client_secret,
      }
    },
    createFincodePaymentSession: async (_, args) => {
      const session = await fincode.paymentSessions.create(
        {
          success_url: process.env.FINCODE_PAYMNET_SUCCESS_URL.replace(
            '__TENANT_ID__',
            args.input.tenantId,
          ),
          cancel_url: process.env.FINCODE_PAYMNET_CANCEL_URL.replace(
            '__TENANT_ID__',
            args.input.tenantId,
          ),
          transaction: {
            amount: '1000',
          },
        },
        {
          tenantShopId: args.input.tenantId,
        },
      )

      return {
        url: session.link_url,
      }
    },
  },
}
