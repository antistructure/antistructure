import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import fetch from 'node-fetch';

const graphQLClient = new ApolloClient({
  uri: 'https://graphql.fauna.com/graphql',
  fetch,
  
})
