import { z } from 'zod'

const schema = z.object({
  STRIPE_SECRET_KEY: z.string(),
  STRIPE_REFRESH_URL: z.string().url(),
  STRIPE_RETURN_URL: z.string().url(),
  STRIPE_CHECKOUT_RETURN_URL: z.string().url(),
  FINCODE_SECRET_KEY: z.string(),
  FINCODE_TENANT_INVITE_URL: z.string().url(),
  FINCODE_PAYMNET_SUCCESS_URL: z.string().url(),
  FINCODE_PAYMNET_CANCEL_URL: z.string().url(),
})

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof schema> {}
  }
}

export function initEnvs() {
  const parsed = schema.safeParse(process.env)

  if (!parsed.success) {
    console.error(
      'Invalid environment variables:',
      parsed.error.flatten().fieldErrors,
    )
    throw new Error('Invalid environment variables.')
  }
}
