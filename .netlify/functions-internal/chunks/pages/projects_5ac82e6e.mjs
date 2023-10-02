/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, b as renderComponent } from '../astro_8a02ceae.mjs';
import { $ as $$Overview, a as $$MainLayout } from './about_839fb7a9.mjs';
import 'react/jsx-runtime';
import 'react';

const $$Astro$1 = createAstro();
const $$WorkCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$WorkCard;
  const { title, description, image, tech, url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")} class="sm:px-16 px-6 sm:py-20 py-10 mx-auto relative z-0 mt-0 " target="_blank"><div class="bg-gradient-to-b from-orange-400 to-violet-600 p-[1px] rounded-xl"><article class="w-96 bg-base-100 shadow-xl relative flex flex-col rounded-xl text-slate-200"><figure><img${addAttribute(image, "src")}${addAttribute(title, "alt")} class="rounded-t-xl" width="385" height="215"></figure><div class="flex flex-auto flex-col p-8 gap-2 bg-black rounded-b-xl"><h2 class="flex items-center gap-2 text-2xl font-black uppercase">${title}</h2><p>${description}</p><div class="flex flex-wrap items-start gap-3 justify-end">${tech.map((t) => renderTemplate`<span class="inline-flex items-center h-6 w-fit border border-emerald-600 px-2 py-4 rounded-full">${t}</span>`)}</div></div></article></div></a>`;
}, "/Users/carlos/projects/carlos-website-astro/src/components/Card/WorkCard.astro", void 0);

const $$Astro = createAstro();
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Projects;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Projects", "meta": {
    description: "I have collaborated to create better products, brought ideas, and actively participated in the projects you will see below. Additionally, some others were created and are currently maintained by me."
  } }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Overview", $$Overview, { "title": "Projects", "subtitle": "Some of my work", "description": "I have collaborated to create better products, brought ideas, and actively participated in the projects you will see below. Additionally, some others were created and are currently maintained by me." }, { "default": ($$result3) => renderTemplate`${maybeRenderHead()}<section class="flex flex-wrap gap-0 items-stretch md:justify-between justify-center">${renderComponent($$result3, "WorkCard", $$WorkCard, { "url": "https://fantastic-licorice-70b0f2.netlify.app/", "title": "Astro Movies", "description": "This project was created using the Movie Database (TMDb) API and is designed to display the most recent movies. It has the capability to filter and provide page navigation.", "image": "/images/AstroMovies.webp", "tech": ["Astro", "React", "Tailwind"] })}${renderComponent($$result3, "WorkCard", $$WorkCard, { "url": "https://www.sellwhenever.com/", "title": "SellWhenever", "description": "SellWhenever is a platform that allows home owners to sell their properties in a fast and easy way.", "image": "/images/Sellwhenever.webp", "tech": ["NextJS", "Typescript", "React", "Redux", "Styled Components", "Material UI", "Testing Library"] })}${renderComponent($$result3, "WorkCard", $$WorkCard, { "url": "https://usetmx.com/", "title": "TMX News", "description": "TMX News is a B2B platform that allows users to upload and share news with massive news corporations.", "image": "/images/tmx.webp", "tech": ["Typescript", "React", "Redux", "Styled Components", "Semantic UI"] })}${renderComponent($$result3, "WorkCard", $$WorkCard, { "url": "https://www.southwest.com/", "title": "Southwest Airlines", "description": "Southwest Airlines is a platform that allows users to book flights, hotels and cars.", "image": "/images/southwest.webp", "tech": ["Typescript", "React", "CSS", "Semantic UI"] })}${renderComponent($$result3, "WorkCard", $$WorkCard, { "url": "https://www.nissanusa.com/shopping-tools/search-inventory", "title": "Nissan Car Inventory", "description": "Nissan Car Inventory is a platform that allows users to search for cars in a specific location with specific characteristics.", "image": "/images/nissan-inventory.webp", "tech": ["Backbone", "Marionette", "Jasmine", "Sass"] })}</section>` })}` })}`;
}, "/Users/carlos/projects/carlos-website-astro/src/pages/projects.astro", void 0);

const $$file = "/Users/carlos/projects/carlos-website-astro/src/pages/projects.astro";
const $$url = "/projects";

export { $$Projects as default, $$file as file, $$url as url };
