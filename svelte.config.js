import adapter from '@ivorgri/sveltekit-pluggable-static-adapter';
import replaceExternalImages from '@ivorgri/sveltekit-pluggable-static-adapter-external-image-plugin';
import { vitePreprocess } from '@sveltejs/kit/vite';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
			afterPrerenderCallback: async (builder, pages, assets) => {
				await replaceExternalImages("https://zu-spaet-fuer-die-welle.pockethost.io/api/",builder,pages,assets)
			},
		})
	},
	preprocess: vitePreprocess()
};

export default config;
