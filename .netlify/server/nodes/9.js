import * as universal from '../entries/pages/releases/_page.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/releases/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/releases/+page.js";
export const imports = ["_app/immutable/nodes/9.66a29bbf.js","_app/immutable/chunks/index.a01d836a.js","_app/immutable/chunks/scheduler.2d75cc20.js","_app/immutable/chunks/index.5f800f9d.js"];
export const stylesheets = [];
export const fonts = [];
