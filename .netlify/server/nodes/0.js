

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.a3f8191d.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.5e45a30d.js"];
export const stylesheets = ["_app/immutable/assets/0.37ca8399.css"];
export const fonts = [];
