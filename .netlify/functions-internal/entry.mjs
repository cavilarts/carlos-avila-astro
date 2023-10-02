import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_40c15add.mjs';
import 'react';
import 'react-dom/server';
import './chunks/astro_471cbcac.mjs';
import './chunks/pages/image-endpoint_2c4eb06a.mjs';

const _page0  = () => import('./chunks/image-endpoint_44a2cf92.mjs');
const _page1  = () => import('./chunks/index_e515cb0d.mjs');
const _page2  = () => import('./chunks/projects_bdec2e29.mjs');
const _page3  = () => import('./chunks/about_1d9e0b8f.mjs');const pageMap = new Map([["node_modules/.pnpm/astro@3.0.13/node_modules/astro/dist/assets/image-endpoint.js", _page0],["src/pages/index.astro", _page1],["src/pages/projects.astro", _page2],["src/pages/about.astro", _page3]]);
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
