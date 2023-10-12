import { a as apiURL } from "../../../chunks/index.js";
const prerender = true;
async function load({ fetch, params }) {
  const res = await fetch(apiURL + "collections/artists/records");
  const artists = await res.json();
  return { artists };
}
export {
  load,
  prerender
};
