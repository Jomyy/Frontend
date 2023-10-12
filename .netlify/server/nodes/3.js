import * as universal from '../entries/pages/artist/_artist_/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/artist/_artist_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/artist/[artist]/+page.js";
export const imports = ["_app/immutable/nodes/3.32664ce0.js","_app/immutable/chunks/index.a01d836a.js","_app/immutable/chunks/scheduler.2d75cc20.js","_app/immutable/chunks/index.5f800f9d.js","_app/immutable/chunks/YTMusicLogo.0e94eb44.js"];
export const stylesheets = [];
export const fonts = [];
