/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  fragment CreateStripeCheckoutSessionDialog_stripeAccount on StripeAccount {\n    id\n  }\n": types.CreateStripeCheckoutSessionDialog_StripeAccountFragmentDoc,
    "\n  mutation CreateStripeCheckoutSessionMutation($input: CreateStripeCheckoutSessionInput!) {\n    createStripeCheckoutSession(input: $input) {\n      clientSecret\n    }\n  }\n": types.CreateStripeCheckoutSessionMutationDocument,
    "\n    fragment StripeAccountTable_stripeAccounts on StripeAccount {\n        id\n        chargesEnabled\n    }\n": types.StripeAccountTable_StripeAccountsFragmentDoc,
    "\n  query StripePage {\n    stripeAccounts {\n      ...StripeAccountTable_stripeAccounts\n    }\n  }\n": types.StripePageDocument,
    "\n  mutation CreateStripeAccount {\n    createStripeAccount {\n      url\n    }\n  }\n": types.CreateStripeAccountDocument,
    "\n    query StripeAccountDetailPage($id: ID!) {\n        stripeAccount(id: $id) {\n            ...CreateStripeCheckoutSessionDialog_stripeAccount\n        }\n    }\n": types.StripeAccountDetailPageDocument,
    "\n    mutation CreateStripeAccountSession($input: CreateStripeAccountSessionInput!) {\n        createStripeAccountSession(input: $input) {\n            clientSecret\n        }\n    }\n": types.CreateStripeAccountSessionDocument,
    "\n  mutation RefreshStripeAccountLink($input: RefreshStripeAccountLinkInput!) {\n    refreshStripeAccountLink(input: $input) {\n      url\n    }\n  }\n": types.RefreshStripeAccountLinkDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment CreateStripeCheckoutSessionDialog_stripeAccount on StripeAccount {\n    id\n  }\n"): (typeof documents)["\n  fragment CreateStripeCheckoutSessionDialog_stripeAccount on StripeAccount {\n    id\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateStripeCheckoutSessionMutation($input: CreateStripeCheckoutSessionInput!) {\n    createStripeCheckoutSession(input: $input) {\n      clientSecret\n    }\n  }\n"): (typeof documents)["\n  mutation CreateStripeCheckoutSessionMutation($input: CreateStripeCheckoutSessionInput!) {\n    createStripeCheckoutSession(input: $input) {\n      clientSecret\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment StripeAccountTable_stripeAccounts on StripeAccount {\n        id\n        chargesEnabled\n    }\n"): (typeof documents)["\n    fragment StripeAccountTable_stripeAccounts on StripeAccount {\n        id\n        chargesEnabled\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query StripePage {\n    stripeAccounts {\n      ...StripeAccountTable_stripeAccounts\n    }\n  }\n"): (typeof documents)["\n  query StripePage {\n    stripeAccounts {\n      ...StripeAccountTable_stripeAccounts\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateStripeAccount {\n    createStripeAccount {\n      url\n    }\n  }\n"): (typeof documents)["\n  mutation CreateStripeAccount {\n    createStripeAccount {\n      url\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query StripeAccountDetailPage($id: ID!) {\n        stripeAccount(id: $id) {\n            ...CreateStripeCheckoutSessionDialog_stripeAccount\n        }\n    }\n"): (typeof documents)["\n    query StripeAccountDetailPage($id: ID!) {\n        stripeAccount(id: $id) {\n            ...CreateStripeCheckoutSessionDialog_stripeAccount\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation CreateStripeAccountSession($input: CreateStripeAccountSessionInput!) {\n        createStripeAccountSession(input: $input) {\n            clientSecret\n        }\n    }\n"): (typeof documents)["\n    mutation CreateStripeAccountSession($input: CreateStripeAccountSessionInput!) {\n        createStripeAccountSession(input: $input) {\n            clientSecret\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation RefreshStripeAccountLink($input: RefreshStripeAccountLinkInput!) {\n    refreshStripeAccountLink(input: $input) {\n      url\n    }\n  }\n"): (typeof documents)["\n  mutation RefreshStripeAccountLink($input: RefreshStripeAccountLinkInput!) {\n    refreshStripeAccountLink(input: $input) {\n      url\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;