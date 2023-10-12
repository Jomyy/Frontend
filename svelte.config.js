import adapter from '@ivorgri/sveltekit-pluggable-static-adapter';
import { vitePreprocess } from '@sveltejs/kit/vite';
/** @type {import('@sveltejs/kit').Config} */
const config = {
kit: {
				adapter: adapter({
							// default options provided by regular static adapter
										pages: 'build',
													assets: 'build',
															fallback: null,
																			precompress: false,
																			            afterCleanupCallback: async (builder, pages, assets) => {
																										// Add functions here
																													},
																													            afterPrerenderCallback: async (builder, pages, assets) => {
																																				// Add functions here
																																							},
																																							            afterPrecompressCallback: async (builder, pages, assets) => {
																																														// Add functions here
																																																	},
																																																			})
																																																				}
																																																				};


export default config;
