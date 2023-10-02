/* empty css                          */import { c as createAstro, b as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderComponent, e as addAttribute, g as renderHead, h as renderSlot } from './astro_471cbcac.mjs';
import { BiLogoReact, BiLogoNodejs, BiLogoCss3 } from 'react-icons/bi/index.esm.js';
import { SiAstro } from 'react-icons/si/index.esm.js';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
/* empty css                          */import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx/index.esm.js';
import { AiOutlineClose, AiFillYoutube, AiFillLinkedin } from 'react-icons/ai/index.esm.js';
import { RiTwitterXFill } from 'react-icons/ri/index.esm.js';

function Menu({ handleOpen } = {}) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("li", { className: "block lg:hidden", children: handleOpen && /* @__PURE__ */ jsxs(
      "button",
      {
        className: "flex items-center gap-2 border border-white p-2 rounded-xl w-full mb-4 uppercase justify-center",
        onClick: handleOpen,
        children: [
          /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(AiOutlineClose, {}) }),
          /* @__PURE__ */ jsx("span", { children: "Close" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/projects", children: "Projects" }) }),
    /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/about", children: "About" }) })
  ] });
}

function Navigation({ handleOpen }) {
  return /* @__PURE__ */ jsx("nav", { className: "bg-black p-4 text-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl flex justify-between items-center w-full m-auto", children: [
    /* @__PURE__ */ jsxs("a", { href: "/", "aria-label": "Carlos Avila", className: "", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "/images/logo.svg",
          alt: "Carlos Avila",
          className: "w-[200px] h-[45px]] hidden lg:block"
        }
      ),
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "/images/logoSmall.svg",
          alt: "Carlos Avila",
          className: "w-[100px] block lg:hidden"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("section", { className: "flex-none hidden lg:block", children: /* @__PURE__ */ jsx("ul", { className: "flex gap-4", children: /* @__PURE__ */ jsx(Menu, {}) }) }),
    /* @__PURE__ */ jsx("section", { className: "flex lg:hidden", children: /* @__PURE__ */ jsx("button", { className: "text-xl", onClick: handleOpen, children: /* @__PURE__ */ jsx(RxHamburgerMenu, {}) }) })
  ] }) });
}

function SideNav({ isOpen, handleOpen }) {
  return /* @__PURE__ */ jsxs("section", { children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `fixed top-0 right-0 w-screen h-screen bg-slate-50 opacity-75 z-0 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`,
        onClick: handleOpen
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `fixed top-0 right-0 w-2/3 h-screen bg-black z-10 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`,
        children: /* @__PURE__ */ jsx("ul", { className: "flex flex-col gap-4 p-4 text-white", children: /* @__PURE__ */ jsx(Menu, { handleOpen }) })
      }
    )
  ] });
}

function Drawer() {
  const [isOpen, setIsOpen] = useState(false);
  function handleOpen() {
    setIsOpen((open) => !open);
  }
  return /* @__PURE__ */ jsxs("section", { className: "relative grid auto-cols-[auto max-content] w-full z-20", children: [
    /* @__PURE__ */ jsx("section", { className: "col-start-1 row-start-1 flex flex-col", children: /* @__PURE__ */ jsx(Navigation, { handleOpen }) }),
    /* @__PURE__ */ jsx(SideNav, { isOpen, handleOpen })
  ] });
}

const $$Astro$7 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<div class="w-ful bg-slate-700"><footer class="grid w-full grid-flow-row md:grid-flow-col place-items-start gap-y-10 gap-x-4 text-sm max-w-7xl mx-auto p-10"><div><div><img src="/images/logo.svg" alt="logo" class="w-80"></div><p class="text-slate-200">
Carlos Avila Ltd.
<br>
Providing reliable tech since 2008.
</p></div><div class="text-slate-200"><span class="mb-2 font-bold uppercase block">
Social
</span><div class="grid grid-flow-col gap-4"><a href="https://twitter.com/Carlos_A_Tech" target="_blank" aria-label="Twitter" class=" text-3xl">${renderComponent($$result, "RiTwitterXFill", RiTwitterXFill, {})}</a><a href="https://www.youtube.com/@CarlosAvilaTech" target="_blank" aria-label="Youtube" class=" text-3xl">${renderComponent($$result, "AiFillYoutube", AiFillYoutube, {})}</a><a href="https://linkedin.com/in/cavilarts" target="_blank" aria-label="Linkedin" class=" text-3xl">${renderComponent($$result, "AiFillLinkedin", AiFillLinkedin, {})}</a></div></div></footer></div>`;
}, "/Users/carlos/projects/carlos-website-astro/src/components/Footer/Footer.astro", void 0);

const $$Astro$6 = createAstro();
const $$MainLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title, meta } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-ouamjn2i><head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description"${addAttribute(meta.description, "content")}><title>${title}</title>${renderHead()}</head><body data-astro-cid-ouamjn2i><main class="bg-black min-h-screen" data-astro-cid-ouamjn2i>${renderComponent($$result, "Drawer", Drawer, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/carlos/projects/carlos-website-astro/src/components/Navigation/Drawer", "client:component-export": "default", "data-astro-cid-ouamjn2i": true })}${renderSlot($$result, $$slots["default"])}${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-ouamjn2i": true })}</main></body></html>`;
}, "/Users/carlos/projects/carlos-website-astro/src/layouts/MainLayout.astro", void 0);

