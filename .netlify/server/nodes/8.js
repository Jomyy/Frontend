import * as universal from '../entries/pages/release/_releaseId_/_page.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/release/_releaseId_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/release/[releaseId]/+page.js";
export const imports = ["_app/immutable/nodes/8.e57c62ba.js","_app/immutable/chunks/index.a01d836a.js","_app/immutable/chunks/scheduler.2d75cc20.js","_app/immutable/chunks/index.5f800f9d.js","_app/immutable/chunks/YTMusicLogo.0e94eb44.js"];
export const stylesheets = [];
export const fonts = [];
