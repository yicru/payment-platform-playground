import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type GqlCreateFincodePaymentSessionInput = {
  tenantId: Scalars['ID']['input'];
};

export type GqlCreateFincodePaymentSessionResult = {
  __typename?: 'CreateFincodePaymentSessionResult';
  url: Scalars['String']['output'];
};

export type GqlCreateStripeAccountResult = {
  __typename?: 'CreateStripeAccountResult';
  url: Scalars['String']['output'];
};

export type GqlCreateStripeAccountSessionInput = {
  accountId: Scalars['ID']['input'];
};

export type GqlCreateStripeAccountSessionResult = {
  __typename?: 'CreateStripeAccountSessionResult';
  clientSecret: Scalars['String']['output'];
};

export type GqlCreateStripeCheckoutSessionInput = {
  accountId: Scalars['ID']['input'];
};

export type GqlCreateStripeCheckoutSessionResult = {
  __typename?: 'CreateStripeCheckoutSessionResult';
  clientSecret: Scalars['String']['output'];
};

export type GqlFincodePayment = {
  __typename?: 'FincodePayment';
  amount?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  processDate: Scalars['String']['output'];
  status: Scalars['String']['output'];
};

export type GqlFincodeTenant = {
  __typename?: 'FincodeTenant';
  created: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  shopName: Scalars['String']['output'];
};

export type GqlMutation = {
  __typename?: 'Mutation';
  createFincodePaymentSession: GqlCreateFincodePaymentSessionResult;
  createStripeAccount: GqlCreateStripeAccountResult;
  createStripeAccountSession: GqlCreateStripeAccountSessionResult;
  createStripeCheckoutSession: GqlCreateStripeCheckoutSessionResult;
  refreshStripeAccountLink: GqlRefreshStripeAccountLinkResult;
};


export type GqlMutationCreateFincodePaymentSessionArgs = {
  input: GqlCreateFincodePaymentSessionInput;
};


export type GqlMutationCreateStripeAccountSessionArgs = {
  input: GqlCreateStripeAccountSessionInput;
};


export type GqlMutationCreateStripeCheckoutSessionArgs = {
  input: GqlCreateStripeCheckoutSessionInput;
};


export type GqlMutationRefreshStripeAccountLinkArgs = {
  input: GqlRefreshStripeAccountLinkInput;
};

export type GqlQuery = {
  __typename?: 'Query';
  fincodeInviteUrl: Scalars['String']['output'];
  fincodePayments: Array<GqlFincodePayment>;
  fincodeTenant?: Maybe<GqlFincodeTenant>;
  fincodeTenants: Array<GqlFincodeTenant>;
  stripeAccount?: Maybe<GqlStripeAccount>;
  stripeAccounts: Array<GqlStripeAccount>;
};


export type GqlQueryFincodePaymentsArgs = {
  tenantId: Scalars['ID']['input'];
};


export type GqlQueryFincodeTenantArgs = {
  id: Scalars['ID']['input'];
};


export type GqlQueryStripeAccountArgs = {
  id: Scalars['ID']['input'];
};

export type GqlRefreshStripeAccountLinkInput = {
  accountId: Scalars['ID']['input'];
};

export type GqlRefreshStripeAccountLinkResult = {
  __typename?: 'RefreshStripeAccountLinkResult';
  url: Scalars['String']['output'];
};

export type GqlStripeAccount = {
  __typename?: 'StripeAccount';
  chargesEnabled: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type GqlResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CreateFincodePaymentSessionInput: GqlCreateFincodePaymentSessionInput;
  CreateFincodePaymentSessionResult: ResolverTypeWrapper<GqlCreateFincodePaymentSessionResult>;
  CreateStripeAccountResult: ResolverTypeWrapper<GqlCreateStripeAccountResult>;
  CreateStripeAccountSessionInput: GqlCreateStripeAccountSessionInput;
  CreateStripeAccountSessionResult: ResolverTypeWrapper<GqlCreateStripeAccountSessionResult>;
  CreateStripeCheckoutSessionInput: GqlCreateStripeCheckoutSessionInput;
  CreateStripeCheckoutSessionResult: ResolverTypeWrapper<GqlCreateStripeCheckoutSessionResult>;
  FincodePayment: ResolverTypeWrapper<GqlFincodePayment>;
  FincodeTenant: ResolverTypeWrapper<GqlFincodeTenant>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  RefreshStripeAccountLinkInput: GqlRefreshStripeAccountLinkInput;
  RefreshStripeAccountLinkResult: ResolverTypeWrapper<GqlRefreshStripeAccountLinkResult>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  StripeAccount: ResolverTypeWrapper<GqlStripeAccount>;
};

/** Mapping between all available schema types and the resolvers parents */
export type GqlResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  CreateFincodePaymentSessionInput: GqlCreateFincodePaymentSessionInput;
  CreateFincodePaymentSessionResult: GqlCreateFincodePaymentSessionResult;
  CreateStripeAccountResult: GqlCreateStripeAccountResult;
  CreateStripeAccountSessionInput: GqlCreateStripeAccountSessionInput;
  CreateStripeAccountSessionResult: GqlCreateStripeAccountSessionResult;
  CreateStripeCheckoutSessionInput: GqlCreateStripeCheckoutSessionInput;
  CreateStripeCheckoutSessionResult: GqlCreateStripeCheckoutSessionResult;
  FincodePayment: GqlFincodePayment;
  FincodeTenant: GqlFincodeTenant;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Mutation: {};
  Query: {};
  RefreshStripeAccountLinkInput: GqlRefreshStripeAccountLinkInput;
  RefreshStripeAccountLinkResult: GqlRefreshStripeAccountLinkResult;
  String: Scalars['String']['output'];
  StripeAccount: GqlStripeAccount;
};

