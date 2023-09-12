import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.17afb177.js","app":"_app/immutable/entry/app.7187f1c8.js","imports":["_app/immutable/entry/start.17afb177.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/singletons.c4148a10.js","_app/immutable/entry/app.7187f1c8.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.5e45a30d.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})());
