<script>
	// @ts-nocheck

	import Releasecard from '../components/releasecard.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
	console.log(data);
</script>

<div
	class="bg-[url($lib/assets/optiksw-live/OptikSWLive1.webp)] bg-cover bg-center fixed w-full h-full"
/>
<div class="backdrop-blur-2xl backdrop-brightness-[22%]">
	<h1
		class="text-white text-center flex items-center justify-center h-[calc(100vh-4rem)] md:h-[calc(100vh-8rem)] text-5xl text-shadow-lg shadow-black"
	>
		Zu Spät Für Die Welle
	</h1>
	<div class="h-10" />
	<div class="flex flex-col items-center">
		<h2 class="text-white text-2xl text-shadow-lg shadow-black">Check out our latest release!</h2>
		<div class="max-w-xl">
			<Releasecard data={data.newestRelease} />
		</div>
	</div>
</div>
