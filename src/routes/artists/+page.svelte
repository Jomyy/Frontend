<script>
	import Artistcard from '../../components/artistcard.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
	console.log(data.artists.items);
</script>

<div
	class="bg-[url($lib/assets/optiksw-live/OptikSWLive1.webp)] bg-cover bg-center fixed w-full h-full"
/>
<div
	class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4 backdrop-blur-2xl backdrop-brightness-[22%] w-screen h-screen"
>
	{#each data.artists.items as artist}
		<Artistcard data={artist} />
	{/each}
</div>
