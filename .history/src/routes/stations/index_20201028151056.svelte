<script context="module" lang="ts">
	export function preload() {
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
