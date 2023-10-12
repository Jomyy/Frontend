import adapter from '@ivorgri/sveltekit-pluggable-static-adapter';

/** @type {import('@sveltejs/kit').Config} */
export default {
kit: {
				adapter: adapter({
							// default options provided by regular static adapter
										pages: 'build',
													assets: 'build',
															fallback: null,
																			precompress: true,
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



