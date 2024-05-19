import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  generates: {
    './graphql/generated.ts': {
      schema: './graphql/schema.graphql',
      plugins: ['typescript', 'typescript-resolvers'],
      config: {
        typesPrefix: 'Gql',
      },
    },
  },
}

export default config
