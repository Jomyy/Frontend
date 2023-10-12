import { c as create_ssr_component, b as add_attribute, e as escape, f as each, v as validate_component } from "../../../chunks/ssr.js";
import { a as apiURL } from "../../../chunks/index.js";
const Artistcard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<a${add_attribute("href", "/artist/" + data.id, 0)}><div class="h-max relative"><img${add_attribute("src", apiURL + "files/" + data.collectionId + "/" + data.id + "/" + data.Profilpicture, 0)} class="aspect-square object-cover" alt="artistprofilepicture"> <div class="absolute bottom-0 left-0 right-0 p-8 h-16 w-full text-center bg-gradient-to-t from-black via-black text-white"><span class="w-full text-center">${escape(data.Name)}</span></div></div></a>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  console.log(data.artists.items);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4">${each(data.artists.items, (artist) => {
    return `${validate_component(Artistcard, "Artistcard").$$render($$result, { data: artist }, {}, {})}`;
  })}</div>`;
});
export {
  Page as default
};
