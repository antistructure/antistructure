import { ApolloClient } from '@apollo/client';
import { gql } from 'apollo-server-express';

const cache = new InMemoryCache();

const link = new HttpLink({
  uri: 'https://graphql.fauna.com/graphql',
  fetch,
});

export const client = new ApolloClient({
  cache,
  link
  // uri: 'http://localhost:3000/graphql'
});
