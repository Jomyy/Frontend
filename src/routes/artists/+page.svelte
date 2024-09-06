<script>
	import Artistcard from '../../components/artistcard.svelte';
	import optikswlive from '$lib/assets/optiksw-live/OptikSWLive1.webp';
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>Artists</title>
	<meta
		name="description"
		content="Browse through the catalog of artists in Zu Spät Für Die Welle"
	/>
</svelte:head>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4">
	{#each data.artists.items as artist}
		<Artistcard data={artist} />
	{/each}
</div>
