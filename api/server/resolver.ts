import type { GqlResolvers } from '../graphql/generated.ts'

export const resolvers: GqlResolvers = {
  Query: {
    greetings: () => 'Hello from Yoga in a Bun app!',
  },
}
