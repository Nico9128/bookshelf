const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["robots.txt"]),
	mimeTypes: {".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.CCpOBNO-.js",app:"_app/immutable/entry/app.BYkgGZvG.js",imports:["_app/immutable/entry/start.CCpOBNO-.js","_app/immutable/chunks/Cj8uB2Pz.js","_app/immutable/chunks/DcjABtqV.js","_app/immutable/chunks/BndMDAK_.js","_app/immutable/entry/app.BYkgGZvG.js","_app/immutable/chunks/BndMDAK_.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/DcjABtqV.js","_app/immutable/chunks/Ce27Asz6.js","_app/immutable/chunks/Dj557W3O.js","_app/immutable/chunks/v2Yl0rQ2.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-CU0w8Kcl.js')),
			__memo(() => import('./chunks/1-D967z4d2.js')),
			__memo(() => import('./chunks/2-BgQFzXec.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
