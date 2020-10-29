<script context="module" lang="ts">
	export function preload() {
		return this.fetch(`stations.json`).then((r: { json: () => any; }) => r.json()).then((stations: { name: string; identifier: string, description: string }[]) => {
			return { stations };
		});
	}
</script>

<script lang="ts">
	import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
	import { onMount } from 'svelte';

	const client = new ApolloClient({
		uri: 'https://graphql.fauna.com/graphql',
		headers: {
			authorization: 'Bearer fnAD5EULo8ACCVYLcTVhoNvL8-z2dO9HeBYw-7Si'
		},
		cache: new InMemoryCache()
	});
	// export let stations: { name: string; identifier: string, description: string }[];

	onMount(() => {

		client.query({
			query: gql`
				query allStations {
					stations(_size: 10) {
						data {
							_id
							name
							_ts
						}
					}
				}
			`
		})
		.then(res => res.data.stations.data.map(station => console.log({
			id: station._id,
			name: station.name,
			identifier: station.identifier,
			description: station.description
		})));
	});

</script>

<svelte:head>
	<title>Stations</title>
</svelte:head>

<h1>All Stations</h1>
