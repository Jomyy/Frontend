<script>
	import { apiURL } from '$lib';
	/**
	 * @type {{ collectionId: string; id: string; Profilpicture: string; Name: string;}}
	 */
	export let data;
</script>

<a href={'/artist/' + data.id}>
	<div class="h-max relative">
		<img
			src={'/api/image/' + data.collectionId + '/' + data.id + '/' + data.Profilpicture}
			class="aspect-square object-cover"
			alt="artistprofilepicture"
		/>
		<div
			class="absolute bottom-0 left-0 right-0 p-8 h-16 w-full text-center bg-gradient-to-t from-black via-black text-white"
		>
			<span class="w-full text-center">{data.Name}</span>
		</div>
	</div>
</a>
