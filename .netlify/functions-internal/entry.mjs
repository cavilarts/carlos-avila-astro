import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_cc90c136.mjs';
import 'react';
import 'react-dom/server';
import './chunks/astro_8a02ceae.mjs';
import './chunks/pages/image-endpoint_26970370.mjs';

const _page0  = () => import('./chunks/image-endpoint_196c57f9.mjs');
const _page1  = () => import('./chunks/index_3c4cff81.mjs');
const _page2  = () => import('./chunks/projects_f965cc9b.mjs');
const _page3  = () => import('./chunks/about_588b35ed.mjs');const pageMap = new Map([["node_modules/.pnpm/astro@3.0.13/node_modules/astro/dist/assets/image-endpoint.js", _page0],["src/pages/index.astro", _page1],["src/pages/projects.astro", _page2],["src/pages/about.astro", _page3]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
