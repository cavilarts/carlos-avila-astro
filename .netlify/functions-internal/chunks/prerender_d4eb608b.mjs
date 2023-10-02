/* empty css                          */import { c as createAstro, b as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderComponent, e as addAttribute, g as renderHead, h as renderSlot } from './astro_471cbcac.mjs';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
/* empty css                          */import React, { useState } from 'react';

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
function BiLogoCss3 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M4.192 3.143h15.615l-1.42 16.034-6.404 1.812-6.369-1.813L4.192 3.143zM16.9 6.424l-9.8-.002.158 1.949 7.529.002-.189 2.02H9.66l.179 1.913h4.597l-.272 2.62-2.164.598-2.197-.603-.141-1.569h-1.94l.216 2.867L12 17.484l3.995-1.137.905-9.923z"}}]})(props);
}function BiLogoNodejs (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 21.985c-.275 0-.532-.074-.772-.202l-2.439-1.448c-.365-.203-.182-.277-.072-.314.496-.165.588-.201 1.101-.493.056-.037.129-.02.185.017l1.87 1.12c.074.036.166.036.221 0l7.319-4.237c.074-.036.11-.11.11-.202V7.768c0-.091-.036-.165-.11-.201l-7.319-4.219c-.073-.037-.165-.037-.221 0L4.552 7.566c-.073.036-.11.129-.11.201v8.457c0 .073.037.166.11.202l2 1.157c1.082.548 1.762-.095 1.762-.735V8.502c0-.11.091-.221.22-.221h.936c.108 0 .22.092.22.221v8.347c0 1.449-.788 2.294-2.164 2.294-.422 0-.752 0-1.688-.46l-1.925-1.099a1.55 1.55 0 0 1-.771-1.34V7.786c0-.55.293-1.064.771-1.339l7.316-4.237a1.637 1.637 0 0 1 1.544 0l7.317 4.237c.479.274.771.789.771 1.339v8.458c0 .549-.293 1.063-.771 1.34l-7.317 4.236c-.241.11-.516.165-.773.165zm2.256-5.816c-3.21 0-3.87-1.468-3.87-2.714 0-.11.092-.221.22-.221h.954c.11 0 .201.073.201.184.147.971.568 1.449 2.514 1.449 1.54 0 2.202-.35 2.202-1.175 0-.477-.185-.825-2.587-1.063-1.999-.2-3.246-.643-3.246-2.238 0-1.485 1.247-2.366 3.339-2.366 2.347 0 3.503.809 3.649 2.568a.297.297 0 0 1-.056.165c-.037.036-.091.073-.146.073h-.953a.212.212 0 0 1-.202-.164c-.221-1.012-.789-1.34-2.292-1.34-1.689 0-1.891.587-1.891 1.027 0 .531.237.696 2.514.99 2.256.293 3.32.715 3.32 2.294-.02 1.615-1.339 2.531-3.67 2.531z"}}]})(props);
}function BiLogoReact (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"11.245","r":"1.785"}},{"tag":"path","attr":{"d":"m7.002 14.794-.395-.101c-2.934-.741-4.617-2.001-4.617-3.452 0-1.452 1.684-2.711 4.617-3.452l.395-.1.111.391a19.507 19.507 0 0 0 1.136 2.983l.085.178-.085.178c-.46.963-.841 1.961-1.136 2.985l-.111.39zm-.577-6.095c-2.229.628-3.598 1.586-3.598 2.542 0 .954 1.368 1.913 3.598 2.54.273-.868.603-1.717.985-2.54a20.356 20.356 0 0 1-.985-2.542zm10.572 6.095-.11-.392a19.628 19.628 0 0 0-1.137-2.984l-.085-.177.085-.179c.46-.961.839-1.96 1.137-2.984l.11-.39.395.1c2.935.741 4.617 2 4.617 3.453 0 1.452-1.683 2.711-4.617 3.452l-.395.101zm-.41-3.553c.4.866.733 1.718.987 2.54 2.23-.627 3.599-1.586 3.599-2.54 0-.956-1.368-1.913-3.599-2.542a20.683 20.683 0 0 1-.987 2.542z"}},{"tag":"path","attr":{"d":"m6.419 8.695-.11-.39c-.826-2.908-.576-4.991.687-5.717 1.235-.715 3.222.13 5.303 2.265l.284.292-.284.291a19.718 19.718 0 0 0-2.02 2.474l-.113.162-.196.016a19.646 19.646 0 0 0-3.157.509l-.394.098zm1.582-5.529c-.224 0-.422.049-.589.145-.828.477-.974 2.138-.404 4.38.891-.197 1.79-.338 2.696-.417a21.058 21.058 0 0 1 1.713-2.123c-1.303-1.267-2.533-1.985-3.416-1.985zm7.997 16.984c-1.188 0-2.714-.896-4.298-2.522l-.283-.291.283-.29a19.827 19.827 0 0 0 2.021-2.477l.112-.16.194-.019a19.473 19.473 0 0 0 3.158-.507l.395-.1.111.391c.822 2.906.573 4.992-.688 5.718a1.978 1.978 0 0 1-1.005.257zm-3.415-2.82c1.302 1.267 2.533 1.986 3.415 1.986.225 0 .423-.05.589-.145.829-.478.976-2.142.404-4.384-.89.198-1.79.34-2.698.419a20.526 20.526 0 0 1-1.71 2.124z"}},{"tag":"path","attr":{"d":"m17.58 8.695-.395-.099a19.477 19.477 0 0 0-3.158-.509l-.194-.017-.112-.162A19.551 19.551 0 0 0 11.7 5.434l-.283-.291.283-.29c2.08-2.134 4.066-2.979 5.303-2.265 1.262.727 1.513 2.81.688 5.717l-.111.39zm-3.287-1.421c.954.085 1.858.228 2.698.417.571-2.242.425-3.903-.404-4.381-.824-.477-2.375.253-4.004 1.841.616.67 1.188 1.378 1.71 2.123zM8.001 20.15a1.983 1.983 0 0 1-1.005-.257c-1.263-.726-1.513-2.811-.688-5.718l.108-.391.395.1c.964.243 2.026.414 3.158.507l.194.019.113.16c.604.878 1.28 1.707 2.02 2.477l.284.29-.284.291c-1.583 1.627-3.109 2.522-4.295 2.522zm-.993-5.362c-.57 2.242-.424 3.906.404 4.384.825.47 2.371-.255 4.005-1.842a21.17 21.17 0 0 1-1.713-2.123 20.692 20.692 0 0 1-2.696-.419z"}},{"tag":"path","attr":{"d":"M12 15.313c-.687 0-1.392-.029-2.1-.088l-.196-.017-.113-.162a25.697 25.697 0 0 1-1.126-1.769 26.028 26.028 0 0 1-.971-1.859l-.084-.177.084-.179c.299-.632.622-1.252.971-1.858.347-.596.726-1.192 1.126-1.77l.113-.16.196-.018a25.148 25.148 0 0 1 4.198 0l.194.019.113.16a25.136 25.136 0 0 1 2.1 3.628l.083.179-.083.177a24.742 24.742 0 0 1-2.1 3.628l-.113.162-.194.017c-.706.057-1.412.087-2.098.087zm-1.834-.904c1.235.093 2.433.093 3.667 0a24.469 24.469 0 0 0 1.832-3.168 23.916 23.916 0 0 0-1.832-3.168 23.877 23.877 0 0 0-3.667 0 23.743 23.743 0 0 0-1.832 3.168 24.82 24.82 0 0 0 1.832 3.168z"}}]})(props);
}

