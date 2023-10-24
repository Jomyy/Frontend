<script>
	import Artistcard from '../../components/artistcard.svelte';
	import optikswlive from '$lib/assets/optiksw-live/OptikSWLive1.webp';
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div
	class="bg-[url($lib/assets/optiksw-live/OptikSWLive1.webp)] bg-cover bg-center fixed w-full h-full blur-2xl brightness-[22%]"
/>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4">
	{#each data.artists.items as artist}
		<Artistcard data={artist} />
	{/each}
</div>
