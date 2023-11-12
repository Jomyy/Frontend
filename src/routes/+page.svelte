<script>
	// @ts-nocheck

	import Releasecard from '../components/releasecard.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>Home</title>
	<meta
		name="description"
		content="Welcome to the homepage of Zu Spät Für Die Welle Records, Here You can find our newest release and events"
	/>
</svelte:head>
<div
	class="bg-[url($lib/assets/optiksw-live/OptikSWLive1.webp)] bg-cover bg-center fixed w-full h-full blur-2xl brightness-[22%] -z-30"
/>

<div class="pt-10">
	<div class="flex flex-col items-center">
		<h2 class="text-white text-2xl">Our latest release!</h2>
		<div class="max-w-xl px-14">
			<Releasecard data={data.newestRelease} />
		</div>
		<a href="/releases" class="text-gray-50">See all...</a>
		<div class="h-3" />
	</div>
	<div class="flex flex-col items-center">
		<h2 class="text-white text-2xl">Check out our playlist!</h2>
		<div class="h-3" />
		<iframe
			title="SpotifyPlaylist"
			style="border-radius:12px"
			src="https://open.spotify.com/embed/playlist/3iTp2tGt3fLeKBWomYVfXn?utm_source=generator"
			width="100%"
			height="352"
			frameBorder="0"
			allowfullscreen=""
			allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
			loading="lazy"
			class="px-20"
		/>
	</div>
	<div class="h-3" />
	<div class="flex flex-col items-center">
		<h2 class="text-white text-2xl">Upcoming events</h2>
		<div />
	</div>
	<div class="flex flex-col items-center text-white p-10">
		<h2 class="text-white text-2xl">About us</h2>
		<div class="h-3" />
		<div class="max-w-md">
			<p>
				We are an independent record label featuring all kinds of alternative music genres, be it
				new wave, post-punk, or folk-punk.
			</p>
			<p>
				Est. 2023 originally as a first party label for <a href="/artist/wftg0i4y24dkbfy"
					>Optik SW</a
				>, <a href="/artist/5ath44igcllx9a9">Jonny</a>,
				<a href="/artist/et56bawolb95r13">DYNAMIK</a>
				and
				<a href="/artist/vipd4yr1j3n88i9">Weather Forecast</a>, we now strive to constantly improve
				our catalog and discover new artists.
			</p>
		</div>

		<div />
	</div>
</div>
