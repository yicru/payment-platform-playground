import fs from 'node:fs'
import path from 'node:path'
import { createSchema, createYoga } from 'graphql-yoga'
import { initEnvs } from '../lib/env.ts'
import { resolvers } from './resolver.ts'

initEnvs()

const yoga = createYoga({
  cors: {
    origin: process.env.ALLOWED_ORIGIN,
  },
  schema: createSchema({
    typeDefs: fs.readFileSync(
      path.join(__dirname, '../graphql/schema.graphql'),
      'utf-8',
    ),
    resolvers,
  }),
})

const server = Bun.serve({
  fetch: yoga,
  port: 4000,
})

console.info(
  `Server is running on ${new URL(
    yoga.graphqlEndpoint,
    `http://${server.hostname}:${server.port}`,
  )}`,
)
