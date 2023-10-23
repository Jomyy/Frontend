<script>
	import Artistcard from '../../components/artistcard.svelte';
	import optikswlive from '$lib/assets/optiksw-live/OptikSWLive1.webp';
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<img src={optikswlive} class="fixed w-full h-full blur-2xl -z-40 brightness-[25%]" alt="bg" />

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4">
	{#each data.artists.items as artist}
		<Artistcard data={artist} />
	{/each}
</div>
