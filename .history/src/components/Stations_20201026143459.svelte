<script>
  import { error } from 'console';
import { stat } from 'fs';
import { query } from 'svelte-apollo';
import { dataset_dev } from 'svelte/internal';
  import { STATIONS } from './../graphql/client/queries/stations';

  const stations = query(STATIONS);
</script>

{#if $stat.loading}
  <p>Loading...</p>
{:else if $stations.error}
  <p>Error: {$stations.error.message}</p>
{:else}
  {#each $stations.data.stations as station}
    {station.name}
  {/each}
{/if}
