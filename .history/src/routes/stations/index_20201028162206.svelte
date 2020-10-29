<script context="module" lang="ts">
	import ApolloClient from 'apollo-boost';
	import gql from 'graphql-tag';

	const client = new ApolloClient({
			uri: 'https://graphql.fauna.com/graphql',
			headers: {
				authorization: 'Bearer fnAD5EULo8ACCVYLcTVhoNvL8-z2dO9HeBYw-7Si'
			}
		});

	export function preload() {
		const stations = client.query({
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
	}
</script>

<script lang="ts">
	// export let stations: { name: string; identifier: string, description: string }[];

</script>

<svelte:head>
	<title>Stations</title>
</svelte:head>

<h1>All Stations</h1>
