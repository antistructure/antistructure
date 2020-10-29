<script>
  import { query } from 'svelte-apollo';
  import { STATIONS } from './../graphql/client/queries/stations';

  const stations = query(STATIONS);
</script>

{#if $stations.loading}
  <p>Loading...</p>
{:else if $stations.error}
  <p>Error: {$stations.error.message}</p>
{:else}
  {#each $stations.data.stations as station}
    {station.name}
  {/each}
{/if}
