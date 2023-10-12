import { a as apiURL } from "../../../chunks/index.js";
const prerender = true;
async function load({ fetch, params }) {
  const res = await fetch(apiURL + "collections/releases/records");
  const releases = await res.json();
  return { releases };
}
export {
  load,
  prerender
};
