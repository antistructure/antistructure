<script>
  import { ApolloClient } from '@apollo/client';
  import { setClient } from 'svelte-apollo';

  const client = new ApolloClient({
    uri: 'http://localhost:3000/graphql',
  });

  setClient(client);
</script>
