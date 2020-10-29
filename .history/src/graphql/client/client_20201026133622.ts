import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost';
import fetch from 'node-fetch';

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
