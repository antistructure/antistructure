<script>
  import { getClient, query } from 'svelte-apollo'; 
import { dataset_dev } from 'svelte/internal';
  import { ALL_STATIONS } from '../graphql/queries';

  const client = getClient();

  const stations = query(client, { query: ALL_STATIONS });
</script>

<div>
  {#await $stations}
    <p>Loading stations...</p>
  {:then result}
    {#each result.data.stations as station}
      <h1>{station.name} ({station.identifier})</h1>

      <p>{station.description}</p>
    {/each}
  {:catch error}
    <p>Error: {error}</p>
  {/await}
</div>