const $$Astro$5 = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Hero;
  const { imagePath, title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative"><div class="w-full h-screen absolute top-0 left-0"><img${addAttribute(imagePath, "src")} alt="Hero" class="w-full h-full object-cover"></div><section class="min-h-screen grid w-full place-items-center"><section class="flex items-center justify-center w-full h-full"><section class="max-w-md text-white text-center z-10 bg-opacity-60 bg-black rounded-xl p-4"><h1 class="text-5xl font-bold">${title}</h1><p class="py-7">${description}</p></section></section></section></section>`;
}, "/Users/carlos/projects/carlos-website-astro/src/components/Hero/Hero.astro", void 0);

const $$Astro$4 = createAstro();
const $$Overview = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Overview;
  const { title, subtitle, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section><section class="max-w-7xl mx-auto p-8"><div class=" max-w-2xl"><h3 class="text-violet-300 text-lg mb-4">${subtitle}</h3><h2 class="text-white text-5xl font-bold mb-4">${title}</h2><p class="text-white">${description}</p></div><div>${renderSlot($$result, $$slots["default"])}</div></section></section>`;
}, "/Users/carlos/projects/carlos-website-astro/src/components/Overview/Overview.astro", void 0);

function Card({
  title,
  description,
  image,
  children
}) {
  return /* @__PURE__ */ jsx("div", { className: "w-full h-full rounded-3xl bg-gradient-to-b from-orange-400 to-violet-600 p-[1px] rounded7xl shadow-md", children: /* @__PURE__ */ jsxs("article", { className: "bg-black h-full shadow-xl rounded-3xl bg-secondary-content text-center flex flex-col items-center p-6", children: [
    title && /* @__PURE__ */ jsx("h2", { children: title }),
    description && /* @__PURE__ */ jsx("p", { children: description }),
    image && /* @__PURE__ */ jsx("img", { src: image, alt: title }),
    children
  ] }) });
}

function FlipCard({
  children,
  title,
  description
}) {
  return /* @__PURE__ */ jsx("section", { className: "relative w-full h-[275px] md:w-1/5 md:h-[275px] group [perspective:1000px]", children: /* @__PURE__ */ jsxs("section", { className: "relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 text-center text-slate-200 rounded-xl [backface-visibility:hidden]", children: /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx("section", { className: "flex justify-center items-center w-full h-full", children: children && /* @__PURE__ */ jsx("span", { className: "text-white text-9xl", children }) }) }) }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-xl text-slate-200 [backface-visibility:hidden] [transform:rotateY(180deg)]", children: /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs("section", { className: "flex flex-col justify-center items-center w-full h-full", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl pb-4", children: title }),
      /* @__PURE__ */ jsx("p", { children: description })
    ] }) }) })
  ] }) });
}

function WorkTL() {
  return /* @__PURE__ */ jsxs(VerticalTimeline, { children: [
    /* @__PURE__ */ jsxs(
      VerticalTimelineElement,
      {
        date: "May 2022 - Present",
        icon: /* @__PURE__ */ jsx("div", { className: "bg-white rounded-full w-full h-full flex items-center justify-center absolute", children: /* @__PURE__ */ jsx("img", { src: "/images/krieger.webp", alt: "Krieger Digital" }) }),
        children: [
          /* @__PURE__ */ jsx("h3", { className: "vertical-timeline-element-title", children: "Krieger Digital" }),
          /* @__PURE__ */ jsx("h4", { className: "vertical-timeline-element-subtitle", children: "Senior Front End Engineer" }),
          /* @__PURE__ */ jsx("p", { children: "Frontend Development, User Experience, Visual Design, Project Management, Team Leading" })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      VerticalTimelineElement,
      {
        date: "February 2021 - April 2022",
        icon: /* @__PURE__ */ jsx("div", { className: "bg-white rounded-full w-full h-full flex items-center justify-center absolute", children: /* @__PURE__ */ jsx("img", { src: "/images/perficient.webp", alt: "Perficient Latin America" }) }),
        children: [
          /* @__PURE__ */ jsx("h3", { className: "vertical-timeline-element-title", children: "Perficient Latin America" }),
          /* @__PURE__ */ jsx("h4", { className: "vertical-timeline-element-subtitle", children: "Web IU Software Designer" }),
          /* @__PURE__ */ jsx("p", { children: "Frontend Development, User Experience, Visual Design, Project Management, Team Leading" })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      VerticalTimelineElement,
      {
        date: "February 2018 - January 2021",
        icon: /* @__PURE__ */ jsx("div", { className: "bg-white rounded-full w-full h-full flex items-center justify-center absolute", children: /* @__PURE__ */ jsx("img", { src: "/images/globant.webp", alt: "Globant" }) }),
        children: [
          /* @__PURE__ */ jsx("h3", { className: "vertical-timeline-element-title", children: "Globant" }),
          /* @__PURE__ */ jsx("h4", { className: "vertical-timeline-element-subtitle", children: "Web IU Software Designer" }),
          /* @__PURE__ */ jsx("p", { children: "Frontend Development, User Experience, Visual Design, Project Management, Team Leading" })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      VerticalTimelineElement,
      {
        date: "March 2015 - January 2018",
        icon: /* @__PURE__ */ jsx("div", { className: "bg-white rounded-full w-full h-full flex items-center justify-center absolute", children: /* @__PURE__ */ jsx("img", { src: "/images/prodigious.webp", alt: "Prodigious Latam" }) }),
        children: [
          /* @__PURE__ */ jsx("h3", { className: "vertical-timeline-element-title", children: "Prodigious Latam" }),
          /* @__PURE__ */ jsx("h4", { className: "vertical-timeline-element-subtitle", children: "Web IU Software Designer" }),
          /* @__PURE__ */ jsx("p", { children: "Frontend Development, User Experience, Visual Design, Project Management, Team Leading" })
        ]
      }
    )
  ] });
}

const $$Astro$3 = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Carlos Avila Web Developer", "meta": {
    description: "Unlock the Potential of Your Projects with a Top-Tier Web Developer. I'm Carlos Avila, a software developer in Germany, skilled in React, Node.js, and Firebase. With expertise in Svelte, Vue, MongoDB, Express, Tailwind, and Bootstrap, I'm your go-to partner for web development excellence. Let's bring your ideas to life."
  } }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Hero", $$Hero, { "imagePath": "/images/joshua-reddekopp-GkFQEOubrCo-unsplash.avif", "title": "Hello my Name is Carlos Avila", "description": "I am a software developer currently based in Germany I have worked with many technologies, but my main focus is on React, NodeJs and Firebase. I also have experience with other technologies like Svelte, Vue, MongoDB, Express, Tailwind, Bootstrap, etc." })}${renderComponent($$result2, "Overview", $$Overview, { "title": "Overview", "subtitle": "INTRODUCTION", "description": "I am a Frontend Engineer & technology enthusiast! Throughout my career, I have been driven by my passion for technology and my appreciation for connecting with individuals and community. I have 10 years of experience specializing in web development. I am well-equipped to take on challenging projects and drive exceptional results." }, { "default": ($$result3) => renderTemplate`${maybeRenderHead()}<div class="mt-10 flex flex-wrap gap-8 md:justify-between">${renderComponent($$result3, "FlipCard", FlipCard, { "title": "React", "description": "In my career, I have architected, created, maintained, and expanded React applications." }, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "BiLogoReact", BiLogoReact, {})}` })}${renderComponent($$result3, "FlipCard", FlipCard, { "title": "NodeJs", "description": "NodeJS in my opinion is the faster and easy way to create and maintain backend code." }, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "BiLogoNodejs", BiLogoNodejs, {})}` })}${renderComponent($$result3, "FlipCard", FlipCard, { "title": "Astro", "description": "Astro is the best modern framework, the one that I enjoy the most and the perfect balance for web performance." }, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "SiAstro", SiAstro, {})}` })}${renderComponent($$result3, "FlipCard", FlipCard, { "title": "CSS", "description": "No matter the way, either using tailwind or another option to style and create a grat look and feel I can perform the best and create awesome interfaces." }, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "BiLogoCss3", BiLogoCss3, {})}` })}</div>` })}${renderComponent($$result2, "Overview", $$Overview, { "title": "Work Experience", "subtitle": "WHAT I'VE DONE SO FAR", "description": "" }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "WorkTimeline", WorkTL, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/carlos/projects/carlos-website-astro/src/components/TL/WorkTL", "client:component-export": "default" })}` })}${renderComponent($$result2, "Overview", $$Overview, { "title": "My Prefferred technology", "subtitle": "Tools that I love to use", "description": "I have experience with multiple web frameworks, database engines, styling tools, and more." }, { "default": ($$result3) => renderTemplate`<section class="flex mt-4 gap-4 flex-wrap justify-center mb-10"><div class="bg-white shadow-xl rounded-full p-2 w-14 md:w-28"><img src="/images/typescript.webp" alt="typescript" class="bg-cover"></div><div class="bg-white shadow-xl rounded-full p-2 w-14 md:w-28"><img src="/images/webpack.webp" alt="webpack"></div><div class="bg-white shadow-xl rounded-full p-2 w-14 md:w-28"><img src="/images/svelte.webp" alt="svelte"></div><div class="bg-white shadow-xl rounded-full p-2 w-14 md:w-28"><img src="/images/mongo.webp" alt="mongodb"></div><div class="bg-white shadow-xl rounded-full p-2 w-14 md:w-28"><img src="/images/html5.webp" alt="express"></div><div class="bg-white shadow-xl rounded-full p-2 w-14 md:w-28"><img src="/images/css3.webp" alt="css3"></div><div class="bg-white shadow-xl rounded-full p-2 w-14 md:w-28"><img src="/images/javascript.webp" alt="javascript"></div><div class="bg-white shadow-xl rounded-full p-2 w-14 md:w-28"><img src="/images/nextjs.webp" alt="nextjs"></div><div class="bg-white shadow-xl rounded-full p-2 w-14 md:w-28"><img src="/images/redux.webp" alt="redux"></div></section>` })}` })}../components/TL/WorkTimeline`;
}, "/Users/carlos/projects/carlos-website-astro/src/pages/index.astro", void 0);

