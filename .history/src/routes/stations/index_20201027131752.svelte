<script context="module" lang="ts">
  import gql from 'graphql-tag';
  import { apolloClient } from '../../graphql/client';

  const STATIONS = gql`
    query allStations {
      stations(_size: 10) {
        data {
          _id
          name
          identifier
          description
          _ts
        }
      }
    }
  `;

  export async function preload() {
    return {
      cache: await apolloClient.query({ query: STATIONS })
    };
  }
</script>

<script lang="ts">
  import { restore, query } from 'svelte-apollo';

  export let cache;
  restore(apolloClient, STATIONS, cache.data);

  const stations = query(apolloClient, { query: STATIONS });
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