<script>
	import '../app.css';
	import hamburgericon from '$lib/assets/icons/menuopen.svg';
	import menucloseicon from '$lib/assets/icons/menuclose.svg';
	let navOpen = false;
	function changeNav() {
		navOpen = !navOpen;
		console.log(navOpen);
	}
</script>

<nav
	class="bg-black fixed w-screen text-white text-center h-16 m-0 p-0 font-sans z-50 hidden md:flex"
>
	<ul class="list-none flex flex-row h-16 w-screen align-middle m-0 p-0 justify-evenly">
		<li class="w-full h-full">
			<a href="/" class="flex justify-center items-center w-full h-full">Home</a>
		</li>
		<li class="w-full h-full">
			<a class="flex justify-center items-center w-full h-full" href="/artists">Artists</a>
		</li>
		<li class="w-full h-full">
			<a class="flex justify-center items-center w-full h-full" href="/releases">Releases</a>
		</li>
		<li class="w-full h-full">
			<a class="flex justify-center items-center w-full h-full" href="/events">Events</a>
		</li>
		<li class="w-full h-full">
			<a class="flex justify-center items-center w-full h-full" href="/contact">Contact</a>
		</li>
	</ul>
</nav>
<nav
	class="bg-black fixed w-screen text-white text-center m-0 p-0 font-sans z-50 md:hidden flex-row"
>
	<div class="flex justify-end h-32">
		{#if navOpen}
			<img src={menucloseicon} class="invert aspect-square p-10" on:click={changeNav} />
		{:else}
			<img src={hamburgericon} class="invert aspect-square p-10" on:click={changeNav} />
		{/if}
	</div>
	{#if navOpen}
		<div class="list-none flex flex-col h-full w-screen text-2xl">
			<div class="w-screen flex items-center">
				<a href="/" class="flex justify-center items-center w-full h-full p-8" on:click={changeNav}
					>Home</a
				>
			</div>

			<div class="w-screen flex items-center">
				<a
					class="flex justify-center items-center w-full h-full p-8"
					href="/artists"
					on:click={changeNav}>Artists</a
				>
			</div>
			<div class="w-screen flex items-center">
				<a
					class="flex justify-center items-center w-full h-full p-8"
					href="/releases"
					on:click={changeNav}>Releases</a
				>
			</div>
			<div class="w-screen flex items-center">
				<a
					class="flex justify-center items-center w-full h-full p-8"
					href="/events"
					on:click={changeNav}>Events</a
				>
			</div>

			<div class="w-screen flex items-center">
				<a
					class="flex justify-center items-center w-full h-full p-8"
					href="/contact"
					on:click={changeNav}>Contact</a
				>
			</div>
		</div>
	{/if}
</nav>
<div class="h-32 md:h-16" />
<slot class="bg-neutral-900" />
