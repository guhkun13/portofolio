

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.3a1f2b8f.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.5e45a30d.js","_app/immutable/chunks/singletons.c4148a10.js"];
export const stylesheets = [];
export const fonts = [];