export type GqlCreateFincodePaymentSessionResultResolvers<ContextType = any, ParentType extends GqlResolversParentTypes['CreateFincodePaymentSessionResult'] = GqlResolversParentTypes['CreateFincodePaymentSessionResult']> = {
  url?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GqlCreateStripeAccountResultResolvers<ContextType = any, ParentType extends GqlResolversParentTypes['CreateStripeAccountResult'] = GqlResolversParentTypes['CreateStripeAccountResult']> = {
  url?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GqlCreateStripeAccountSessionResultResolvers<ContextType = any, ParentType extends GqlResolversParentTypes['CreateStripeAccountSessionResult'] = GqlResolversParentTypes['CreateStripeAccountSessionResult']> = {
  clientSecret?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GqlCreateStripeCheckoutSessionResultResolvers<ContextType = any, ParentType extends GqlResolversParentTypes['CreateStripeCheckoutSessionResult'] = GqlResolversParentTypes['CreateStripeCheckoutSessionResult']> = {
  clientSecret?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GqlFincodePaymentResolvers<ContextType = any, ParentType extends GqlResolversParentTypes['FincodePayment'] = GqlResolversParentTypes['FincodePayment']> = {
  amount?: Resolver<Maybe<GqlResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<GqlResolversTypes['ID'], ParentType, ContextType>;
  processDate?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GqlFincodeTenantResolvers<ContextType = any, ParentType extends GqlResolversParentTypes['FincodeTenant'] = GqlResolversParentTypes['FincodeTenant']> = {
  created?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<GqlResolversTypes['ID'], ParentType, ContextType>;
  shopName?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GqlMutationResolvers<ContextType = any, ParentType extends GqlResolversParentTypes['Mutation'] = GqlResolversParentTypes['Mutation']> = {
  createFincodePaymentSession?: Resolver<GqlResolversTypes['CreateFincodePaymentSessionResult'], ParentType, ContextType, RequireFields<GqlMutationCreateFincodePaymentSessionArgs, 'input'>>;
  createStripeAccount?: Resolver<GqlResolversTypes['CreateStripeAccountResult'], ParentType, ContextType>;
  createStripeAccountSession?: Resolver<GqlResolversTypes['CreateStripeAccountSessionResult'], ParentType, ContextType, RequireFields<GqlMutationCreateStripeAccountSessionArgs, 'input'>>;
  createStripeCheckoutSession?: Resolver<GqlResolversTypes['CreateStripeCheckoutSessionResult'], ParentType, ContextType, RequireFields<GqlMutationCreateStripeCheckoutSessionArgs, 'input'>>;
  refreshStripeAccountLink?: Resolver<GqlResolversTypes['RefreshStripeAccountLinkResult'], ParentType, ContextType, RequireFields<GqlMutationRefreshStripeAccountLinkArgs, 'input'>>;
};

export type GqlQueryResolvers<ContextType = any, ParentType extends GqlResolversParentTypes['Query'] = GqlResolversParentTypes['Query']> = {
  fincodeInviteUrl?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  fincodePayments?: Resolver<Array<GqlResolversTypes['FincodePayment']>, ParentType, ContextType, RequireFields<GqlQueryFincodePaymentsArgs, 'tenantId'>>;
  fincodeTenant?: Resolver<Maybe<GqlResolversTypes['FincodeTenant']>, ParentType, ContextType, RequireFields<GqlQueryFincodeTenantArgs, 'id'>>;
  fincodeTenants?: Resolver<Array<GqlResolversTypes['FincodeTenant']>, ParentType, ContextType>;
  stripeAccount?: Resolver<Maybe<GqlResolversTypes['StripeAccount']>, ParentType, ContextType, RequireFields<GqlQueryStripeAccountArgs, 'id'>>;
  stripeAccounts?: Resolver<Array<GqlResolversTypes['StripeAccount']>, ParentType, ContextType>;
};

export type GqlRefreshStripeAccountLinkResultResolvers<ContextType = any, ParentType extends GqlResolversParentTypes['RefreshStripeAccountLinkResult'] = GqlResolversParentTypes['RefreshStripeAccountLinkResult']> = {
  url?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GqlStripeAccountResolvers<ContextType = any, ParentType extends GqlResolversParentTypes['StripeAccount'] = GqlResolversParentTypes['StripeAccount']> = {
  chargesEnabled?: Resolver<GqlResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<GqlResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GqlResolvers<ContextType = any> = {
  CreateFincodePaymentSessionResult?: GqlCreateFincodePaymentSessionResultResolvers<ContextType>;
  CreateStripeAccountResult?: GqlCreateStripeAccountResultResolvers<ContextType>;
  CreateStripeAccountSessionResult?: GqlCreateStripeAccountSessionResultResolvers<ContextType>;
  CreateStripeCheckoutSessionResult?: GqlCreateStripeCheckoutSessionResultResolvers<ContextType>;
  FincodePayment?: GqlFincodePaymentResolvers<ContextType>;
  FincodeTenant?: GqlFincodeTenantResolvers<ContextType>;
  Mutation?: GqlMutationResolvers<ContextType>;
  Query?: GqlQueryResolvers<ContextType>;
  RefreshStripeAccountLinkResult?: GqlRefreshStripeAccountLinkResultResolvers<ContextType>;
  StripeAccount?: GqlStripeAccountResolvers<ContextType>;
};

