import * as universal from '../entries/pages/artists/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/artists/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/artists/+page.js";
export const imports = ["_app/immutable/nodes/4.66f189f5.js","_app/immutable/chunks/index.a01d836a.js","_app/immutable/chunks/scheduler.2d75cc20.js","_app/immutable/chunks/index.5f800f9d.js"];
export const stylesheets = [];
export const fonts = [];
