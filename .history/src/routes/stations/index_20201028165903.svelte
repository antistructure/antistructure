<script context="module" lang="ts">
	export function preload() {
		return this.fetch(`stations.json`).then((r: { json: () => any; }) => r.json()).then((stations: { name: string; identifier: string, description: string }[]) => {
			return { stations };
		});
	}
</script>

<script lang="ts">
	import ApolloClient from 'apollo-boost';
	import { setClient } from 'svelte-apollo';
	import Stations from '../../components/Stations.svelte'

	const client = new ApolloClient({
		uri: 'https://graphql.fauna.com/graphql',
		headers: {
			'authorization': 'Bearer fnAD5EULo8ACCVYLcTVhoNvL8-z2dO9HeBYw-7Si',
			'content-type': 'application/json'
		}
	});

	setClient(client);

	// export let stations: { name: string; identifier: string, description: string }[];

</script>

<svelte:head>
	<title>Stations</title>
</svelte:head>

<h1>All Stations</h1>

<Stations/>
