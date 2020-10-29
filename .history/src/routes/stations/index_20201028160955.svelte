<script context="module" lang="ts">
	export function preload() {
		return this.fetch(`stations.json`).then((r: { json: () => any; }) => r.json()).then((stations: { name: string; identifier: string, description: string }[]) => {
			return { stations };
		});
	}
</script>

<script lang="ts">
	import ApolloClient from 'apollo-boost';
	import gql from 'graphql-tag';
	import { onMount } from 'svelte';

	export let stations: { name: string; identifier: string, description: string }[];

	onMount(() => {
		const client = new ApolloClient({
			uri: 'https://graphql.fauna.com/graphql',
			headers: {
				authorization: 'Bearer fnAD5EULo8ACCVYLcTVhoNvL8-z2dO9HeBYw-7Si'
			}
		});

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
		.then(res => console.log(JSON.stringify(res)));
	});

</script>

<svelte:head>
	<title>Stations</title>
</svelte:head>

<h1>All Stations</h1>
