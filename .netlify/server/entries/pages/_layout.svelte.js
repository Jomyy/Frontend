import { c as create_ssr_component, b as add_attribute } from "../../chunks/ssr.js";
import { inject } from "@vercel/analytics";
const app = "";
const hamburgericon = "/_app/immutable/assets/menuopen.30f1250c.svg";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  inject({ mode: "production" });
  return `<nav class="bg-black fixed w-screen text-white text-center h-16 m-0 p-0 font-sans z-50 hidden md:flex no-underline" data-svelte-h="svelte-1cvjidf"><ul class="list-none flex flex-row h-16 w-screen align-middle m-0 p-0 justify-evenly"><li class="w-full h-full"><a href="/" class="flex justify-center items-center w-full h-full no-underline">Home</a></li> <li class="w-full h-full"><a class="flex justify-center items-center w-full h-full no-underline" href="/artists">Artists</a></li> <li class="w-full h-full"><a class="flex justify-center items-center w-full h-full no-underline" href="/releases">Releases</a></li> <li class="w-full h-full"><a class="flex justify-center items-center w-full h-full no-underline" href="/events">Events</a></li> <li class="w-full h-full"><a class="flex justify-center items-center w-full h-full no-underline" href="/contact">Contact</a></li></ul></nav> <nav class="bg-black fixed w-screen text-white text-center m-0 p-0 font-sans z-50 md:hidden flex-row"><div class="flex justify-end h-24">${`  <img${add_attribute("src", hamburgericon, 0)} class="invert aspect-square p-6" alt="menu">`}</div> ${``}</nav> <div class="h-24 md:h-16"></div> ${slots.default ? slots.default({ class: "bg-neutral-900" }) : ``}`;
});
export {
  Layout as default
};
