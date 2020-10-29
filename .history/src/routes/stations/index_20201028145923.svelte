<script context="module" lang="ts">
	export function preload() {
		this.fetch(`https://graphql.fauna.com/graphql`, {
    headers: {
      'authorization': 'Bearer fnAD5EULo8ACCVYLcTVhoNvL8-z2dO9HeBYw-7Si',
    }
  })
  .then(response => response.json())
  .then(data => console.log(data))
	.catch(error => console.log(error));
	
		return this.fetch(`stations.json`).then((r: { json: () => any; }) => r.json()).then((stations: { name: string; identifier: string, description: string }[]) => {
			return { stations };
		});
	}
</script>

<script lang="ts">
	export let stations: { name: string; identifier: string, description: string }[];
	console.log(stations);
</script>

<svelte:head>
	<title>Stations</title>
</svelte:head>

<h1>All Stations</h1>
