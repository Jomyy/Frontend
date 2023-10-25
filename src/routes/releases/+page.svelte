<script>
	import Releasecard from '../../components/releasecard.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>Releases</title>
	<meta
		name="description"
		content="This is the releases page of Zu Spät Für Die Welle Records look through our catalog!"
	/>
</svelte:head>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4">
	{#each data.orderedReleases as release}
		<Releasecard data={release} />
	{/each}
</div>
