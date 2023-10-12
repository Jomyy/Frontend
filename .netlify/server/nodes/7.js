

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/events/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.f387f1ad.js","_app/immutable/chunks/scheduler.2d75cc20.js","_app/immutable/chunks/index.5f800f9d.js"];
export const stylesheets = [];
export const fonts = [];