// THIS FILE IS AUTO GENERATED
function SiAstro (props) {
  return GenIcon({"tag":"svg","attr":{"role":"img","viewBox":"0 0 24 24"},"child":[{"tag":"title","attr":{},"child":[]},{"tag":"path","attr":{"d":"M8.358 20.162c-1.186-1.07-1.532-3.316-1.038-4.944.856 1.026 2.043 1.352 3.272 1.535 1.897.283 3.76.177 5.522-.678.202-.098.388-.229.608-.36.166.473.209.95.151 1.437-.14 1.185-.738 2.1-1.688 2.794-.38.277-.782.525-1.175.787-1.205.804-1.531 1.747-1.078 3.119l.044.148a3.158 3.158 0 0 1-1.407-1.188 3.31 3.31 0 0 1-.544-1.815c-.004-.32-.004-.642-.048-.958-.106-.769-.472-1.113-1.161-1.133-.707-.02-1.267.411-1.415 1.09-.012.053-.028.104-.045.165h.002zm-5.961-4.445s3.24-1.575 6.49-1.575l2.451-7.565c.092-.366.36-.614.662-.614.302 0 .57.248.662.614l2.45 7.565c3.85 0 6.491 1.575 6.491 1.575L16.088.727C15.93.285 15.663 0 15.303 0H8.697c-.36 0-.615.285-.784.727l-5.516 14.99z"}}]})(props);
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
