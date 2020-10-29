<script context="module" lang="ts">
  import faunadb, { query as q } from 'faunadb';
  import { from } from 'rxjs';
  import { map } from 'rxjs/operators';

  const dbClient = new faunadb.Client({ 
    secret: 'fnAD5EULo8ACCVYLcTVhoNvL8-z2dO9HeBYw-7Si' 
  });

  export async function preload() {
    return {
      cache: await dbClient.query(
        q.Map(
          q.Paginate(q.Match(q.Index('stations'))), 
          q.Lambda(x => q.Get(x))
        )
      )
    };
  }
</script>

<script lang="ts">
  import { restore, query } from 'svelte-apollo';

  export let cache;

  const stations = cache.data;
</script>

<svelte:head>
	<title>Stations</title>
</svelte:head>

<h1>All Stations</h1>

<div>
  {#await $stations}
  <li>Loading...</li>
{:then result}
  {#each result.data.stations as station (station.id)}
    <li>{station.name}</li>
  {:else}
    <li>No stations found</li>
  {/each}
{:catch error}
  <li>Error loading stations: {error}</li>
{/await}
</div>