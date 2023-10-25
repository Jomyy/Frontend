<script>
	import AmazonMusicLogo from '$lib/assets/icons/amazon.webp';
	import SpotifyLogo from '$lib/assets/icons/spotify.webp';
	import AppleMusicLogo from '$lib/assets/icons/apple.webp';
	import DeezerLogo from '$lib/assets/icons/deezer.webp';
	import YTMusicLogo from '$lib/assets/icons/yt.webp';

	import { apiURL } from '$lib';
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<meta property="og:title" content={data.release.Name} />
	<meta
		property="og:image"
		content={apiURL +
			'files/' +
			data.release.collectionId +
			'/' +
			data.release.id +
			'/' +
			data.release.Cover}
	/>
	<title>{data.release.Name}</title>
	<meta
		name="description"
		content="Sharelinks for {data.release.Name} by {data.release.expand.Artist[0].Name}"
	/>
</svelte:head>

<img
	src={apiURL +
		'files/' +
		data.release.collectionId +
		'/' +
		data.release.id +
		'/' +
		data.release.Cover}
	class="fixed w-full h-full -z-20 blur-2xl brightness-[25%]"
	alt="bg"
/>
<div class="flex flex-col">
	<div class="flex p-8 items-center justify-center flex-col lg:flex-row sm:justify-start">
		<img
			src={apiURL +
				'files/' +
				data.release.collectionId +
				'/' +
				data.release.id +
				'/' +
				data.release.Cover}
			class="aspect-square relative sm:h-80"
			alt="artistprofilepicture"
		/>
		<div
			class=" flex justify-center items-center flex-col lg:items-start p-8 lg:py-0 align-text-bottom lg:self-end font-sans"
		>
			<p class="text-4xl text-white font-bold">{data.release.Name}</p>
			{#each data.release.expand.Artist as artist}
				<a href="/artist/{artist.id}" class="text-xl text-gray-400 font-thin underline"
					>{artist.Name}</a
				>
			{/each}
		</div>
	</div>
	<div class=" p-4">
		<p class="text-white font-sans text-center text-2xl pb-4 font-bold">Available Now On:</p>
		<div
			class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 justify-center items-center justify-items-center"
		>
			<div class="p-4">
				<a
					class="flex flex-col p-8 rounded-xl w-min justify-center items-center aspect-square h-32 bg-black"
					href={data.release.Spotify}
					><div class="flex flex-col justify-center items-center">
						<img src={SpotifyLogo} class="aspect-square h-10 w-10 invert" alt="Spotify" />
						<p class="text-white font-sans text-center">Spotify</p>
					</div></a
				>
			</div>
			<div class="p-4">
				<a
					class="flex flex-col p-8 rounded-xl w-min justify-center items-center aspect-square h-32 bg-black"
					href={data.release.Apple}
					><div class="flex flex-col justify-center items-center">
						<img src={AppleMusicLogo} class="aspect-square h-10 w-10 invert" alt="Apple" />
						<p class="text-white font-sans text-center">Apple</p>
					</div></a
				>
			</div>
			<div class="p-4">
				<a
					class="flex flex-col p-8 rounded-xl w-min justify-center items-center aspect-square h-32 bg-black"
					href={data.release.Amazon}
					><div class="flex flex-col justify-center items-center">
						<img src={AmazonMusicLogo} class="aspect-square h-10 w-10 invert" alt="Amazon" />
						<p class="text-white font-sans text-center">Amazon</p>
					</div></a
				>
			</div>
			<div class="p-4">
				<a
					class="flex flex-col p-8 rounded-xl w-min justify-center items-center aspect-square h-32 bg-black"
					href={data.release.Deezer}
					><div class="flex flex-col justify-center items-center">
						<img src={DeezerLogo} class="aspect-square h-10 w-10 invert" alt="Deezer" />
						<p class="text-white font-sans text-center">Deezer</p>
					</div></a
				>
			</div>
			<div class="p-4">
				<a
					class="flex flex-col p-4 rounded-xl w-min justify-center items-center aspect-square h-32 bg-black"
					href={data.release.Youtube}
					><div class="flex flex-col justify-center items-center">
						<img src={YTMusicLogo} class="aspect-square h-10 w-10 invert" alt="YTMusic" />
						<p class="text-white font-sans text-center">YTMusic</p>
					</div></a
				>
			</div>
		</div>
	</div>
</div>
