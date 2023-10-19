<script>
	// @ts-nocheck

	import { apiURL } from '$lib';
	/**
	 * @type {{ collectionId: string; id: string; Profilpicture: string; Name: string;}}
	 */
	export let data;
</script>

<a href={'/release/' + data.id} class="p-4">
	<div class="h-max relative">
		<img
			src={'/api/image/' + data.collectionId + '/' + data.id + '/' + data.Cover}
			class="aspect-square object-cover w-full drop-shadow-lg"
			alt="artistprofilepicture"
		/>
	</div>
</a>
