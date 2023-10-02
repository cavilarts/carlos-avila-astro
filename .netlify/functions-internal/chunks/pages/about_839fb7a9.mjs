/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, d as addAttribute, e as renderHead, f as renderSlot } from '../astro_8a02ceae.mjs';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import React, { useState } from 'react';

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = React.createContext && React.createContext(DefaultContext);

var __assign = globalThis && globalThis.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __rest = globalThis && globalThis.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
function Tree2Element(tree) {
  return tree && tree.map(function (node, i) {
    return React.createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}
function GenIcon(data) {
  // eslint-disable-next-line react/display-name
  return function (props) {
    return React.createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function (conf) {
    var attr = props.attr,
      size = props.size,
      title = props.title,
      svgProps = __rest(props, ["attr", "size", "title"]);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + " " : "") + props.className;
    return React.createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: __assign(__assign({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && React.createElement("title", null, title), props.children);
  };
  return IconContext !== undefined ? React.createElement(IconContext.Consumer, null, function (conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}

// THIS FILE IS AUTO GENERATED
function RxHamburgerMenu (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 15 15","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z","fill":"currentColor"}}]})(props);
}

// THIS FILE IS AUTO GENERATED
function AiFillLinkedin (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"}}]})(props);
}function AiFillYoutube (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 1024 1024"},"child":[{"tag":"path","attr":{"d":"M941.3 296.1a112.3 112.3 0 0 0-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0 0 82.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z"}}]})(props);
}function AiOutlineClose (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 1024 1024","fill":"currentColor","fillRule":"evenodd"},"child":[{"tag":"path","attr":{"d":"M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"}}]})(props);
}

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

// THIS FILE IS AUTO GENERATED
function RiTwitterXFill (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18.2048 2.25H21.5128L14.2858 10.51L22.7878 21.75H16.1308L10.9168 14.933L4.95084 21.75H1.64084L9.37084 12.915L1.21484 2.25H8.04084L12.7538 8.481L18.2048 2.25ZM17.0438 19.77H18.8768L7.04484 4.126H5.07784L17.0438 19.77Z"}}]})(props);
}

const $$Astro$3 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<div class="w-ful bg-slate-700"><footer class="grid w-full grid-flow-row md:grid-flow-col place-items-start gap-y-10 gap-x-4 text-sm max-w-7xl mx-auto p-10"><div><div><img src="/images/logo.svg" alt="logo" class="w-80"></div><p class="text-slate-200">
Carlos Avila Ltd.
<br>
Providing reliable tech since 2008.
</p></div><div class="text-slate-200"><span class="mb-2 font-bold uppercase block">
Social
</span><div class="grid grid-flow-col gap-4"><a href="https://twitter.com/Carlos_A_Tech" target="_blank" aria-label="Twitter" class=" text-3xl">${renderComponent($$result, "RiTwitterXFill", RiTwitterXFill, {})}</a><a href="https://www.youtube.com/@CarlosAvilaTech" target="_blank" aria-label="Youtube" class=" text-3xl">${renderComponent($$result, "AiFillYoutube", AiFillYoutube, {})}</a><a href="https://linkedin.com/in/cavilarts" target="_blank" aria-label="Linkedin" class=" text-3xl">${renderComponent($$result, "AiFillLinkedin", AiFillLinkedin, {})}</a></div></div></footer></div>`;
}, "/Users/carlos/projects/carlos-website-astro/src/components/Footer/Footer.astro", void 0);

const $$Astro$2 = createAstro();
const $$MainLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title, meta } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-ouamjn2i><head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description"${addAttribute(meta.description, "content")}><title>${title}</title>${renderHead()}</head><body data-astro-cid-ouamjn2i><main class="bg-black min-h-screen" data-astro-cid-ouamjn2i>${renderComponent($$result, "Drawer", Drawer, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/carlos/projects/carlos-website-astro/src/components/Navigation/Drawer", "client:component-export": "default", "data-astro-cid-ouamjn2i": true })}${renderSlot($$result, $$slots["default"])}${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-ouamjn2i": true })}</main></body></html>`;
}, "/Users/carlos/projects/carlos-website-astro/src/layouts/MainLayout.astro", void 0);

const $$Astro$1 = createAstro();
const $$Overview = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Overview;
  const { title, subtitle, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section><section class="max-w-7xl mx-auto p-8"><div class=" max-w-2xl"><h3 class="text-violet-300 text-lg mb-4">${subtitle}</h3><h2 class="text-white text-5xl font-bold mb-4">${title}</h2><p class="text-white">${description}</p></div><div>${renderSlot($$result, $$slots["default"])}</div></section></section>`;
}, "/Users/carlos/projects/carlos-website-astro/src/components/Overview/Overview.astro", void 0);

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

export { $$Overview as $, GenIcon as G, $$MainLayout as a, about as b };