const $$file$2 = "/Users/carlos/projects/carlos-website-astro/src/pages/index.astro";
const $$url$2 = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro();
const $$WorkCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$WorkCard;
  const { title, description, image, tech, url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")} class="sm:px-16 px-6 sm:py-20 py-10 mx-auto relative z-0 mt-0 " target="_blank"><div class="bg-gradient-to-b from-orange-400 to-violet-600 p-[1px] rounded-xl"><article class="w-96 bg-base-100 shadow-xl relative flex flex-col rounded-xl text-slate-200"><figure><img${addAttribute(image, "src")}${addAttribute(title, "alt")} class="rounded-t-xl" width="385" height="215"></figure><div class="flex flex-auto flex-col p-8 gap-2 bg-black rounded-b-xl"><h2 class="flex items-center gap-2 text-2xl font-black uppercase">${title}</h2><p>${description}</p><div class="flex flex-wrap items-start gap-3 justify-end">${tech.map((t) => renderTemplate`<span class="inline-flex items-center h-6 w-fit border border-emerald-600 px-2 py-4 rounded-full">${t}</span>`)}</div></div></article></div></a>`;
}, "/Users/carlos/projects/carlos-website-astro/src/components/Card/WorkCard.astro", void 0);

const $$Astro$1 = createAstro();
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Projects;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Projects", "meta": {
    description: "I have collaborated to create better products, brought ideas, and actively participated in the projects you will see below. Additionally, some others were created and are currently maintained by me."
  } }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Overview", $$Overview, { "title": "Projects", "subtitle": "Some of my work", "description": "I have collaborated to create better products, brought ideas, and actively participated in the projects you will see below. Additionally, some others were created and are currently maintained by me." }, { "default": ($$result3) => renderTemplate`${maybeRenderHead()}<section class="flex flex-wrap gap-0 items-stretch md:justify-between justify-center">${renderComponent($$result3, "WorkCard", $$WorkCard, { "url": "https://fantastic-licorice-70b0f2.netlify.app/", "title": "Astro Movies", "description": "This project was created using the Movie Database (TMDb) API and is designed to display the most recent movies. It has the capability to filter and provide page navigation.", "image": "/images/AstroMovies.webp", "tech": ["Astro", "React", "Tailwind"] })}${renderComponent($$result3, "WorkCard", $$WorkCard, { "url": "https://www.sellwhenever.com/", "title": "SellWhenever", "description": "SellWhenever is a platform that allows home owners to sell their properties in a fast and easy way.", "image": "/images/Sellwhenever.webp", "tech": ["NextJS", "Typescript", "React", "Redux", "Styled Components", "Material UI", "Testing Library"] })}${renderComponent($$result3, "WorkCard", $$WorkCard, { "url": "https://usetmx.com/", "title": "TMX News", "description": "TMX News is a B2B platform that allows users to upload and share news with massive news corporations.", "image": "/images/tmx.webp", "tech": ["Typescript", "React", "Redux", "Styled Components", "Semantic UI"] })}${renderComponent($$result3, "WorkCard", $$WorkCard, { "url": "https://www.southwest.com/", "title": "Southwest Airlines", "description": "Southwest Airlines is a platform that allows users to book flights, hotels and cars.", "image": "/images/southwest.webp", "tech": ["Typescript", "React", "CSS", "Semantic UI"] })}${renderComponent($$result3, "WorkCard", $$WorkCard, { "url": "https://www.nissanusa.com/shopping-tools/search-inventory", "title": "Nissan Car Inventory", "description": "Nissan Car Inventory is a platform that allows users to search for cars in a specific location with specific characteristics.", "image": "/images/nissan-inventory.webp", "tech": ["Backbone", "Marionette", "Jasmine", "Sass"] })}</section>` })}` })}`;
}, "/Users/carlos/projects/carlos-website-astro/src/pages/projects.astro", void 0);

