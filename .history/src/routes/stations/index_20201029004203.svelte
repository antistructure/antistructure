<script lang="ts">
	import ApolloClient from 'apollo-boost';
	import gql from 'graphql-tag';
	import { onMount } from 'svelte';

	export let stations;

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
		.then(res => {
			console.log(res);
			stations = JSON.stringify(
				res.data.stations.map(station => {
					console.log(station);
					return { station }
				})
			);
		});
	});

</script>

<svelte:head>
	<title>Stations</title>
</svelte:head>

<h1>All Stations</h1>

<!-- <div>
	{#await stations}
		<p>Loading...</p>
	{:then res}
		{#each res.data.stations as station}
			<h2>{station.name}</h2>
		{/each}
	{:catch err}
		<p>Error: {err}</p>
	{/await}
	</div> -->
