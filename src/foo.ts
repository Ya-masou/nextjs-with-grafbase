import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  todoCreate?: Maybe<TodoCreatePayload>;
  todoDelete?: Maybe<TodoDeletePayload>;
  todoListCreate?: Maybe<TodoListCreatePayload>;
  todoListDelete?: Maybe<TodoListDeletePayload>;
  todoListUpdate?: Maybe<TodoListUpdatePayload>;
  todoUpdate?: Maybe<TodoUpdatePayload>;
  userCreate?: Maybe<UserCreatePayload>;
  userDelete?: Maybe<UserDeletePayload>;
  userUpdate?: Maybe<UserUpdatePayload>;
};


export type MutationTodoCreateArgs = {
  input: TodoCreateInput;
};


export type MutationTodoDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationTodoListCreateArgs = {
  input: TodoListCreateInput;
};


export type MutationTodoListDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationTodoListUpdateArgs = {
  id: Scalars['ID'];
  input: TodoListUpdateInput;
};


export type MutationTodoUpdateArgs = {
  id: Scalars['ID'];
  input: TodoUpdateInput;
};


export type MutationUserCreateArgs = {
  input: UserCreateInput;
};


export type MutationUserDeleteArgs = {
  id: Scalars['ID'];
};


export type MutationUserUpdateArgs = {
  id: Scalars['ID'];
  input: UserUpdateInput;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  todo?: Maybe<Todo>;
  todoCollection?: Maybe<TodoConnection>;
  todoList?: Maybe<TodoList>;
  todoListCollection?: Maybe<TodoListConnection>;
  user?: Maybe<User>;
  userCollection?: Maybe<UserConnection>;
};


export type QueryTodoArgs = {
  id: Scalars['ID'];
};


export type QueryTodoCollectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryTodoListArgs = {
  id: Scalars['ID'];
};


export type QueryTodoListCollectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUserCollectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type Todo = {
  __typename?: 'Todo';
  complete: Scalars['Boolean'];
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type TodoConnection = {
  __typename?: 'TodoConnection';
  edges?: Maybe<Array<Maybe<TodoEdge>>>;
  pageInfo: PageInfo;
};

export type TodoCreateInput = {
  complete: Scalars['Boolean'];
  title: Scalars['String'];
};

export type TodoCreatePayload = {
  __typename?: 'TodoCreatePayload';
  todo?: Maybe<Todo>;
};

export type TodoDeletePayload = {
  __typename?: 'TodoDeletePayload';
  deletedId: Scalars['ID'];
};

export type TodoEdge = {
  __typename?: 'TodoEdge';
  cursor: Scalars['String'];
  node: Todo;
};

export type TodoList = {
  __typename?: 'TodoList';
  id: Scalars['ID'];
  title: Scalars['String'];
  todos?: Maybe<Array<Maybe<Todo>>>;
};

export type TodoListConnection = {
  __typename?: 'TodoListConnection';
  edges?: Maybe<Array<Maybe<TodoListEdge>>>;
  pageInfo: PageInfo;
};

export type TodoListCreateInput = {
  title: Scalars['String'];
  todos?: InputMaybe<Array<InputMaybe<TodoListTodoRelateTodoListTodoCreateRelationInput>>>;
};

export type TodoListCreatePayload = {
  __typename?: 'TodoListCreatePayload';
  todoList?: Maybe<TodoList>;
};

export type TodoListDeletePayload = {
  __typename?: 'TodoListDeletePayload';
  deletedId: Scalars['ID'];
};

export type TodoListEdge = {
  __typename?: 'TodoListEdge';
  cursor: Scalars['String'];
  node: TodoList;
};

export type TodoListTodoRelateTodoListTodoCreateInput = {
  complete: Scalars['Boolean'];
  title: Scalars['String'];
};

export type TodoListTodoRelateTodoListTodoCreateRelationInput = {
  create?: InputMaybe<TodoListTodoRelateTodoListTodoCreateInput>;
  link?: InputMaybe<Scalars['ID']>;
};

export type TodoListTodoRelateTodoListTodoUpdateRelationInput = {
  create?: InputMaybe<TodoListTodoRelateTodoListTodoCreateInput>;
  link?: InputMaybe<Scalars['ID']>;
  unlink?: InputMaybe<Scalars['ID']>;
};

export type TodoListUpdateInput = {
  title?: InputMaybe<Scalars['String']>;
  todos?: InputMaybe<Array<InputMaybe<TodoListTodoRelateTodoListTodoUpdateRelationInput>>>;
};

export type TodoListUpdatePayload = {
  __typename?: 'TodoListUpdatePayload';
  todoList?: Maybe<TodoList>;
};

export type TodoUpdateInput = {
  complete?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
};

export type TodoUpdatePayload = {
  __typename?: 'TodoUpdatePayload';
  todo?: Maybe<Todo>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  name: Scalars['String'];
  todoLists?: Maybe<Array<Maybe<TodoList>>>;
};

export type UserConnection = {
  __typename?: 'UserConnection';
  edges?: Maybe<Array<Maybe<UserEdge>>>;
  pageInfo: PageInfo;
};

export type UserCreateInput = {
  name: Scalars['String'];
  todoLists?: InputMaybe<Array<InputMaybe<UserTodoListRelateUserTodoListCreateRelationInput>>>;
};

export type UserCreatePayload = {
  __typename?: 'UserCreatePayload';
  user?: Maybe<User>;
};

export type UserDeletePayload = {
  __typename?: 'UserDeletePayload';
  deletedId: Scalars['ID'];
};

export type UserEdge = {
  __typename?: 'UserEdge';
  cursor: Scalars['String'];
  node: User;
};

export type UserTodoListRelateUserTodoListCreateInput = {
  title: Scalars['String'];
  todos?: InputMaybe<Array<InputMaybe<TodoListTodoRelateTodoListTodoCreateInput>>>;
};

export type UserTodoListRelateUserTodoListCreateRelationInput = {
  create?: InputMaybe<UserTodoListRelateUserTodoListCreateInput>;
  link?: InputMaybe<Scalars['ID']>;
};

export type UserTodoListRelateUserTodoListUpdateRelationInput = {
  create?: InputMaybe<UserTodoListRelateUserTodoListCreateInput>;
  link?: InputMaybe<Scalars['ID']>;
  unlink?: InputMaybe<Scalars['ID']>;
};

export type UserUpdateInput = {
  name?: InputMaybe<Scalars['String']>;
  todoLists?: InputMaybe<Array<InputMaybe<UserTodoListRelateUserTodoListUpdateRelationInput>>>;
};

export type UserUpdatePayload = {
  __typename?: 'UserUpdatePayload';
  user?: Maybe<User>;
};

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', userCollection?: { __typename?: 'UserConnection', edges?: Array<{ __typename?: 'UserEdge', node: { __typename?: 'User', id: string, name: string } } | null> | null } | null };


export const UsersDocument = gql`
    query users {
  userCollection(first: 10) {
    edges {
      node {
        id
        name
      }
    }
  }
}
    `;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
      }
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;