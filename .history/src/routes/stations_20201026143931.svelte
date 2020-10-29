<script>
  import { ApolloClient } from '@apollo/client';
  import { setClient } from 'svelte-apollo';

  import Stations from '../components/Stations.svelte';

  const client = new ApolloClient({
    uri: 'http://localhost:3000/graphql',
  });

  setClient(client);
</script>

<h1>All Stations</h1>

<Stations/>