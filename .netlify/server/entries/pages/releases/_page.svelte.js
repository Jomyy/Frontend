import { c as create_ssr_component, b as add_attribute, f as each, v as validate_component } from "../../../chunks/ssr.js";
import { a as apiURL } from "../../../chunks/index.js";
const Releasecard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<a${add_attribute("href", "/release/" + data.id, 0)} class="p-4"><div class="h-max relative"><img${add_attribute("src", apiURL + "files/" + data.collectionId + "/" + data.id + "/" + data.Cover, 0)} class="aspect-square object-cover w-full drop-shadow-lg" alt="artistprofilepicture"></div></a>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4 bg-neutral-800">${each(data.releases.items, (release) => {
    return `${validate_component(Releasecard, "Releasecard").$$render($$result, { data: release }, {}, {})}`;
  })}</div>`;
});
export {
  Page as default
};
