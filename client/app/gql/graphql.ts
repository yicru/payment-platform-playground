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

export type CreateFincodePaymentSessionInput = {
  tenantId: Scalars['ID']['input'];
};

export type CreateFincodePaymentSessionResult = {
  __typename?: 'CreateFincodePaymentSessionResult';
  url: Scalars['String']['output'];
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

export type FincodePayment = {
  __typename?: 'FincodePayment';
  amount?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  processDate: Scalars['String']['output'];
  status: Scalars['String']['output'];
};

export type FincodeTenant = {
  __typename?: 'FincodeTenant';
  created: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  shopName: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createFincodePaymentSession: CreateFincodePaymentSessionResult;
  createStripeAccount: CreateStripeAccountResult;
  createStripeAccountSession: CreateStripeAccountSessionResult;
  createStripeCheckoutSession: CreateStripeCheckoutSessionResult;
  refreshStripeAccountLink: RefreshStripeAccountLinkResult;
};


export type MutationCreateFincodePaymentSessionArgs = {
  input: CreateFincodePaymentSessionInput;
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
  fincodeInviteUrl: Scalars['String']['output'];
  fincodePayments: Array<FincodePayment>;
  fincodeTenant?: Maybe<FincodeTenant>;
  fincodeTenants: Array<FincodeTenant>;
  stripeAccount?: Maybe<StripeAccount>;
  stripeAccounts: Array<StripeAccount>;
};


export type QueryFincodePaymentsArgs = {
  tenantId: Scalars['ID']['input'];
};


export type QueryFincodeTenantArgs = {
  id: Scalars['ID']['input'];
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

export type FincodePaymentTable_PaymentsFragment = { __typename?: 'FincodePayment', id: string, status: string, amount?: number | null, processDate: string } & { ' $fragmentName'?: 'FincodePaymentTable_PaymentsFragment' };

export type FincodeTenantTable_TenantsFragment = { __typename?: 'FincodeTenant', id: string, shopName: string, created: string } & { ' $fragmentName'?: 'FincodeTenantTable_TenantsFragment' };

export type CreateStripeCheckoutSessionDialog_StripeAccountFragment = { __typename?: 'StripeAccount', id: string } & { ' $fragmentName'?: 'CreateStripeCheckoutSessionDialog_StripeAccountFragment' };

export type CreateStripeCheckoutSessionMutationMutationVariables = Exact<{
  input: CreateStripeCheckoutSessionInput;
}>;


export type CreateStripeCheckoutSessionMutationMutation = { __typename?: 'Mutation', createStripeCheckoutSession: { __typename?: 'CreateStripeCheckoutSessionResult', clientSecret: string } };

export type StripeAccountTable_StripeAccountsFragment = { __typename?: 'StripeAccount', id: string, chargesEnabled: boolean } & { ' $fragmentName'?: 'StripeAccountTable_StripeAccountsFragment' };

export type FincodePageQueryVariables = Exact<{ [key: string]: never; }>;


export type FincodePageQuery = { __typename?: 'Query', fincodeInviteUrl: string, fincodeTenants: Array<(
    { __typename?: 'FincodeTenant' }
    & { ' $fragmentRefs'?: { 'FincodeTenantTable_TenantsFragment': FincodeTenantTable_TenantsFragment } }
  )> };

export type FincodeTenantDetailPageQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type FincodeTenantDetailPageQuery = { __typename?: 'Query', fincodeTenant?: { __typename?: 'FincodeTenant', id: string, shopName: string } | null, fincodePayments: Array<(
    { __typename?: 'FincodePayment' }
    & { ' $fragmentRefs'?: { 'FincodePaymentTable_PaymentsFragment': FincodePaymentTable_PaymentsFragment } }
  )> };

export type CreateFincodePaymentSessionMutationVariables = Exact<{
  input: CreateFincodePaymentSessionInput;
}>;


export type CreateFincodePaymentSessionMutation = { __typename?: 'Mutation', createFincodePaymentSession: { __typename?: 'CreateFincodePaymentSessionResult', url: string } };

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

export const FincodePaymentTable_PaymentsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FincodePaymentTable_payments"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FincodePayment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"processDate"}}]}}]} as unknown as DocumentNode<FincodePaymentTable_PaymentsFragment, unknown>;
export const FincodeTenantTable_TenantsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FincodeTenantTable_tenants"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FincodeTenant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"shopName"}},{"kind":"Field","name":{"kind":"Name","value":"created"}}]}}]} as unknown as DocumentNode<FincodeTenantTable_TenantsFragment, unknown>;
export const CreateStripeCheckoutSessionDialog_StripeAccountFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CreateStripeCheckoutSessionDialog_stripeAccount"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StripeAccount"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]} as unknown as DocumentNode<CreateStripeCheckoutSessionDialog_StripeAccountFragment, unknown>;
export const StripeAccountTable_StripeAccountsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StripeAccountTable_stripeAccounts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StripeAccount"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"chargesEnabled"}}]}}]} as unknown as DocumentNode<StripeAccountTable_StripeAccountsFragment, unknown>;
export const CreateStripeCheckoutSessionMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateStripeCheckoutSessionMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateStripeCheckoutSessionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createStripeCheckoutSession"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientSecret"}}]}}]}}]} as unknown as DocumentNode<CreateStripeCheckoutSessionMutationMutation, CreateStripeCheckoutSessionMutationMutationVariables>;
export const FincodePageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FincodePage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fincodeInviteUrl"}},{"kind":"Field","name":{"kind":"Name","value":"fincodeTenants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FincodeTenantTable_tenants"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FincodeTenantTable_tenants"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FincodeTenant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"shopName"}},{"kind":"Field","name":{"kind":"Name","value":"created"}}]}}]} as unknown as DocumentNode<FincodePageQuery, FincodePageQueryVariables>;
export const FincodeTenantDetailPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FincodeTenantDetailPage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fincodeTenant"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"shopName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fincodePayments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tenantId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FincodePaymentTable_payments"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FincodePaymentTable_payments"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FincodePayment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"processDate"}}]}}]} as unknown as DocumentNode<FincodeTenantDetailPageQuery, FincodeTenantDetailPageQueryVariables>;
export const CreateFincodePaymentSessionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateFincodePaymentSession"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateFincodePaymentSessionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createFincodePaymentSession"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<CreateFincodePaymentSessionMutation, CreateFincodePaymentSessionMutationVariables>;
export const StripePageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"StripePage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stripeAccounts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"StripeAccountTable_stripeAccounts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StripeAccountTable_stripeAccounts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StripeAccount"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"chargesEnabled"}}]}}]} as unknown as DocumentNode<StripePageQuery, StripePageQueryVariables>;
export const CreateStripeAccountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateStripeAccount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createStripeAccount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<CreateStripeAccountMutation, CreateStripeAccountMutationVariables>;
export const StripeAccountDetailPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"StripeAccountDetailPage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stripeAccount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CreateStripeCheckoutSessionDialog_stripeAccount"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CreateStripeCheckoutSessionDialog_stripeAccount"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StripeAccount"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]} as unknown as DocumentNode<StripeAccountDetailPageQuery, StripeAccountDetailPageQueryVariables>;
export const CreateStripeAccountSessionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateStripeAccountSession"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateStripeAccountSessionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createStripeAccountSession"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientSecret"}}]}}]}}]} as unknown as DocumentNode<CreateStripeAccountSessionMutation, CreateStripeAccountSessionMutationVariables>;
export const RefreshStripeAccountLinkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RefreshStripeAccountLink"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RefreshStripeAccountLinkInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"refreshStripeAccountLink"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<RefreshStripeAccountLinkMutation, RefreshStripeAccountLinkMutationVariables>;