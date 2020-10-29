<script context="module" lang="ts">
  export async function preload({ params }) {
    const res = await this.fetch(`stations/${params.name}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { station: data };
    }
    else {
      this.error(res.status, data.message);
    }
  }
</script>

<script lang="ts">
  export let station: { name: string }
</script>

<svelte:head>
	<title>{station.name}</title>
</svelte:head>

<h1>{station.name}</h1>
