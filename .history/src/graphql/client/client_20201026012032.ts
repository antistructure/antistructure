import {
  ApolloClient,
  gql,
  NormalizedCacheObject
} from '@apollo/client';
import { cache } from './cache';

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  uri: 'http://localhost:3000/graphql'
});
