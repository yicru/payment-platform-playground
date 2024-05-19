import fs from 'node:fs'
import path from 'node:path'
import { createSchema, createYoga } from 'graphql-yoga'
import { resolvers } from './resolver.ts'

const yoga = createYoga({
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