const $$file$1 = "/Users/carlos/projects/carlos-website-astro/src/pages/projects.astro";
const $$url$1 = "/projects";

const projects = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Projects,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Carlos Avila Web Developer", "meta": {
    description: "A little bit about myself and my work."
  } }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Overview", $$Overview, { "title": "About", "subtitle": "A little bit about myself and my work.", "description": "" }, { "default": ($$result3) => renderTemplate`${maybeRenderHead()}<section class="text-slate-200"><div class="mt-8 flex flex-col md:flex-row"><img src="/images/CarlosAvila.webp" alt="Carlos Avila" class="rounded-full w-[300px] h-[300px] mx-auto mb-8 object-cover border border-white md:mx-8"><div><p class="py-4">
So, my first run-in with a computer happened around '97, and let me tell you, it was a total trip. The moment I saw that thing, I was hooked. Back then, all I did was doodle on it, play some basic PC games, and mess around with the DOS console – it felt like some kind of magical mystery box.
</p><p class="py-4">
But the real magic happened when I stumbled onto the internet for the first time. It was a wild, wild place: music, people, chat rooms, forums, you name it. And the best part? It was like a treasure trove of info on how these contraptions worked and ways to "hack" into 'em.
</p><p class="py-4">
And just like that, my computer journey kicked off, driven by a mix of destiny, tech, and a young dreamer's endless curiosity.
</p></div></div><p class="py-4">During my school years, my mind was constantly abuzz with thoughts of computers. I dabbled in a bit of Visual Basic, and that mischievous hacker and prankster spirit within me took control. I conjured up a program to roll the dice, another one that held your screen hostage until you cracked its code, and yet another that captured text and twisted it into whimsical chaos.</p><p class="py-4">With each new creation, my fascination with networking and the vast expanse of the internet deepened.</p><p class="py-4">Soon, I found myself on the path of formal education, diving headfirst into the world of computer science. Simultaneously, I took up a job where I wove intricate PHP code. It was here that my journey truly began, an exhilarating voyage into the captivating realm of computers and technology.</p><p class="py-4">I started out in the startup scene, which was a blast. There was so much creativity and energy in those small companies, and I absolutely thrived in that environment. But then, out of the blue, I got the chance to step into the big leagues of the tech world.</p><p class="py-4">Suddenly, I found myself in massive tech companies, working alongside huge development teams. My passion and know-how played a vital role in bringing about some significant innovations in web development. It was an exciting time, no doubt, and I felt like I was helping to shape the digital world we all know and love today.</p><p class="py-4">Fast forward to today, and I find myself living in Berlin, Germany. Here, I've immersed myself in the local culture, learning and adapting aspects of it into the software I develop. It's a curious journey, one that's constantly evolving, yet it's also mature, built on solid foundations. Berlin has infused a unique flavor into my work, making it a reflection of both my tech expertise and the vibrant cultural tapestry that surrounds me.</p></section>` })}` })}`;
}, "/Users/carlos/projects/carlos-website-astro/src/pages/about.astro", void 0);

const $$file = "/Users/carlos/projects/carlos-website-astro/src/pages/about.astro";
const $$url = "/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { about as a, index as i, projects as p };
