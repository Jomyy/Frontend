<script>
	import '../app.css'
	import hamburgericon from '$lib/assets/icons/menuopen.svg';
	import menucloseicon from '$lib/assets/icons/menuclose.svg';
	import logo from '$lib/assets/brand/logo_01.png'
	let navOpen = false;
	function changeNav() {
		navOpen = !navOpen
	}
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	inject({ mode: dev ? 'development' : 'production' });
</script>

<div
	class="bg-[url($lib/assets/optiksw-live/OptikSWLive1.webp)] bg-cover bg-center fixed w-screen h-screen blur-2xl brightness-[22%] -z-30"
/>
<nav
	class="bg-black fixed w-screen text-white text-center h-20 m-0 p-0 font-sans z-50 hidden md:flex no-underline font-thin"
>
	<ul class="list-none flex flex-row h-20 w-screen align-middle m-0 p-0 justify-evenly">
		<li class="w-full h-full">
			<a href="/" class="flex justify-center items-center w-full h-full no-underline p-5 ">
				<img src={logo} alt="logo" class="h-full w-full invert object-contain">
			</a>
		</li>
		<li class="w-full h-full">
			<a href="/" class="flex justify-center items-center w-full h-full no-underline">Home</a>
		</li>
		<li class="w-full h-full">
			<a class="flex justify-center items-center w-full h-full no-underline" href="/artists"
				>Artists</a
			>
		</li>
		<li class="w-full h-full">
			<a class="flex justify-center items-center w-full h-full no-underline" href="/releases"
				>Releases</a
			>
		</li>
		<li class="w-full h-full hidden">
			<a class="flex justify-center items-center w-full h-full no-underline" href="/events"
				>Events</a
			>
		</li>
		<li class="w-full h-full">
			<a class="flex justify-center items-center w-full h-full no-underline" href="/contact"
				>Contact</a
			>
		</li>
	</ul>
</nav>
<nav
	class="bg-black fixed w-screen text-white text-center m-0 p-0 font-thin z-50 md:hidden flex-row"
>
	<div class="flex w-full">
		<div
			class="w-screen fixed flex justify-center items-center h-24 font-bold text-2xl text-center"
		>
		<a href="/" class="flex justify-center items-center w-full h-full no-underline p-5 ">
			<img src={logo} alt="logo" class="h-full w-full invert object-contain">
		</a>
		</div>
		<div class="flex justify-end h-24 w-full">
			{#if navOpen}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<img
					src={menucloseicon}
					class="invert aspect-square h-full p-7"
					on:click={changeNav}
					alt="menu"
				/>
			{:else}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<img
					src={hamburgericon}
					class="invert aspect-square h-full p-7"
					on:click={changeNav}
					alt="menu"
				/>
			{/if}
		</div>
	</div>

	{#if navOpen}
		<div class="list-none flex flex-col h-full w-screen text-2xl">
			<div class="w-screen flex items-center">
				<a
					href="/"
					class="flex justify-center items-center w-full h-full p-8 no-underline"
					on:click={changeNav}>Home</a
				>
			</div>

			<div class="w-screen flex items-center">
				<a
					class="flex justify-center items-center w-full h-full p-8 no-underline"
					href="/artists"
					on:click={changeNav}>Artists</a
				>
			</div>
			<div class="w-screen flex items-center">
				<a
					class="flex justify-center items-center w-full h-full p-8 no-underline"
					href="/releases"
					on:click={changeNav}>Releases</a
				>
			</div>
			<div class="w-screen flex items-center hidden">
				<a
					class="flex justify-center items-center w-full h-full p-8 no-underline"
					href="/events"
					on:click={changeNav}>Events</a
				>
			</div>

			<div class="w-screen flex items-center">
				<a
					class="flex justify-center items-center w-full h-full p-8 no-underline"
					href="/contact"
					on:click={changeNav}>Contact</a
				>
			</div>
		</div>
	{/if}
</nav>
<div class="h-24 md:h-16" />
<slot class="bg-neutral-900" />
<div class="h-10" />
<div class="fixed bottom-0 w-screen bg-black h-10 flex items-center justify-center">
	<a href="/about" class="text-white">About this site</a>
</div>
