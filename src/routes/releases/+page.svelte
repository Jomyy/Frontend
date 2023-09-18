<script>
	import Releasecard from '../../components/releasecard.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4 bg-neutral-800">
	{#each data.releases.items as release}
		<Releasecard data={release} />
	{/each}
</div>
