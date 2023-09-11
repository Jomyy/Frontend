<script>
	import Artistcard from '../../components/artistcard.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
	console.log(data.artists.items);
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4">
	{#each data.artists.items as artist}
		<Artistcard data={artist} />
	{/each}
</div>
