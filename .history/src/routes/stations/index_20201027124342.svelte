<script>
  import { ApolloClient } from 'apollo-client';
  import { InMemoryCache } from 'apollo-cache-inmemory';
  import { split } from 'apollo-link';
  import { HttpLink } from 'apollo-link-http';
  import { WebSocketLink } from 'apollo-link-ws';
  import { getMainDefinition } from 'apollo-utilities';

  import { setClient } from 'svelte-apollo';
  import fetch from 'node-fetch';

  import Stations from '../../components/Stations.svelte';

  const link = new HttpLink({
    uri: 'https://graphql.fauna.com/graphql',
    fetch,
    headers: {
      authorization: `Bearer fnAD5EULo8ACCVYLcTVhoNvL8-z2dO9HeBYw-7Si`
    }
  })

  const client = new ApolloClient({ link, cache: new InMemoryCache() });

  setClient(client);
</script>

<Stations/>