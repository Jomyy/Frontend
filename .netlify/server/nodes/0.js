import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.184bcc04.js","_app/immutable/chunks/scheduler.2d75cc20.js","_app/immutable/chunks/index.5f800f9d.js"];
export const stylesheets = ["_app/immutable/assets/0.d6a638c6.css"];
export const fonts = [];
