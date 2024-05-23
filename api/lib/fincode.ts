import { createFincode } from '@fincode/node'

export const fincode = createFincode({
  apiKey: process.env.FINCODE_SECRET_KEY,
  isLiveMode: false,
})
