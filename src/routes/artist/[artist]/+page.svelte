<script>
	/** @type {import('./$types').PageData} */
	export let data;
	console.log(data.artist);
</script>

<div
	class="w-screen justify-center items-center grid grid-flow-row-dense h-[calc(100vh-8rem)] md:h-[calc(100vh-4rem)]"
>
	<div class="relative">
		<img
			src={'http://127.0.0.1:8090/api/files/' +
				data.artist.collectionId +
				'/' +
				data.artist.id +
				'/' +
				data.artist.Banner}
			class="absolute -z-20 h-[calc(100vh-8rem)] md:h-[calc(100vh-4rem)] w-screen object-cover object-top"
		/>
		<div
			class="h-[calc(100vh-8rem)] md:h-[calc(100vh-4rem)] w-screen flex justify-center items-center"
		>
			<h1 class="text-4xl text-center text-white text-shadow-lg shadow-black">
				{data.artist.Name}
			</h1>
		</div>
	</div>
	<div class=" p-8 text-white">
		<h1 class="text-4xl text-center text-white p-8 pt-0">Bio</h1>
		<p class="">{@html data.artist.Bio}</p>
	</div>
	<div class=" h-[calc(100vh-8rem)] md:h-[calc(100vh-4rem)] p-8 text-white">
		<h1 class="text-4xl text-center text-white p-8 pt-0">Releases</h1>
		<div class="w-scren">
			{#each data.artist.expand.Releases as release}
				<div class="p-8">
					<iframe
						src={release.SpotifyEmbed}
						width="100%"
						height="352"
						frameBorder="0"
						allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
						loading="lazy"
						class="w-full"
					/>
				</div>
			{/each}
		</div>
	</div>
</div>
