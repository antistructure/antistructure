<script lang="ts">
	import { ALL_STATIONS } from '../graphql/queries';
  import { getClient, query } from 'svelte-apollo';

  const client = getClient();

  const stations = query(client, { query: ALL_STATIONS });
</script>

<div>
{#await $stations}
  <p>Loading...</p>
{:then res}
  {#each res.data.stations as station}
    <h2>{station.name}</h2>
  {/each}
{:catch err}
  <p>Error: {err}</p>
{/await}
</div>