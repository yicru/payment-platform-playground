import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'http://localhost:4000/graphql',
  documents: ['app/**/*.tsx'],
  ignoreNoDocuments: true,
  generates: {
    './app/gql/': {
      preset: 'client',
    },
  },
}

export default config
