const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico","images/photo.jpg"]),
	mimeTypes: {".jpg":"image/jpeg"},
	_: {
		client: {start:"_app/immutable/entry/start.BhufL48W.js",app:"_app/immutable/entry/app.Cpg-HCc6.js",imports:["_app/immutable/entry/start.BhufL48W.js","_app/immutable/chunks/CtyED7W2.js","_app/immutable/chunks/B4bWzDWm.js","_app/immutable/chunks/D1GHbTh_.js","_app/immutable/entry/app.Cpg-HCc6.js","_app/immutable/chunks/B4bWzDWm.js","_app/immutable/chunks/DFRpztxr.js","_app/immutable/chunks/CI_NNER0.js","_app/immutable/chunks/lkPolpNv.js","_app/immutable/chunks/D1GHbTh_.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-I-39sv7f.js')),
			__memo(() => import('./chunks/1-COXGqwmB.js')),
			__memo(() => import('./chunks/2-BhLsDh2i.js'))
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
