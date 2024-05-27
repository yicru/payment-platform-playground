import { Client, cacheExchange, fetchExchange } from 'urql'

if (!import.meta.env.VITE_GRAPHQL_URL) {
  throw new Error('VITE_GRAPHQL_URL is required')
}

export const client = new Client({
  url: import.meta.env.VITE_GRAPHQL_URL,
  exchanges: [cacheExchange, fetchExchange],
})
