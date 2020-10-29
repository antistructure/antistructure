<script>
  import ApolloClient from 'apollo-boost';
  import { setClient } from 'svelte-apollo';
  import fetch from 'node-fetch';

  import Stations from '../../components/Stations.svelte';

  const client = new ApolloClient({ 
    uri: 'https://graphql.fauna.com/graphql',
    fetch,
    headers: {
      authorization: `Bearer fnAD5EULo8ACCVYLcTVhoNvL8-z2dO9HeBYw-7Si`
    }
  });

  setClient(client);
</script>

<Stations/>