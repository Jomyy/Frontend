<script>
	import { apiURL } from '$lib';
	import AmazonMusicLogo from '$lib/assets/icons/amazon.webp';
	import SpotifyLogo from '$lib/assets/icons/spotify.webp';
	import AppleMusicLogo from '$lib/assets/icons/apple.webp';
	import DeezerLogo from '$lib/assets/icons/deezer.webp';
	import YTMusicLogo from '$lib/assets/icons/yt.webp';
	import Releasecard from '../../../components/releasecard.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>{data.artist.Name}</title>
	<meta
		name="description"
		content="Homepage of {data.artist.Name}"
	/>
</svelte:head>
<div
	class="w-screen justify-center items-center grid grid-flow-row-dense h-[calc(100vh-8rem)] md:h-[calc(100vh-4rem)]"
>
	<div class="relative">
		<img
			src={apiURL +
				'files/' +
				data.artist.collectionId +
				'/' +
				data.artist.id +
				'/' +
				data.artist.Banner}
			class="absolute -z-20 h-[calc(100vh-8rem)] md:h-[calc(100vh-4rem)] w-screen object-cover object-top"
			alt="artistbanner"
		/>
		<div
			class="h-[calc(100vh-8rem)] md:h-[calc(100vh-4rem)] w-screen flex justify-center items-center flex-col"
		>
			<h1 class="text-4xl text-center text-white text-shadow-lg shadow-black font-bold">
				{data.artist.Name}
			</h1>
			<div
				class="grid grid-cols-2 lg:grid-cols-5 p-4 justify-between items-center rounded-lg drop-shadow-lg"
			>
				<a href={data.artist.Spotify}
					><img
						src={SpotifyLogo}
						class="aspect-square h-20 p-4 saturate-0 brightness-150"
						alt="Spotify"
					/></a
				>
				<a href={data.artist.Deezer}
					><img
						src={DeezerLogo}
						class="aspect-square h-20 p-4 saturate-0 brightness-150"
						alt="Spotify"
					/></a
				>
				<a href={data.artist.Apple}
					><img
						src={AppleMusicLogo}
						class="aspect-square h-20 p-4 saturate-0 brightness-150"
						alt="Spotify"
					/></a
				>
				<a href={data.artist.Youtube}
					><img
						src={YTMusicLogo}
						class="aspect-square h-20 p-4 saturate-0 brightness-150"
						alt="Spotify"
					/></a
				>
				<a href={data.artist.Amazon}
					><img
						src={AmazonMusicLogo}
						class="aspect-square h-20 p-4 saturate-0 brightness-150"
						alt="Spotify"
					/></a
				>
			</div>
		</div>
	</div>
	<div class=" p-8 text-white">
		<h1 class="text-4xl text-center text-white p-8 pt-0 font-bold">Bio</h1>
		<p>{@html data.artist.Bio}</p>
	</div>
	<div class=" h-[calc(100vh-8rem)] md:h-[calc(100vh-4rem)] p-8 text-white">
		<h1 class="text-4xl text-center text-white p-8 pt-0 font-bold">Releases</h1>
		<div class="grid grid-cols-1 lg:grid-cols-4 p-2">
			{#each data.orderedReleases as release}
				<div class="p-2">
					<Releasecard data={release} />
					<!--<iframe
						src={release.SpotifyEmbed}
						width="100%"
						height="352"
						frameBorder="0"
						loading="lazy"
						allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
						class="w-full"
						title="miniplayer"
					/>
				-->
				</div>
			{/each}
		</div>
		<div class="h-11" />
	</div>
</div>
