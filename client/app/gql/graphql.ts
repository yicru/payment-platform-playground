/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CreateStripeAccountResult = {
  __typename?: 'CreateStripeAccountResult';
  url: Scalars['String']['output'];
};

export type CreateStripeAccountSessionInput = {
  accountId: Scalars['ID']['input'];
};

export type CreateStripeAccountSessionResult = {
  __typename?: 'CreateStripeAccountSessionResult';
  clientSecret: Scalars['String']['output'];
};

export type CreateStripeCheckoutSessionInput = {
  accountId: Scalars['ID']['input'];
};

export type CreateStripeCheckoutSessionResult = {
  __typename?: 'CreateStripeCheckoutSessionResult';
  clientSecret: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createStripeAccount: CreateStripeAccountResult;
  createStripeAccountSession: CreateStripeAccountSessionResult;
  createStripeCheckoutSession: CreateStripeCheckoutSessionResult;
  refreshStripeAccountLink: RefreshStripeAccountLinkResult;
};


export type MutationCreateStripeAccountSessionArgs = {
  input: CreateStripeAccountSessionInput;
};


export type MutationCreateStripeCheckoutSessionArgs = {
  input: CreateStripeCheckoutSessionInput;
};


export type MutationRefreshStripeAccountLinkArgs = {
  input: RefreshStripeAccountLinkInput;
};

export type Query = {
  __typename?: 'Query';
  stripeAccount?: Maybe<StripeAccount>;
  stripeAccounts: Array<StripeAccount>;
};


export type QueryStripeAccountArgs = {
  id: Scalars['ID']['input'];
};

export type RefreshStripeAccountLinkInput = {
  accountId: Scalars['ID']['input'];
};

export type RefreshStripeAccountLinkResult = {
  __typename?: 'RefreshStripeAccountLinkResult';
  url: Scalars['String']['output'];
};

export type StripeAccount = {
  __typename?: 'StripeAccount';
  chargesEnabled: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
};

export type CreateStripeCheckoutSessionDialog_StripeAccountFragment = { __typename?: 'StripeAccount', id: string } & { ' $fragmentName'?: 'CreateStripeCheckoutSessionDialog_StripeAccountFragment' };

export type CreateStripeCheckoutSessionMutationMutationVariables = Exact<{
  input: CreateStripeCheckoutSessionInput;
}>;


export type CreateStripeCheckoutSessionMutationMutation = { __typename?: 'Mutation', createStripeCheckoutSession: { __typename?: 'CreateStripeCheckoutSessionResult', clientSecret: string } };

export type StripeAccountTable_StripeAccountsFragment = { __typename?: 'StripeAccount', id: string, chargesEnabled: boolean } & { ' $fragmentName'?: 'StripeAccountTable_StripeAccountsFragment' };

export type StripePageQueryVariables = Exact<{ [key: string]: never; }>;


export type StripePageQuery = { __typename?: 'Query', stripeAccounts: Array<(
    { __typename?: 'StripeAccount' }
    & { ' $fragmentRefs'?: { 'StripeAccountTable_StripeAccountsFragment': StripeAccountTable_StripeAccountsFragment } }
  )> };

export type CreateStripeAccountMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateStripeAccountMutation = { __typename?: 'Mutation', createStripeAccount: { __typename?: 'CreateStripeAccountResult', url: string } };

export type StripeAccountDetailPageQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type StripeAccountDetailPageQuery = { __typename?: 'Query', stripeAccount?: (
    { __typename?: 'StripeAccount' }
    & { ' $fragmentRefs'?: { 'CreateStripeCheckoutSessionDialog_StripeAccountFragment': CreateStripeCheckoutSessionDialog_StripeAccountFragment } }
  ) | null };

export type CreateStripeAccountSessionMutationVariables = Exact<{
  input: CreateStripeAccountSessionInput;
}>;


export type CreateStripeAccountSessionMutation = { __typename?: 'Mutation', createStripeAccountSession: { __typename?: 'CreateStripeAccountSessionResult', clientSecret: string } };

export type RefreshStripeAccountLinkMutationVariables = Exact<{
  input: RefreshStripeAccountLinkInput;
}>;


export type RefreshStripeAccountLinkMutation = { __typename?: 'Mutation', refreshStripeAccountLink: { __typename?: 'RefreshStripeAccountLinkResult', url: string } };

export const CreateStripeCheckoutSessionDialog_StripeAccountFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CreateStripeCheckoutSessionDialog_stripeAccount"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StripeAccount"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]} as unknown as DocumentNode<CreateStripeCheckoutSessionDialog_StripeAccountFragment, unknown>;
export const StripeAccountTable_StripeAccountsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StripeAccountTable_stripeAccounts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StripeAccount"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"chargesEnabled"}}]}}]} as unknown as DocumentNode<StripeAccountTable_StripeAccountsFragment, unknown>;
export const CreateStripeCheckoutSessionMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateStripeCheckoutSessionMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateStripeCheckoutSessionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createStripeCheckoutSession"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientSecret"}}]}}]}}]} as unknown as DocumentNode<CreateStripeCheckoutSessionMutationMutation, CreateStripeCheckoutSessionMutationMutationVariables>;
export const StripePageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"StripePage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stripeAccounts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"StripeAccountTable_stripeAccounts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StripeAccountTable_stripeAccounts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StripeAccount"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"chargesEnabled"}}]}}]} as unknown as DocumentNode<StripePageQuery, StripePageQueryVariables>;
export const CreateStripeAccountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateStripeAccount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createStripeAccount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<CreateStripeAccountMutation, CreateStripeAccountMutationVariables>;
export const StripeAccountDetailPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"StripeAccountDetailPage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stripeAccount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CreateStripeCheckoutSessionDialog_stripeAccount"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CreateStripeCheckoutSessionDialog_stripeAccount"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StripeAccount"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]} as unknown as DocumentNode<StripeAccountDetailPageQuery, StripeAccountDetailPageQueryVariables>;
export const CreateStripeAccountSessionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateStripeAccountSession"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateStripeAccountSessionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createStripeAccountSession"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientSecret"}}]}}]}}]} as unknown as DocumentNode<CreateStripeAccountSessionMutation, CreateStripeAccountSessionMutationVariables>;
export const RefreshStripeAccountLinkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RefreshStripeAccountLink"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RefreshStripeAccountLinkInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"refreshStripeAccountLink"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<RefreshStripeAccountLinkMutation, RefreshStripeAccountLinkMutationVariables>;