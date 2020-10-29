import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { WebSocketLink } from "apollo-link-ws";
import { split } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import { getMainDefinition } from "apollo-utilities";

// { 'Authorization': 'Bearer fnAD5EULo8ACCVYLcTVhoNvL8-z2dO9HeBYw-7Si' }
const wsLink = new WebSocketLink({
  uri: 'ws://localhost:3000/graphql',
  options: {
    reconnect: true,
    lazy: true,
    connectionParams: () => {
      return { headers: { 'content-type': 'application/json' } };
    }
  }
});

const httpLink = new HttpLink({
  uri: 'http://localhost:3000/graphql',
  headers: {
    'content-type': 'application/json'
  }
});

const link = split(({ query }) => {
  const { kind, operation } = getMainDefinition(query);
  return kind === "OperationDefinition" && operation === "subscription";
},
  wsLink,
  httpLink
);

export const apolloClient = new ApolloClient({
  link,
  cache: new InMemoryCache()
});

// import ApolloClient from 'apollo-boost';
// import gql from 'graphql-tag';
// import fetch from 'node-fetch';

// const graphQLClient = new ApolloClient({
//   uri: 'https://graphql.fauna.com/graphql',
//   fetch,
  
// })
