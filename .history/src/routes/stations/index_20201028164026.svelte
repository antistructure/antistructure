<script context="module" lang="ts">
	export function preload() {
		return this.fetch(`stations.json`).then(res => res.json()).then((stations: { id: number, name: string; ts: number }[]) => {
			return { stations };
		});
	}
</script>

<script lang="ts">

	export let stations: { id: number, name: string; ts: number }[];

	console.log(stations);

</script>

<svelte:head>
	<title>Stations</title>
</svelte:head>

<h1>All Stations</h1>
