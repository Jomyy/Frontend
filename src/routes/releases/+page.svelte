<script>
	import Releasecard from '../../components/releasecard.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div
	class="bg-[url($lib/assets/optiksw-live/OptikSWLive1.webp)] bg-cover bg-center fixed w-full h-full"
/>
<div
	class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4 backdrop-blur-2xl backdrop-brightness-[22%]"
>
	{#each data.releases.items as release}
		<Releasecard data={release} />
	{/each}
</div>
